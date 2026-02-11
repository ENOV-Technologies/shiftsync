import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { GoogleCalendar } from '@/types/shift';
import { GoogleCalendarService } from '@/lib/google-calendar';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { getErrorMessage } from '@/lib/getErrorMessage';

interface CalendarSelectorProps {
  accessToken: string;
  selectedCalendar: string | null;
  onSelectCalendar: (calendarId: string, calendarName?: string) => void;
  onTokenExpired?: () => void;
}

export function CalendarSelector({ accessToken, selectedCalendar, onSelectCalendar, onTokenExpired }: CalendarSelectorProps) {
  const [calendars, setCalendars] = useState<GoogleCalendar[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (accessToken) {
      fetchCalendars();
    }
  }, [accessToken]);

  const fetchCalendars = async () => {
    if (!accessToken) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const service = new GoogleCalendarService(accessToken);
      const calendarList = await service.listCalendars();
      setCalendars(calendarList);
      
      // Auto-select primary calendar
      const primary = calendarList.find(cal => cal.primary);
      if (primary && !selectedCalendar) {
        onSelectCalendar(primary.id, primary.summary);
      }
    } catch (err: unknown) {
      const errorMessage = getErrorMessage(err);
      
      // Check for 401 unauthorized error (token expired)
      if (
        errorMessage.includes('401') || 
        errorMessage.toLowerCase().includes('unauthorized') ||
        errorMessage.toLowerCase().includes('invalid credentials')
      ) {
        onTokenExpired?.();
        return;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const selectedCalendarData = calendars.find(cal => cal.id === selectedCalendar);

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Select Calendar
        </CardTitle>
        <CardDescription>
          Choose which calendar to sync your shifts to
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {!accessToken && (
          <Alert>
            <AlertDescription>Sign in to load calendars.</AlertDescription>
          </Alert>
        )}

        {accessToken && error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Select
          value={selectedCalendar || undefined}
          onValueChange={(id) => {
            const cal = calendars.find(c => c.id === id);
            onSelectCalendar(id, cal?.summary);
          }}
          disabled={loading || calendars.length === 0 || !accessToken}
        >
          <SelectTrigger className="w-full h-12">
            <SelectValue placeholder={!accessToken ? 'Sign in to load calendars' : loading ? 'Loading calendars...' : 'Select a calendar'} />
          </SelectTrigger>
          <SelectContent>
            {calendars.map((calendar) => (
              <SelectItem key={calendar.id} value={calendar.id}>
                <div className="flex items-center gap-2">
                  {calendar.backgroundColor && (
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: calendar.backgroundColor }}
                    />
                  )}
                  <span>{calendar.summary}</span>
                  {calendar.primary && (
                    <span className="text-xs text-muted-foreground">(Primary)</span>
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedCalendarData && (
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <div className="flex items-center gap-3">
              {selectedCalendarData.backgroundColor && (
                <div
                  className="w-10 h-10 rounded-lg shadow-sm"
                  style={{ backgroundColor: selectedCalendarData.backgroundColor }}
                />
              )}
              <div>
                <p className="font-semibold text-sm">{selectedCalendarData.summary}</p>
                <p className="text-xs text-muted-foreground">
                  {selectedCalendarData.primary ? 'Primary Calendar' : 'Secondary Calendar'}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
