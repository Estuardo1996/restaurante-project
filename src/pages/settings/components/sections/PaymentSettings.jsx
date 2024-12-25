import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard } from 'lucide-react';

export function PaymentSettings({ methods, onToggle }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Métodos de Pago</h2>
      </div>
      <div className="space-y-2">
        {methods.map((method) => (
          <div key={method.name} className="flex items-center justify-between">
            <span className="text-sm">{method.name}</span>
            <Button
              variant={method.enabled ? 'default' : 'outline'}
              size="sm"
              onClick={() => onToggle(method.name)}
            >
              {method.enabled ? 'Habilitado' : 'Deshabilitado'}
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}