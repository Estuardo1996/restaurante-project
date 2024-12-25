import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, AlertCircle } from 'lucide-react';

export function OrderItem({ item, onStatusChange }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    preparing: 'bg-blue-100 text-blue-800',
    ready: 'bg-green-100 text-green-800',
    delivered: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">{item.menuItemId}</h4>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Clock className="w-4 h-4 mr-1" />
            x{item.quantity}
          </div>
        </div>
        <div className={`px-2 py-1 rounded-full text-sm ${statusColors[item.status]}`}>
          {item.status}
        </div>
      </div>

      {item.notes && (
        <div className="mt-2 flex items-start gap-2 text-sm text-gray-600">
          <AlertCircle className="w-4 h-4 mt-0.5" />
          <span>{item.notes}</span>
        </div>
      )}

      {isExpanded && (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {['pending', 'preparing', 'ready', 'delivered'].map((status) => (
            <Button
              key={status}
              size="sm"
              variant={item.status === status ? 'default' : 'outline'}
              onClick={() => onStatusChange(status)}
              className="capitalize"
            >
              {status}
            </Button>
          ))}
        </div>
      )}

      <Button
        variant="ghost"
        size="sm"
        className="w-full mt-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Ocultar' : 'Cambiar Estado'}
      </Button>
    </div>
  );
}