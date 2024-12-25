import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

export function TableHeader({ onConfigClick }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Disposición de Mesas</h1>
      <Button 
        variant="outline"
        onClick={onConfigClick}
      >
        <Settings className="w-4 h-4 mr-2" />
        Configurar Mesas
      </Button>
    </div>
  );
}