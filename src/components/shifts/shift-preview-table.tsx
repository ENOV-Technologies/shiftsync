import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShiftData } from '@/types/shift';
import { CalendarCheck, Edit2 } from 'lucide-react';
import { format } from 'date-fns';

interface ShiftPreviewTableProps {
  shifts: ShiftData[];
  onConfirm: () => void;
  onEdit?: (shiftId: string) => void;
  employeeName?: string;
}

const shiftTypeColors = {
  morning: 'bg-amber-100 text-amber-800 border-amber-300',
  afternoon: 'bg-blue-100 text-blue-800 border-blue-300',
  night: 'bg-indigo-100 text-indigo-800 border-indigo-300',
  off: 'bg-slate-100 text-slate-800 border-slate-300',
  other: 'bg-purple-100 text-purple-800 border-purple-300',
};

const shiftTypeLabels = {
  morning: 'Morning',
  afternoon: 'Afternoon',
  night: 'Late',
  off: 'Off',
  other: 'Other',
};

// Get day name from date
function getDayName(date: Date): string {
  return format(date, 'EEEE');
}

export function ShiftPreviewTable({ shifts, onConfirm, onEdit, employeeName }: ShiftPreviewTableProps) {
  // Check if shifts have extended info (LOB, location)
  const hasExtendedInfo = shifts.some(s => s.lob || s.location);
  
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <CalendarCheck className="w-5 h-5" />
              Shift Preview
              {employeeName && (
                <Badge variant="outline" className="ml-2 font-normal">
                  {employeeName}
                </Badge>
              )}
            </CardTitle>
            <CardDescription>
              Review your schedule before syncing ({shifts.length} shifts found)
            </CardDescription>
          </div>
          <Badge variant="secondary" className="text-sm font-semibold px-3 py-1">
            {shifts.length} {shifts.length === 1 ? 'Shift' : 'Shifts'}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <div className="max-h-[400px] overflow-y-auto">
            <Table>
              <TableHeader className="bg-slate-50 sticky top-0">
                <TableRow>
                  <TableHead className="font-semibold">Date</TableHead>
                  <TableHead className="font-semibold">Day</TableHead>
                  <TableHead className="font-semibold">Start</TableHead>
                  <TableHead className="font-semibold">End</TableHead>
                  <TableHead className="font-semibold">Type</TableHead>
                  {hasExtendedInfo && (
                    <>
                      <TableHead className="font-semibold">LOB</TableHead>
                      <TableHead className="font-semibold">Location</TableHead>
                    </>
                  )}
                  {onEdit && <TableHead className="font-semibold w-16"></TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {shifts.map((shift) => (
                  <TableRow key={shift.id} className="hover:bg-slate-50 transition-colors">
                    <TableCell className="whitespace-nowrap font-medium">
                      {format(new Date(shift.date), 'dd/MM/yyyy')}
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-muted-foreground">
                      {getDayName(new Date(shift.date))}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {shift.shiftType === 'off' ? (
                        <span className="text-muted-foreground">—</span>
                      ) : (
                        shift.startTime
                      )}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {shift.shiftType === 'off' ? (
                        <span className="text-muted-foreground">—</span>
                      ) : (
                        shift.endTime
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`${shiftTypeColors[shift.shiftType]} font-semibold`}
                      >
                        {shiftTypeLabels[shift.shiftType]}
                      </Badge>
                    </TableCell>
                    {hasExtendedInfo && (
                      <>
                        <TableCell className="text-sm text-muted-foreground">
                          {shift.lob || '—'}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {shift.location || '—'}
                        </TableCell>
                      </>
                    )}
                    {onEdit && (
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onEdit(shift.id)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit2 className="w-3 h-3" />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Shift Type Legend */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <p className="text-xs font-semibold text-slate-700 mb-3">Shift Types</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {Object.entries(shiftTypeColors).map(([type, colors]) => (
              <div key={type} className="flex items-center gap-2">
                <Badge variant="outline" className={`${colors} text-xs`}>
                  {shiftTypeLabels[type as keyof typeof shiftTypeLabels]}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <Button onClick={onConfirm} className="w-full h-12 text-base font-semibold shadow-lg">
          Continue to Sync
        </Button>
      </CardContent>
    </Card>
  );
}
