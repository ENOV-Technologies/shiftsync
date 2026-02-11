import { GoogleCalendar, CalendarEvent, ShiftData } from '@/types/shift';

const GOOGLE_API_BASE = 'https://www.googleapis.com/calendar/v3';

export class GoogleCalendarService {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  private async fetchAPI(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${GOOGLE_API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'API request failed');
    }

    return response.json();
  }

  async listCalendars(): Promise<GoogleCalendar[]> {
    const data = await this.fetchAPI('/users/me/calendarList');
    return data.items || [];
  }

  async createCalendar(
    summary: string,
    timeZone: string = 'Europe/Lisbon',
    description?: string
  ): Promise<{ id: string; summary: string }> {
    const body: { summary: string; timeZone: string; description?: string } = {
      summary,
      timeZone,
    };
    if (description) {
      body.description = description;
    }

    const data = await this.fetchAPI('/calendars', {
      method: 'POST',
      body: JSON.stringify(body),
    });

    return { id: data.id, summary: data.summary };
  }

  async getEvents(calendarId: string, timeMin: string, timeMax: string): Promise<CalendarEvent[]> {
    const params = new URLSearchParams({
      timeMin,
      timeMax,
      singleEvents: 'true',
      orderBy: 'startTime',
    });
    
    const data = await this.fetchAPI(`/calendars/${encodeURIComponent(calendarId)}/events?${params}`);
    return data.items || [];
  }

  async createEvent(calendarId: string, shift: ShiftData): Promise<CalendarEvent> {
    const event = this.shiftToEvent(shift);
    return this.fetchAPI(`/calendars/${encodeURIComponent(calendarId)}/events`, {
      method: 'POST',
      body: JSON.stringify(event),
    });
  }

  async updateEvent(calendarId: string, eventId: string, shift: ShiftData): Promise<CalendarEvent> {
    const event = this.shiftToEvent(shift);
    return this.fetchAPI(`/calendars/${encodeURIComponent(calendarId)}/events/${eventId}`, {
      method: 'PUT',
      body: JSON.stringify(event),
    });
  }

  async deleteEvent(calendarId: string, eventId: string): Promise<void> {
    await this.fetchAPI(`/calendars/${encodeURIComponent(calendarId)}/events/${eventId}`, {
      method: 'DELETE',
    });
  }

  private shiftToEvent(shift: ShiftData): Partial<CalendarEvent> {
    const startDateTime = new Date(shift.date);
    const [startHour, startMinute] = shift.startTime.split(':').map(Number);
    startDateTime.setHours(startHour, startMinute, 0, 0);

    const endDateTime = new Date(shift.date);
    const [endHour, endMinute] = shift.endTime.split(':').map(Number);
    endDateTime.setHours(endHour, endMinute, 0, 0);

    // Build summary with shift type
    const shiftTypeCapitalized = shift.shiftType.charAt(0).toUpperCase() + shift.shiftType.slice(1);
    let summary = `Shift - ${shiftTypeCapitalized}`;
    
    // Add LOB to summary if available
    if (shift.lob) {
      summary = `${shift.lob} - ${shiftTypeCapitalized}`;
    }

    // Build description
    const descriptionParts: string[] = [];
    if (shift.employeeName) {
      descriptionParts.push(`Employee: ${shift.employeeName}`);
    }
    if (shift.lob) {
      descriptionParts.push(`LOB: ${shift.lob}`);
    }
    if (shift.location) {
      descriptionParts.push(`Location: ${shift.location}`);
    }
    if (shift.notes) {
      descriptionParts.push(`Notes: ${shift.notes}`);
    }
    descriptionParts.push(`Week ${shift.week}`);

    return {
      summary,
      description: descriptionParts.join('\n'),
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Europe/Lisbon',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Europe/Lisbon',
      },
    };
  }
}
