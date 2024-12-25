import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

export function SecuritySettings({ onChangePassword, onSetup2FA }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Seguridad</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contraseña de Administrador
          </label>
          <div className="flex gap-2">
            <Input
              type="password"
              value="********"
              className="flex-1"
              readOnly
            />
            <Button variant="outline" onClick={onChangePassword}>
              Cambiar
            </Button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Autenticación de Dos Factores
          </label>
          <Button variant="outline" className="w-full mt-1" onClick={onSetup2FA}>
            Configurar 2FA
          </Button>
        </div>
      </div>
    </Card>
  );
}