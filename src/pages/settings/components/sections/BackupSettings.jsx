import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database } from 'lucide-react';

export function BackupSettings({ lastBackup, onBackup, onRestore }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Database className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Respaldo y Restauración</h2>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">
            Último respaldo: {lastBackup.toLocaleString()}
          </p>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={onBackup}>
              Crear Respaldo
            </Button>
            <Button variant="outline" className="flex-1" onClick={onRestore}>
              Restaurar
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}