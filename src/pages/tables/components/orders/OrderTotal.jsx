import { DollarSign } from 'lucide-react';
import { useTableStore } from '@/store/tables';

export function OrderTotal({ order }) {
  const getOrderTotal = useTableStore((state) => state.getOrderTotal);
  const getRemainingBalance = useTableStore((state) => state.getRemainingBalance);

  const total = getOrderTotal(order.id);
  const remaining = getRemainingBalance(order.id);

  return (
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
  );
}