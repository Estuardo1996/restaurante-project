import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export function PrinterSettings({ printers, onTest, onChange }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Printer className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Impresoras</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Impresora de Cocina
          </label>
          <div className="flex gap-2">
            <Input
              value={printers.kitchen}
              onChange={(e) => onChange({ ...printers, kitchen: e.target.value })}
              className="flex-1"
            />
            <Button variant="outline" onClick={() => onTest('kitchen')}>
              Probar
            </Button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Impresora de Facturas
          </label>
          <div className="flex gap-2">
            <Input
              value={printers.receipts}
              onChange={(e) => onChange({ ...printers, receipts: e.target.value })}
              className="flex-1"
            />
            <Button variant="outline" onClick={() => onTest('receipts')}>
              Probar
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}