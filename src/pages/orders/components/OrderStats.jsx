import { Card } from '@/components/ui/card';
import { ShoppingBag, DollarSign, Clock } from 'lucide-react';
import { useTableStore } from '@/store/tables';

export function OrderStats() {
  const orders = useTableStore((state) => state.orders);
  const getOrderTotal = useTableStore((state) => state.getOrderTotal);

  const activeOrders = orders.filter(order => order.status === 'active');
  const totalSales = orders.reduce((sum, order) => sum + getOrderTotal(order.id), 0);
  const avgOrderTime = orders.reduce((sum, order) => {
    if (order.endTime) {
      return sum + (new Date(order.endTime) - new Date(order.startTime));
    }
    return sum;
  }, 0) / orders.length;

  const stats = [
    {
      label: 'Órdenes Activas',
      value: activeOrders.length,
      icon: ShoppingBag,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'Ventas Totales',
      value: `$${totalSales.toFixed(2)}`,
      icon: DollarSign,
      color: 'bg-green-100 text-green-600'
    },
    {
      label: 'Tiempo Promedio',
      value: `${Math.round(avgOrderTime / 60000)} min`,
      icon: Clock,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}