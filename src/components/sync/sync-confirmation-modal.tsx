import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SyncSummary, GoogleCalendar } from "@/types/shift";
import { GoogleCalendarService } from "@/lib/google-calendar";
import { CreateCalendarDialog } from "@/components/calendar/create-calendar-dialog";
import {
  PlusCircle,
  Edit3,
  Trash2,
  AlertTriangle,
  Info,
  Calendar,
  Plus,
  RefreshCw,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { toast } from "sonner";

const STORAGE_KEY_SELECTED_CALENDAR = "selected_calendar_id";

interface SyncConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (calendarId: string, calendarSummary?: string) => void;
  summary: SyncSummary;
  loading?: boolean;
  accessToken: string;
  initialCalendarId?: string | null;
  onTokenExpired?: () => void;
}

export function SyncConfirmationModal({
  open,
  onClose,
  onConfirm,
  summary,
  loading,
  accessToken,
  initialCalendarId,
  onTokenExpired,
}: SyncConfirmationModalProps) {
  const totalChanges = summary.create + summary.update + summary.delete;

  // Calendar state
  const [calendars, setCalendars] = useState<GoogleCalendar[]>([]);
  const [selectedCalendarId, setSelectedCalendarId] = useState<string | null>(
    initialCalendarId || null,
  );
  const [calendarsLoading, setCalendarsLoading] = useState(false);
  const [calendarsError, setCalendarsError] = useState<string | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [creatingCalendar, setCreatingCalendar] = useState(false);

  // Fetch calendars when modal opens
  useEffect(() => {
    if (open && accessToken) {
      fetchCalendars();
    }
  }, [open, accessToken]);

  // Update selected calendar when initialCalendarId changes
  useEffect(() => {
    if (initialCalendarId) {
      setSelectedCalendarId(initialCalendarId);
    }
  }, [initialCalendarId]);

  // Restore from localStorage if no initial calendar
  useEffect(() => {
    if (open && !initialCalendarId && calendars.length > 0) {
      const storedId = localStorage.getItem(STORAGE_KEY_SELECTED_CALENDAR);
      if (storedId && calendars.some((c) => c.id === storedId)) {
        setSelectedCalendarId(storedId);
      }
    }
  }, [open, initialCalendarId, calendars]);

  const fetchCalendars = async () => {
    if (!accessToken) return;

    try {
      setCalendarsLoading(true);
      setCalendarsError(null);
      const service = new GoogleCalendarService(accessToken);
      const calendarList = await service.listCalendars();
      setCalendars(calendarList);

      // If no calendar selected but we have a stored preference
      if (!selectedCalendarId) {
        const storedId = localStorage.getItem(STORAGE_KEY_SELECTED_CALENDAR);
        if (storedId && calendarList.some((c) => c.id === storedId)) {
          setSelectedCalendarId(storedId);
        } else {
          // Auto-select primary
          const primary = calendarList.find((cal) => cal.primary);
          if (primary) {
            setSelectedCalendarId(primary.id);
          }
        }
      }
    } catch (err: unknown) {
      const errorMessage = getErrorMessage(err);

      if (
        errorMessage.includes("401") ||
        errorMessage.toLowerCase().includes("unauthorized") ||
        errorMessage.toLowerCase().includes("invalid credentials")
      ) {
        onTokenExpired?.();
        return;
      }

      setCalendarsError(errorMessage);
    } finally {
      setCalendarsLoading(false);
    }
  };

  const handleSelectCalendar = (id: string) => {
    setSelectedCalendarId(id);
    localStorage.setItem(STORAGE_KEY_SELECTED_CALENDAR, id);
  };

  const handleCreateCalendar = async (
    name: string,
    timeZone: string,
    description?: string,
  ) => {
    if (!accessToken) return;

    try {
      setCreatingCalendar(true);
      const service = new GoogleCalendarService(accessToken);
      const newCalendar = await service.createCalendar(
        name,
        timeZone,
        description,
      );

      toast.success(`Calendário "${newCalendar.summary}" criado com sucesso!`);

      // Refresh calendars and select the new one
      await fetchCalendars();
      setSelectedCalendarId(newCalendar.id);
      localStorage.setItem(STORAGE_KEY_SELECTED_CALENDAR, newCalendar.id);
      setShowCreateDialog(false);
    } catch (err: unknown) {
      const errorMessage = getErrorMessage(err);
      toast.error("Falha ao criar calendário: " + errorMessage);
    } finally {
      setCreatingCalendar(false);
    }
  };

  const handleConfirm = () => {
    if (selectedCalendarId) {
      onConfirm(selectedCalendarId, selectedCalendar?.summary);
    }
  };

  const selectedCalendar = calendars.find((c) => c.id === selectedCalendarId);
  const canSync = selectedCalendarId && !calendarsLoading && !loading;

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl font-bold">
              Confirmar Sincronização
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm">
              Reveja as alterações e selecione o calendário para sincronizar
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2 sm:py-4">
            {/* Calendar Selection Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  Calendário de Destino
                </label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={fetchCalendars}
                  disabled={calendarsLoading}
                  className="h-7 sm:h-8 px-2"
                >
                  <RefreshCw
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${calendarsLoading ? "animate-spin" : ""}`}
                  />
                </Button>
              </div>

              {calendarsError && (
                <Alert variant="destructive">
                  <AlertDescription className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm">
                    <span>{calendarsError}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={fetchCalendars}
                      className="w-full sm:w-auto"
                    >
                      Tentar novamente
                    </Button>
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex flex-col sm:flex-row gap-2">
                <Select
                  value={selectedCalendarId || undefined}
                  onValueChange={handleSelectCalendar}
                  disabled={calendarsLoading || calendars.length === 0}
                >
                  <SelectTrigger className="flex-1 h-10 sm:h-11 text-xs sm:text-sm">
                    <SelectValue
                      placeholder={
                        calendarsLoading
                          ? "A carregar calendários..."
                          : "Selecione um calendário"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {calendars.map((calendar) => (
                      <SelectItem key={calendar.id} value={calendar.id}>
                        <div className="flex items-center gap-2">
                          {calendar.backgroundColor && (
                            <div
                              className="w-3 h-3 rounded-full flex-shrink-0"
                              style={{
                                backgroundColor: calendar.backgroundColor,
                              }}
                            />
                          )}
                          <span className="truncate text-xs sm:text-sm">
                            {calendar.summary}
                          </span>
                          {calendar.primary && (
                            <span className="text-xs text-muted-foreground">
                              (Principal)
                            </span>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => setShowCreateDialog(true)}
                  disabled={calendarsLoading}
                  className="h-10 sm:h-11 px-3 w-full sm:w-auto"
                  title="Criar novo calendário"
                >
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="sm:hidden ml-2">Criar Calendário</span>
                </Button>
              </div>

              {/* Selected calendar preview */}
              {selectedCalendar && (
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="flex items-center gap-2 sm:gap-3">
                    {selectedCalendar.backgroundColor && (
                      <div
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg shadow-sm flex-shrink-0"
                        style={{
                          backgroundColor: selectedCalendar.backgroundColor,
                        }}
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-xs sm:text-sm truncate">
                        {selectedCalendar.summary}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {selectedCalendar.primary
                          ? "Calendário Principal"
                          : "Calendário Secundário"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {!selectedCalendarId &&
                !calendarsLoading &&
                calendars.length > 0 && (
                  <Alert className="bg-amber-50 border-amber-200">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <AlertDescription className="text-xs sm:text-sm text-amber-900">
                      Por favor, selecione um calendário para continuar
                    </AlertDescription>
                  </Alert>
                )}
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="bg-green-50 rounded-lg p-3 sm:p-4 border border-green-200">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <PlusCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-center text-green-900">
                  {summary.create}
                </p>
                <p className="text-xs text-center text-green-700 font-medium mt-1">
                  Criar
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Edit3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-center text-blue-900">
                  {summary.update}
                </p>
                <p className="text-xs text-center text-blue-700 font-medium mt-1">
                  Atualizar
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-3 sm:p-4 border border-red-200">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-center text-red-900">
                  {summary.delete}
                </p>
                <p className="text-xs text-center text-red-700 font-medium mt-1">
                  Eliminar
                </p>
              </div>
            </div>

            {/* Non-Destructive Sync Info */}
            <Alert className="bg-blue-50 border-blue-200">
              <Info className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <AlertDescription className="text-xs sm:text-sm text-blue-900">
                <span className="font-semibold">
                  Sincronização não destrutiva:
                </span>{" "}
                Apenas eventos relacionados com turnos serão modificados. Os
                seus outros eventos de calendário permanecem inalterados.
              </AlertDescription>
            </Alert>

            {/* Warning for deletions */}
            {summary.delete > 0 && (
              <Alert
                variant="destructive"
                className="bg-amber-50 border-amber-300"
              >
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <AlertDescription className="text-xs sm:text-sm text-amber-900">
                  {summary.delete} evento{summary.delete !== 1 ? "s" : ""} de
                  turno será{summary.delete !== 1 ? "ão" : ""} removido
                  {summary.delete !== 1 ? "s" : ""} do seu calendário.
                </AlertDescription>
              </Alert>
            )}

            {/* Total Changes Summary */}
            <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs sm:text-sm text-slate-900">
                  Total de Alterações
                </span>
                <span className="text-xl sm:text-2xl font-bold text-slate-900">
                  {totalChanges}
                </span>
              </div>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              disabled={loading}
              className="w-full sm:w-auto text-xs sm:text-sm"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={!canSync}
              className="w-full sm:w-auto font-semibold text-xs sm:text-sm"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  A sincronizar...
                </span>
              ) : (
                `Confirmar e Sincronizar ${totalChanges} Alteração${totalChanges !== 1 ? "s" : ""}`
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create Calendar Dialog */}
      <CreateCalendarDialog
        open={showCreateDialog}
        onClose={() => setShowCreateDialog(false)}
        onCreate={handleCreateCalendar}
        loading={creatingCalendar}
      />
    </>
  );
}
