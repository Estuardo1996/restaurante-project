import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { TableActions } from '../TableActions';
import { TableOrders } from '../orders/TableOrders';

export function TableSidebar({ table, showDetails, onBack }) {
  return (
    <div className={`
      fixed top-0 right-0 h-full w-full lg:w-96 bg-white shadow-xl
      transform transition-transform duration-300 z-20
      ${showDetails ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <div className="sticky top-0 bg-white border-b z-10">
        <div className="flex items-center h-16 px-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="lg:hidden mr-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Regresar a mesas
          </Button>
          <h2 className="font-semibold">
            {table ? `Mesa ${table.number}` : 'Detalles'}
          </h2>
        </div>
      </div>

      <div className="overflow-y-auto h-[calc(100%-4rem)] p-4">
        {table && (
          <>
            <TableActions table={table} />
            <TableOrders tableId={table.id} />
          </>
        )}
      </div>
    </div>
  );
}