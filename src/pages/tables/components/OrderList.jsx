import { Order } from '@/types/table';
import { OrderItem } from './OrderItem';



export function OrderList({ orders }) {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}