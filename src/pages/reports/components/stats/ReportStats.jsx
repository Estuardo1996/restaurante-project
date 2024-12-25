import { Card } from '@/components/ui/card';
import { DollarSign, TrendingUp, Users, ShoppingBag } from 'lucide-react';
import { useTableStore } from '@/store/tables';

export function ReportStats({ period = 'day' }) {
  const orders = useTableStore((state) => state.orders);
  const getOrderTotal = useTableStore((state) => state.getOrderTotal);

  const stats = [
    {
      label: 'Ventas Totales',
      value: `$${orders.reduce((sum, order) => sum + getOrderTotal(order.id), 0).toFixed(2)}`,
      icon: DollarSign,
      color: 'bg-green-100 text-green-600'
    },
    {
      label: 'Ticket Promedio',
      value: `$${(orders.reduce((sum, order) => sum + getOrderTotal(order.id), 0) / orders.length || 0).toFixed(2)}`,
      icon: TrendingUp,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'Clientes Atendidos',
      value: orders.reduce((sum, order) => sum + order.diners.length, 0),
      icon: Users,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      label: 'Total Órdenes',
      value: orders.length,
      icon: ShoppingBag,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
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