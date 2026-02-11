import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { SyncSummary } from '@/types/shift';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  onNewSync: () => void;
  summary: SyncSummary;
  calendarName?: string;
}

export function SuccessModal({
  open,
  onClose,
  onNewSync,
  summary,
  calendarName,
}: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl sm:text-2xl">Successfully Synced!</DialogTitle>
          <DialogDescription className="text-center text-sm sm:text-base pt-2">
            Your shifts have been synchronized to your calendar
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-3 sm:py-4">
          {/* Calendar Info */}
          {calendarName && (
            <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border border-slate-200">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">Synced to</p>
                  <p className="font-semibold text-xs sm:text-sm truncate">{calendarName}</p>
                </div>
              </div>
            </div>
          )}

          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="text-center p-2 sm:p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-xl sm:text-2xl font-bold text-green-900">{summary.create}</p>
              <p className="text-xs text-green-700">Created</p>
            </div>
            <div className="text-center p-2 sm:p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xl sm:text-2xl font-bold text-blue-900">{summary.update}</p>
              <p className="text-xs text-blue-700">Updated</p>
            </div>
            <div className="text-center p-2 sm:p-3 bg-red-50 rounded-lg border border-red-200">
              <p className="text-xl sm:text-2xl font-bold text-red-900">{summary.delete}</p>
              <p className="text-xs text-red-700">Deleted</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <Button onClick={onNewSync} className="w-full h-10 sm:h-12 font-semibold text-sm sm:text-base">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Sync Another File
            </Button>
            <Button onClick={onClose} variant="outline" className="w-full h-10 sm:h-auto text-sm sm:text-base">
              Back to Dashboard
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
