import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, History, User } from 'lucide-react';

interface DashboardHeaderProps {
  email: string;
  onLogout: () => void;
}

export function DashboardHeader({ email, onLogout }: DashboardHeaderProps) {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-slate-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">Welcome back!</CardTitle>
              <CardDescription className="text-base">{email}</CardDescription>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <History className="w-4 h-4" />
              History
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
            <Button variant="outline" size="sm" onClick={onLogout} className="gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
