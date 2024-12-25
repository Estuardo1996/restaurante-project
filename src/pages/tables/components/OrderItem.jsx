import { useState } from 'react';
import { useTableStore } from '@/store/tables';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign } from 'lucide-react';
import { PaymentDialog } from './payments/PaymentDialog';

export function OrderItem({ order }) {
  const [showPayment, setShowPayment] = useState(false);
  const getOrderTotal = useTableStore((state) => state.getOrderTotal);
  const getRemainingBalance = useTableStore((state) => state.getRemainingBalance);

  const total = getOrderTotal(order.id);
  const remaining = getRemainingBalance(order.id);

  return (
    <>
      <div className="border rounded-lg p-4 bg-white">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h4 className="font-medium">Orden #{order.id.slice(0, 8)}</h4>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Clock className="w-4 h-4 mr-1" />
              {new Date(order.startTime).toLocaleTimeString()}
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-sm font-medium">
              <DollarSign className="w-4 h-4" />
              {total.toFixed(2)}
            </div>
            {remaining > 0 && (
              <div className="text-xs text-red-600 mt-1">
                Pendiente: ${remaining.toFixed(2)}
              </div>
            )}
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-3">
          {order.diners.length} comensales
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            Ver detalles
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => setShowPayment(true)}
          >
            Pagar
          </Button>
        </div>
      </div>

      {showPayment && (
        <PaymentDialog
          order={order}
          onClose={() => setShowPayment(false)}
        />
      )}
    </>
  );
}
