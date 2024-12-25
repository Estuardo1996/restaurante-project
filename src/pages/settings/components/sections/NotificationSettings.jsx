import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function NotificationSettings({ notifications, onConfigure }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Notificaciones</h2>
      </div>
      <div className="space-y-2">
        {notifications.map((notification) => (
          <div key={notification} className="flex items-center justify-between">
            <span className="text-sm">{notification}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onConfigure(notification)}
            >
              Configurar
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}