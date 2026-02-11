import { ShiftData, EmployeeSchedule, ParsedScheduleResult } from '@/types/shift';
import { getErrorMessage } from '@/lib/getErrorMessage';

// Dynamic import for xlsx to avoid build issues
let XLSX: any = null;

async function loadXLSX() {
  if (!XLSX) {
    // @ts-ignore - Dynamic import
    XLSX = await import('xlsx');
  }
  return XLSX;
}

/**
 * Convert Excel time value to HH:MM string
 */
function excelTimeToString(value: any): string | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  // If it's a string like "OFF", return null
  if (typeof value === 'string') {
    const trimmed = value.trim().toUpperCase();
    if (trimmed === 'OFF' || trimmed === 'FOLGA' || trimmed === '-' || trimmed === '') {
      return null;
    }
    // Try to parse string time formats like "11:00", "1100", "11"
    const timeMatch = trimmed.match(/^(\d{1,2}):?(\d{2})?$/);
    if (timeMatch) {
      const hours = timeMatch[1].padStart(2, '0');
      const minutes = timeMatch[2] || '00';
      return `${hours}:${minutes}`;
    }
    return trimmed;
  }

  // If it's a number, treat as Excel time fraction (0-1 representing 24 hours)
  if (typeof value === 'number') {
    // Excel stores time as a fraction of 24 hours
    const totalMinutes = Math.round(value * 24 * 60);
    const hours = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  // If it's a Date object
  if (value instanceof Date) {
    const hours = value.getHours();
    const minutes = value.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  return null;
}

/**
 * Convert Excel date to JavaScript Date (raw, may have wrong year)
 */
function excelDateToDate(value: any): Date | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  if (value instanceof Date) {
    return value;
  }

  if (typeof value === 'number') {
    // Excel date serial number - convert to JS date
    const excelEpoch = new Date(1899, 11, 30);
    const msPerDay = 24 * 60 * 60 * 1000;
    return new Date(excelEpoch.getTime() + value * msPerDay);
  }

  if (typeof value === 'string') {
    const parsed = new Date(value);
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  return null;
}

/**
 * Normalize a schedule date to the correct year.
 * Handles Excel serial numbers, Date objects, and string dates.
 * Returns ISO date string "YYYY-MM-DD" or null if invalid.
 */
function normalizeScheduleDate(
  raw: unknown,
  baseYear: number,
  hasDecember: boolean,
  hasJanuary: boolean
): string | null {
  if (raw === null || raw === undefined || raw === '') {
    return null;
  }

  let day: number | null = null;
  let month: number | null = null;

  // Handle Date objects
  if (raw instanceof Date && !isNaN(raw.getTime())) {
    const year = raw.getFullYear();
    day = raw.getDate();
    month = raw.getMonth() + 1; // 0-indexed

    // If year is reasonable (>= 2015), keep it as-is
    if (year >= 2015) {
      return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }
  }

  // Handle Excel serial numbers
  if (typeof raw === 'number') {
    const excelEpoch = new Date(1899, 11, 30);
    const msPerDay = 24 * 60 * 60 * 1000;
    const parsed = new Date(excelEpoch.getTime() + raw * msPerDay);
    
    if (!isNaN(parsed.getTime())) {
      const year = parsed.getFullYear();
      day = parsed.getDate();
      month = parsed.getMonth() + 1;

      // If year is reasonable, keep it
      if (year >= 2015) {
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      }
    }
  }

  // Handle string dates like "03/02", "03/02/2001", "2001-02-03", etc.
  if (typeof raw === 'string') {
    const trimmed = raw.trim();
    
    // Try DD/MM/YYYY or DD/MM format
    const slashMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?$/);
    if (slashMatch) {
      day = parseInt(slashMatch[1], 10);
      month = parseInt(slashMatch[2], 10);
      const yearPart = slashMatch[3] ? parseInt(slashMatch[3], 10) : null;
      
      // If year is reasonable, use it
      if (yearPart !== null) {
        const fullYear = yearPart < 100 ? 2000 + yearPart : yearPart;
        if (fullYear >= 2015) {
          return `${fullYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        }
      }
    }

    // Try parsing as ISO date or other standard format
    const parsed = new Date(trimmed);
    if (!isNaN(parsed.getTime())) {
      const year = parsed.getFullYear();
      day = parsed.getDate();
      month = parsed.getMonth() + 1;

      if (year >= 2015) {
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      }
    }
  }

  // If we couldn't extract day/month, return null
  if (day === null || month === null) {
    return null;
  }

  // Apply year logic based on Dec/Jan rollover
  let finalYear = baseYear;
  if (hasDecember && hasJanuary && month === 1) {
    finalYear = baseYear + 1;
  }

  return `${finalYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

/**
 * Extract month from a raw date value (for pre-scanning)
 */
function extractMonthFromRaw(raw: unknown): number | null {
  if (raw === null || raw === undefined || raw === '') {
    return null;
  }

  if (raw instanceof Date && !isNaN(raw.getTime())) {
    return raw.getMonth() + 1;
  }

  if (typeof raw === 'number') {
    const excelEpoch = new Date(1899, 11, 30);
    const msPerDay = 24 * 60 * 60 * 1000;
    const parsed = new Date(excelEpoch.getTime() + raw * msPerDay);
    if (!isNaN(parsed.getTime())) {
      return parsed.getMonth() + 1;
    }
  }

  if (typeof raw === 'string') {
    const trimmed = raw.trim();
    
    // Try DD/MM/YYYY or DD/MM format
    const slashMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?$/);
    if (slashMatch) {
      return parseInt(slashMatch[2], 10);
    }

    // Try parsing as standard date
    const parsed = new Date(trimmed);
    if (!isNaN(parsed.getTime())) {
      return parsed.getMonth() + 1;
    }
  }

  return null;
}

/**
 * Convert time string "HH:MM" to minutes since midnight
 */
function timeToMinutes(time: string): number {
  const parts = time.split(':').map(Number);
  const hours = parts[0] || 0;
  const minutes = parts[1] || 0;
  return hours * 60 + minutes;
}

/**
 * Determine shift type based on end time
 * - If endTime <= 17:00 -> 'morning'
 * - Else if endTime <= 18:00 -> 'afternoon'
 * - Else endTime > 18:00 -> 'night' (displayed as Late)
 * - If shift crosses midnight (end < start), classify as 'night'
 */
function determineShiftType(startTime: string, endTime: string): ShiftData['shiftType'] {
  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);
  
  // If end time is less than start time, shift crosses midnight -> night
  if (endMinutes < startMinutes) {
    return 'night';
  }
  
  // Classify based on end time thresholds
  if (endMinutes <= 17 * 60) {
    return 'morning';
  } else if (endMinutes <= 18 * 60) {
    return 'afternoon';
  } else {
    return 'night';
  }
}

/**
 * Detect if the sheet is in Concentrix wide format
 */
function isConcentrixWideFormat(jsonData: any[][]): { isMatch: boolean; headerRowIndex: number } {
  for (let i = 0; i < Math.min(jsonData.length, 10); i++) {
    const row = jsonData[i];
    if (!row) continue;
    
    const rowStr = row.map(cell => String(cell || '').toLowerCase()).join('|');
    
    // Look for header row with IEX ID and Shift Type
    if (rowStr.includes('iex id') || rowStr.includes('iex') || 
        (rowStr.includes('name') && rowStr.includes('shift type'))) {
      // Verify it has Start/End columns
      const hasStartEnd = row.some(cell => 
        String(cell || '').toLowerCase() === 'start'
      );
      if (hasStartEnd) {
        return { isMatch: true, headerRowIndex: i };
      }
    }
  }
  
  return { isMatch: false, headerRowIndex: -1 };
}

/**
 * Parse Concentrix wide schedule format
 */
function parseConcentrixWideSchedule(
  jsonData: any[][],
  headerRowIndex: number
): EmployeeSchedule[] {
  const employees: EmployeeSchedule[] = [];
  const headerRow = jsonData[headerRowIndex];
  const dateRow = jsonData[headerRowIndex - 2] || [];
  
  // Find column indices
  const colIndices: { [key: string]: number } = {};
  const startEndPairs: { startCol: number; endCol: number; dateCol: number }[] = [];
  
  headerRow.forEach((cell, idx) => {
    const cellStr = String(cell || '').toLowerCase().trim();
    
    if (cellStr === 'iex id') colIndices.iexId = idx;
    if (cellStr === 'workday id') colIndices.workdayId = idx;
    if (cellStr === 'dsid') colIndices.dsid = idx;
    if (cellStr === 'company') colIndices.company = idx;
    if (cellStr === 'name') colIndices.name = idx;
    if (cellStr === 'lob') colIndices.lob = idx;
    if (cellStr === 'wah / on-site' || cellStr === 'wah/on-site' || cellStr === 'location') {
      colIndices.location = idx;
    }
    if (cellStr === 'shift type') colIndices.shiftType = idx;
  });
  
  // Find Start/End column pairs after Shift Type column
  const shiftTypeCol = colIndices.shiftType || 7;
  let currentStart = -1;
  
  for (let i = shiftTypeCol + 1; i < headerRow.length; i++) {
    const cellStr = String(headerRow[i] || '').toLowerCase().trim();
    
    if (cellStr === 'start') {
      currentStart = i;
    } else if (cellStr === 'end' && currentStart !== -1) {
      startEndPairs.push({
        startCol: currentStart,
        endCol: i,
        dateCol: currentStart // Date is in the same column as Start in dateRow
      });
      currentStart = -1;
    }
  }
  
  // Pre-scan to detect which months are present (for Dec/Jan rollover)
  const monthsPresent = new Set<number>();
  for (const pair of startEndPairs) {
    const dateVal = dateRow[pair.dateCol] || dateRow[pair.startCol];
    const month = extractMonthFromRaw(dateVal);
    if (month !== null) {
      monthsPresent.add(month);
    }
  }
  const hasDecember = monthsPresent.has(12);
  const hasJanuary = monthsPresent.has(1);
  const baseYear = new Date().getFullYear();
  
  // Parse each employee row (rows after header)
  for (let rowIdx = headerRowIndex + 1; rowIdx < jsonData.length; rowIdx++) {
    const row = jsonData[rowIdx];
    if (!row || row.length === 0) continue;
    
    // Get employee info
    const employeeName = String(row[colIndices.name] || '').trim();
    if (!employeeName || employeeName.toLowerCase() === 'name') continue;
    
    const employeeId = String(row[colIndices.iexId] || row[colIndices.workdayId] || `emp-${rowIdx}`).trim();
    const company = String(row[colIndices.company] || '').trim();
    const lob = String(row[colIndices.lob] || '').trim();
    const location = String(row[colIndices.location] || '').trim();
    const shiftTypeStr = String(row[colIndices.shiftType] || '').trim();
    
    const shifts: ShiftData[] = [];
    
    // Parse each Start/End pair
    startEndPairs.forEach((pair, pairIdx) => {
      const startVal = row[pair.startCol];
      const endVal = row[pair.endCol];
      
      // Get date from dateRow - use normalized date with proper year
      const dateVal = dateRow[pair.dateCol] || dateRow[pair.startCol];
      const isoDate = normalizeScheduleDate(dateVal, baseYear, hasDecember, hasJanuary);
      
      if (!isoDate) return;
      
      // Convert ISO date to Date object for ShiftData
      const date = new Date(isoDate + 'T00:00:00');
      
      // Check if this is an OFF day
      const startStr = String(startVal || '').trim().toUpperCase();
      if (startStr === 'OFF' || startStr === 'FOLGA' || startStr === '-' || startStr === '') {
        // Skip OFF days - don't create a shift
        return;
      }
      
      const startTime = excelTimeToString(startVal);
      const endTime = excelTimeToString(endVal);
      
      if (!startTime || !endTime) return;
      
      const shiftType = determineShiftType(startTime, endTime);
      
      shifts.push({
        id: `shift-${rowIdx}-${pairIdx}-${Date.now()}`,
        week: Math.ceil((pairIdx + 1) / 7),
        date,
        startTime,
        endTime,
        shiftType,
        status: 'active',
        employeeName,
        lob,
        location,
        notes: shiftTypeStr
      });
    });
    
    // Sort shifts by date then by startTime
    shifts.sort((a, b) => {
      const dateA = a.date.getTime();
      const dateB = b.date.getTime();
      if (dateA !== dateB) return dateA - dateB;
      return timeToMinutes(a.startTime) - timeToMinutes(b.startTime);
    });
    
    if (shifts.length > 0 || employeeName) {
      employees.push({
        employeeId,
        employeeName,
        company,
        lob,
        shiftType: shiftTypeStr,
        location,
        shifts
      });
    }
  }
  
  return employees;
}

/**
 * Parse simple schedule format (original format)
 */
function parseSimpleSchedule(jsonData: any[][]): ShiftData[] {
  const shifts: ShiftData[] = [];
  const baseYear = new Date().getFullYear();
  
  // Pre-scan to detect which months are present (for Dec/Jan rollover)
  const monthsPresent = new Set<number>();
  for (let i = 1; i < jsonData.length; i++) {
    const row = jsonData[i] as any[];
    if (row.length < 4) continue;
    const month = extractMonthFromRaw(row[1]);
    if (month !== null) {
      monthsPresent.add(month);
    }
  }
  const hasDecember = monthsPresent.has(12);
  const hasJanuary = monthsPresent.has(1);
  
  // Skip header row and parse data
  for (let i = 1; i < jsonData.length; i++) {
    const row = jsonData[i] as any[];
    if (row.length < 4) continue;
    
    const week = parseInt(row[0]) || 0;
    const dateStr = row[1];
    const timeStr = row[2];
    const typeStr = String(row[3] || '').toLowerCase();
    
    // Parse date with proper year handling
    const isoDate = normalizeScheduleDate(dateStr, baseYear, hasDecember, hasJanuary);
    if (!isoDate) continue;
    
    const date = new Date(isoDate + 'T00:00:00');
    
    // Parse time range
    const [startTime, endTime] = String(timeStr || '').split('-').map((t: string) => t.trim());
    
    // Determine shift type
    let shiftType: ShiftData['shiftType'] = 'other';
    if (typeStr.includes('manha') || typeStr.includes('morning') || typeStr.includes('m')) {
      shiftType = 'morning';
    } else if (typeStr.includes('tarde') || typeStr.includes('afternoon') || typeStr.includes('a')) {
      shiftType = 'afternoon';
    } else if (typeStr.includes('noite') || typeStr.includes('night') || typeStr.includes('n')) {
      shiftType = 'night';
    } else if (typeStr.includes('folga') || typeStr.includes('off') || typeStr.includes('f')) {
      shiftType = 'off';
    }
    
    shifts.push({
      id: `shift-${i}-${Date.now()}`,
      week,
      date,
      startTime: startTime || '00:00',
      endTime: endTime || '00:00',
      shiftType,
      status: 'active',
      notes: row[4]?.toString() || undefined
    });
  }
  
  // Sort shifts by date then by startTime
  shifts.sort((a, b) => {
    const dateA = a.date.getTime();
    const dateB = b.date.getTime();
    if (dateA !== dateB) return dateA - dateB;
    return timeToMinutes(a.startTime) - timeToMinutes(b.startTime);
  });
  
  return shifts;
}

export async function parseExcelFile(file: File): Promise<ParsedScheduleResult> {
  const xlsxModule = await loadXLSX();
  
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = xlsxModule.read(data, { type: 'binary', cellDates: true });
        
        // Try to find "Schedules" sheet first, otherwise use first sheet
        let sheetName = workbook.SheetNames.find(
          (name: string) => name.toLowerCase() === 'schedules'
        );
        if (!sheetName) {
          sheetName = workbook.SheetNames[0];
        }
        
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = xlsxModule.utils.sheet_to_json(worksheet, { 
          header: 1,
          raw: false,
          dateNF: 'yyyy-mm-dd'
        }) as any[][];
        
        // Detect format
        const { isMatch, headerRowIndex } = isConcentrixWideFormat(jsonData);
        
        if (isMatch) {
          // Parse Concentrix wide format
          const employees = parseConcentrixWideSchedule(jsonData, headerRowIndex);
          resolve({
            employees,
            format: 'concentrix-wide'
          });
        } else {
          // Parse simple format
          const shifts = parseSimpleSchedule(jsonData);
          resolve({
            employees: [{
              employeeId: 'default',
              employeeName: 'My Schedule',
              shifts
            }],
            format: 'simple'
          });
        }
      } catch (error) {
        reject(new Error(`Failed to parse Excel file: ${getErrorMessage(error)}`));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsBinaryString(file);
  });
}

export function validateExcelFile(file: File): { valid: boolean; error?: string } {
  if (!file) {
    return { valid: false, error: 'No file provided' };
  }
  
  if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
    return { valid: false, error: 'File must be an Excel file (.xlsx or .xls)' };
  }
  
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    return { valid: false, error: 'File size must be less than 5MB' };
  }
  
  return { valid: true };
}
