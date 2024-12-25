import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Building2 } from 'lucide-react';

export function GeneralSettings({ settings, onChange }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Building2 className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Información General</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre del Restaurante
          </label>
          <Input
            value={settings.restaurantName}
            onChange={(e) => onChange({ ...settings, restaurantName: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Dirección
          </label>
          <Input
            value={settings.address}
            onChange={(e) => onChange({ ...settings, address: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <Input
            value={settings.phone}
            onChange={(e) => onChange({ ...settings, phone: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            value={settings.email}
            onChange={(e) => onChange({ ...settings, email: e.target.value })}
          />
        </div>
      </div>
    </Card>
  );
}