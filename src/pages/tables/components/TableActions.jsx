import { Users, Utensils, Ban, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTableStore } from '@/store/tables';

export function TableActions({ table }) {
  const updateTableStatus = useTableStore((state) => state.updateTableStatus);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Mesa {table.number}</h2>
      
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          onClick={() => updateTableStatus(table.id, 'available')}
          className="flex items-center gap-2"
        >
          <Users className="w-4 h-4" />
          Disponible
        </Button>
        
        <Button
          variant="outline"
          onClick={() => updateTableStatus(table.id, 'occupied')}
          className="flex items-center gap-2"
        >
          <Utensils className="w-4 h-4" />
          Ocupada
        </Button>
        
        <Button
          variant="outline"
          onClick={() => updateTableStatus(table.id, 'reserved')}
          className="flex items-center gap-2"
        >
          <Ban className="w-4 h-4" />
          Reservada
        </Button>
        
        <Button
          variant="outline"
          onClick={() => updateTableStatus(table.id, 'cleaning')}
          className="flex items-center gap-2"
        >
          <Trash className="w-4 h-4" />
          Limpieza
        </Button>
      </div>
    </div>
  );
}
