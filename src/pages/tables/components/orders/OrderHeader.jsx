import { Clock } from 'lucide-react';

export function OrderHeader({ order }) {
  return (
    <div className="flex justify-between items-start mb-3">
      <div>
        <h4 className="font-medium">Orden #{order.id.slice(0, 8)}</h4>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Clock className="w-4 h-4 mr-1" />
          {new Date(order.startTime).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}