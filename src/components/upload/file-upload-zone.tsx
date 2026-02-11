import { useCallback, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, FileSpreadsheet, X, CheckCircle2, AlertCircle, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { parseExcelFile, validateExcelFile } from '@/lib/excel-parser';
import { ShiftData, ParsedScheduleResult } from '@/types/shift';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getErrorMessage } from '@/lib/getErrorMessage';

interface FileUploadZoneProps {
  onFileProcessed: (shifts: ShiftData[], employeeName?: string) => void;
  disabled?: boolean;
}

export function FileUploadZone({ onFileProcessed, disabled }: FileUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  // Employee selection state
  const [parsedResult, setParsedResult] = useState<ParsedScheduleResult | null>(null);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      if (disabled) return;

      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile) {
        await processFile(droppedFile);
      }
    },
    [disabled]
  );

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      await processFile(selectedFile);
    }
  };

  const processFile = async (selectedFile: File) => {
    setError(null);
    setSuccess(false);
    setParsedResult(null);
    setSelectedEmployeeId(null);
    
    // Validate file
    const validation = validateExcelFile(selectedFile);
    if (!validation.valid) {
      setError(validation.error || 'Invalid file');
      return;
    }

    setFile(selectedFile);
    setUploading(true);
    setProgress(0);

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + 10;
        });
      }, 100);

      // Parse Excel file
      const result = await parseExcelFile(selectedFile);
      
      clearInterval(progressInterval);
      setProgress(100);
      setSuccess(true);
      setParsedResult(result);
      
      // If only one employee, auto-select and proceed
      if (result.employees.length === 1) {
        const employee = result.employees[0];
        setSelectedEmployeeId(employee.employeeId);
        setTimeout(() => {
          onFileProcessed(employee.shifts, employee.employeeName);
        }, 500);
      }
      // Otherwise, wait for employee selection
    } catch (err) {
      setError(getErrorMessage(err));
      setFile(null);
    } finally {
      setUploading(false);
    }
  };

  const handleEmployeeSelect = (employeeId: string) => {
    setSelectedEmployeeId(employeeId);
    
    if (parsedResult) {
      const employee = parsedResult.employees.find(e => e.employeeId === employeeId);
      if (employee) {
        onFileProcessed(employee.shifts, employee.employeeName);
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setError(null);
    setSuccess(false);
    setProgress(0);
    setParsedResult(null);
    setSelectedEmployeeId(null);
  };

  // Show employee selector if multiple employees found
  const showEmployeeSelector = parsedResult && 
    parsedResult.employees.length > 1 && 
    !selectedEmployeeId;

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileSpreadsheet className="w-5 h-5" />
          Upload Schedule
        </CardTitle>
        <CardDescription>
          Upload your Excel shift schedule file (.xlsx or .xls)
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {disabled && (
          <Alert>
            <AlertCircle className="w-4 h-4" />
            <AlertDescription>
              Please select a calendar first before uploading your schedule.
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="w-4 h-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!file ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
              relative border-2 border-dashed rounded-xl p-8 transition-all
              ${isDragging
                ? 'border-primary bg-primary/5 scale-[1.02]'
                : 'border-slate-300 bg-slate-50 hover:border-primary/50 hover:bg-slate-100'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileSelect}
              disabled={disabled}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
              id="file-upload"
            />
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-1">
                  {isDragging ? 'Drop file here' : 'Drag & drop your Excel file'}
                </p>
                <p className="text-sm text-muted-foreground">
                  or click to browse
                </p>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Supported formats: .xlsx, .xls</p>
                <p>Maximum file size: 5MB</p>
                <p className="text-primary/80">Supports Concentrix schedule format</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <FileSpreadsheet className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                {!uploading && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRemoveFile}
                    className="flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {uploading && (
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Processing...</span>
                    <span className="font-semibold">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}

              {success && !showEmployeeSelector && (
                <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-semibold">File processed successfully!</span>
                </div>
              )}
            </div>

            {/* Employee Selector */}
            {showEmployeeSelector && (
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 space-y-3">
                <div className="flex items-center gap-2 text-blue-800">
                  <Users className="w-4 h-4" />
                  <span className="font-semibold text-sm">
                    Multiple employees found ({parsedResult.employees.length})
                  </span>
                </div>
                <p className="text-xs text-blue-700">
                  Select the employee whose schedule you want to sync:
                </p>
                <Select onValueChange={handleEmployeeSelect}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select an employee..." />
                  </SelectTrigger>
                  <SelectContent>
                    {parsedResult.employees.map((employee) => (
                      <SelectItem key={employee.employeeId} value={employee.employeeId}>
                        <div className="flex flex-col">
                          <span className="font-medium">{employee.employeeName}</span>
                          {employee.lob && (
                            <span className="text-xs text-muted-foreground">
                              {employee.lob} • {employee.shifts.length} shifts
                            </span>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button
              onClick={handleRemoveFile}
              variant="outline"
              className="w-full"
              disabled={uploading}
            >
              Upload Different File
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
