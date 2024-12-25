import { Order } from '@/types/table';
import { useTableStore } from '@/store/tables';
import { X, Clock, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OrderDetailsProps {
  order: Order;
  onClose: () => void;
}

export function OrderDetails({ order, onClose }: OrderDetailsProps) {
  const getOrderTotal = useTableStore((state) => state.getOrderTotal);
  const getDinerTotal = useTableStore((state) => state.getDinerTotal);

  const total = getOrderTotal(order.id);
  const totalPaid = order.payments.reduce((sum, payment) => sum + payment.amount, 0);
  const remaining = total - totalPaid;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Detalles de la Orden</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Order Info */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm">
                {new Date(order.startTime).toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{order.diners.length} comensales</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-gray-500" />
              <span className="text-sm">Total: ${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Order Items */}
          <div>
            <h4 className="font-medium mb-2">Artículos</h4>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{item.recipeId}</span>
                    {item.notes && (
                      <p className="text-sm text-gray-500">{item.notes}</p>
                    )}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">x{item.quantity}</span>
                    <span className="text-gray-500 ml-2">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Diners */}
          <div>
            <h4 className="font-medium mb-2">Comensales</h4>
            <div className="space-y-2">
              {order.diners.map((diner) => {
                const dinerTotal = getDinerTotal(order.id, diner.id);
                const dinerPaid = order.payments
                  .filter(p => p.dinerId === diner.id)
                  .reduce((sum, p) => sum + p.amount, 0);

                return (
                  <div 
                    key={diner.id}
                    className="bg-gray-50 rounded-lg p-4 flex justify-between items-center"
                  >
                    <span className="font-medium">{diner.name}</span>
                    <div className="text-sm">
                      <span className="text-gray-500">
                        Pagado: ${dinerPaid.toFixed(2)} / ${dinerTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Payments */}
          <div>
            <h4 className="font-medium mb-2">Pagos</h4>
            <div className="space-y-2">
              {order.payments.map((payment) => {
                const diner = order.diners.find(d => d.id === payment.dinerId);
                return (
                  <div 
                    key={payment.id}
                    className="bg-gray-50 rounded-lg p-4 flex justify-between items-center"
                  >
                    <div>
                      <span className="font-medium">{diner?.name}</span>
                      <p className="text-sm text-gray-500">
                        {payment.method} - {payment.status}
                      </p>
                    </div>
                    <span className="font-medium">
                      ${payment.amount.toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-lg font-medium">
              <span>Total Pagado:</span>
              <span>${totalPaid.toFixed(2)}</span>
            </div>
            {remaining > 0 && (
              <div className="flex justify-between items-center text-red-600 mt-2">
                <span>Pendiente:</span>
                <span>${remaining.toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <Button onClick={onClose} className="w-full">
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}