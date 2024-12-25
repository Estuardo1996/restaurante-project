import { useTableStore } from '@/store/tables';

export function PaymentSummary({ order }) {
  const getOrderTotal = useTableStore((state) => state.getOrderTotal);
  const getRemainingBalance = useTableStore((state) => state.getRemainingBalance);

  const total = getOrderTotal(order.id);
  const remaining = getRemainingBalance(order.id);
  const paid = total - remaining;

  return (
    <div className="space-y-2 border-t pt-4 mt-4">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Total de la orden:</span>
        <span className="font-medium">${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Pagado:</span>
        <span className="font-medium text-green-600">${paid.toFixed(2)}</span>
      </div>
      {remaining > 0 && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Pendiente:</span>
          <span className="font-medium text-red-600">${remaining.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}