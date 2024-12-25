import { OrderItem } from './OrderItem';

export function OrderItemList({ items, onStatusChange }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <OrderItem 
          key={item.id} 
          item={item}
          onStatusChange={(status) => onStatusChange(item.id, status)}
        />
      ))}
    </div>
  );
}