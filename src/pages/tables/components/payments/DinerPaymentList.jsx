import { Order } from '@/types/table';
import { useTableStore } from '@/store/tables';


export function DinerPaymentList({ 
  order, 
  selectedDinerId, 
  onSelectDiner 
}) {
  const getDinerTotal = useTableStore((state) => state.getDinerTotal);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Seleccionar Comensal
      </label>
      {order.diners.map((diner) => {
        const total = getDinerTotal(order.id, diner.id);
        const paid = order.payments
          .filter((p) => p.dinerId === diner.id)
          .reduce((sum, p) => sum + p.amount, 0);
        const remaining = total - paid;

        return (
          <button
            key={diner.id}
            type="button"
            onClick={() => onSelectDiner(diner.id)}
            className={`w-full p-3 rounded-lg border text-left ${
              selectedDinerId === diner.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{diner.name}</span>
              <span className="text-sm">
                ${remaining.toFixed(2)} / ${total.toFixed(2)}
              </span>
            </div>
            {paid > 0 && (
              <div className="text-xs text-gray-500 mt-1">
                Pagado: ${paid.toFixed(2)}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}