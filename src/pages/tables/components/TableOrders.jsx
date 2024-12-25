import { useState } from 'react';
import { useTableStore } from '@/store/tables';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { OrderList } from './OrderList';
import { NewOrderDialog } from './NewOrderDialog';

export function TableOrders({ tableId }) {
  const [showNewOrder, setShowNewOrder] = useState(false);
  const orders = useTableStore((state) => 
    state.orders.filter((order) => order.tableId === tableId && order.status === 'active')
  );

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Órdenes Activas</h3>
        <Button
          size="sm"
          onClick={() => setShowNewOrder(true)}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Nueva Orden
        </Button>
      </div>

      {orders.length > 0 ? (
        <OrderList orders={orders} />
      ) : (
        <p className="text-center text-gray-500 py-4">
          No hay órdenes activas
        </p>
      )}

      {showNewOrder && (
        <NewOrderDialog
          tableId={tableId}
          onClose={() => setShowNewOrder(false)}
        />
      )}
    </div>
  );
}
