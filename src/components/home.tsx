import { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { AuthCard } from '@/components/auth/auth-card';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { CalendarSelector } from '@/components/calendar/calendar-selector';
import { FileUploadZone } from '@/components/upload/file-upload-zone';
import { ShiftPreviewTable } from '@/components/shifts/shift-preview-table';
import { SyncConfirmationModal } from '@/components/sync/sync-confirmation-modal';
import { SuccessModal } from '@/components/sync/success-modal';
import { ShiftData, SyncSummary } from '@/types/shift';
import { GoogleCalendarService } from '@/lib/google-calendar';
import { getErrorMessage } from '@/lib/getErrorMessage';
import { toast } from 'sonner';

const STORAGE_KEYS = {
  ACCESS_TOKEN: 'google_access_token',
  USER_EMAIL: 'google_user_email',
};

type AppStep = 'auth' | 'upload' | 'preview' | 'confirm' | 'success';

function Home() {
  // Authentication state
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string>('');
  const [authLoading, setAuthLoading] = useState(false);
  const [isRestoringSession, setIsRestoringSession] = useState(true);

  // Calendar state
  const [selectedCalendar, setSelectedCalendar] = useState<string | null>(null);
  const [calendarName, setCalendarName] = useState<string>('');

  // Shifts state
  const [shifts, setShifts] = useState<ShiftData[]>([]);
  const [selectedEmployeeName, setSelectedEmployeeName] = useState<string>('');
  const [syncSummary, setSyncSummary] = useState<SyncSummary>({ create: 0, update: 0, delete: 0 });

  // UI state
  const [currentStep, setCurrentStep] = useState<AppStep>('auth');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [syncing, setSyncing] = useState(false);

  // Restore session from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    const storedEmail = localStorage.getItem(STORAGE_KEYS.USER_EMAIL);

    if (storedToken && storedEmail) {
      // Validate token by making a simple API call
      validateAndRestoreSession(storedToken, storedEmail);
    } else {
      setIsRestoringSession(false);
    }
  }, []);

  const validateAndRestoreSession = async (token: string, email: string) => {
    try {
      // Validate token by fetching user info
      const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setAccessToken(token);
        setUserEmail(email);
        setCurrentStep('upload');
      } else {
        // Token is invalid/expired, clear storage
        clearSession();
        toast.error('Session expired, please sign in again');
      }
    } catch {
      // Network error or token invalid
      clearSession();
    } finally {
      setIsRestoringSession(false);
    }
  };

  const clearSession = () => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_EMAIL);
    setAccessToken(null);
    setUserEmail('');
    setCurrentStep('auth');
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const token = tokenResponse.access_token;
        setAccessToken(token);
        
        // Fetch user info
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (!userInfoResponse.ok) {
          throw new Error('Failed to fetch user info');
        }
        
        const userInfo = await userInfoResponse.json();
        const email = userInfo.email || '';
        setUserEmail(email);
        
        // Persist to localStorage
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
        localStorage.setItem(STORAGE_KEYS.USER_EMAIL, email);
        
        setCurrentStep('upload');
        setAuthLoading(false);
        toast.success('Successfully authenticated!');
      } catch (err) {
        setAuthLoading(false);
        toast.error('Authentication failed: ' + getErrorMessage(err));
      }
    },
    onError: (error) => {
      setAuthLoading(false);
      toast.error('Google login failed: ' + getErrorMessage(error));
    },
    scope: 'openid email profile https://www.googleapis.com/auth/calendar',
  });

  const handleSignIn = async (gdprConsent: boolean) => {
    if (!gdprConsent) return;

    setAuthLoading(true);
    googleLogin();
  };

  const handleFileProcessed = (processedShifts: ShiftData[], employeeName?: string) => {
    setShifts(processedShifts);
    setSelectedEmployeeName(employeeName || '');
    setCurrentStep('preview');
    toast.success(`${processedShifts.length} shifts loaded successfully!${employeeName ? ` (${employeeName})` : ''}`);
  };

  const handlePreviewConfirm = () => {
    // Calculate sync summary
    const summary: SyncSummary = {
      create: shifts.filter(s => s.status === 'active').length,
      update: shifts.filter(s => s.status === 'modified').length,
      delete: shifts.filter(s => s.status === 'deleted').length,
    };
    
    setSyncSummary(summary);
    setShowConfirmModal(true);
  };

  const handleSync = async (calendarId: string, calendarSummary?: string) => {
    if (!accessToken || !calendarId) return;

    setSyncing(true);

    try {
      const service = new GoogleCalendarService(accessToken);

      for (let i = 0; i < shifts.length; i++) {
        const shift = shifts[i];
        
        if (shift.status === 'active') {
          await service.createEvent(calendarId, shift);
        } else if (shift.status === 'modified') {
          if (shift.googleEventId) {
            await service.updateEvent(calendarId, shift.googleEventId, shift);
          } else {
            toast.warning(`Shift on ${shift.date} skipped: no event ID for update`);
          }
        } else if (shift.status === 'deleted') {
          if (shift.googleEventId) {
            await service.deleteEvent(calendarId, shift.googleEventId);
          } else {
            toast.warning(`Shift on ${shift.date} skipped: no event ID for deletion`);
          }
        }
      }

      // Update selected calendar state for success modal
      setSelectedCalendar(calendarId);
      if (calendarSummary) {
        setCalendarName(calendarSummary);
      }

      setShowConfirmModal(false);
      setShowSuccessModal(true);
      toast.success('Calendar synchronized successfully!');
    } catch (err) {
      toast.error('Failed to sync calendar: ' + getErrorMessage(err));
    } finally {
      setSyncing(false);
    }
  };

  const handleNewSync = () => {
    setShifts([]);
    setSelectedEmployeeName('');
    setShowSuccessModal(false);
    setCurrentStep('upload');
  };

  const handleLogout = () => {
    clearSession();
    setSelectedCalendar(null);
    setShifts([]);
    toast.info('Logged out successfully');
  };

  const handleTokenExpired = () => {
    clearSession();
    toast.error('Session expired, please sign in again');
  };

  // Show loading while restoring session
  if (isRestoringSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Restoring session...</p>
        </div>
      </div>
    );
  }

  // Authentication screen
  if (currentStep === 'auth') {
    return <AuthCard onSignIn={handleSignIn} loading={authLoading} />;
  }

  // Main dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-6xl space-y-6">
        <DashboardHeader email={userEmail} onLogout={handleLogout} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <CalendarSelector
              accessToken={accessToken || ''}
              selectedCalendar={selectedCalendar}
              onSelectCalendar={(id, name) => {
                setSelectedCalendar(id);
                setCalendarName(name || 'My Calendar');
              }}
              onTokenExpired={handleTokenExpired}
            />

            {(currentStep === 'upload' || currentStep === 'preview') && (
              <FileUploadZone
                onFileProcessed={handleFileProcessed}
                disabled={false}
              />
            )}
          </div>

          <div className="lg:col-span-2">
            {currentStep === 'preview' && shifts.length > 0 && (
              <ShiftPreviewTable
                shifts={shifts}
                onConfirm={handlePreviewConfirm}
                employeeName={selectedEmployeeName}
              />
            )}
          </div>
        </div>

        {/* Modals */}
        <SyncConfirmationModal
          open={showConfirmModal}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={handleSync}
          summary={syncSummary}
          loading={syncing}
          accessToken={accessToken || ''}
          initialCalendarId={selectedCalendar}
          onTokenExpired={handleTokenExpired}
        />

        <SuccessModal
          open={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          onNewSync={handleNewSync}
          summary={syncSummary}
          calendarName={calendarName}
        />
      </div>
    </div>
  );
}

export default Home;
