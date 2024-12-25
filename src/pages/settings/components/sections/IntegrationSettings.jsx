import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Wifi } from 'lucide-react';

export function IntegrationSettings({ settings, onShowApiKey, onChange }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Wifi className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Integración</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            API Key
          </label>
          <div className="flex gap-2">
            <Input
              type="password"
              value={settings.apiKey}
              onChange={(e) => onChange({ ...settings, apiKey: e.target.value })}
              className="flex-1"
            />
            <Button variant="outline" onClick={onShowApiKey}>
              Mostrar
            </Button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Webhook URL
          </label>
          <Input
            value={settings.webhookUrl}
            onChange={(e) => onChange({ ...settings, webhookUrl: e.target.value })}
          />
        </div>
      </div>
    </Card>
  );
}