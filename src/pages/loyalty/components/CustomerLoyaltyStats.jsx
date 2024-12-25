import { Card } from '@/components/ui/card';
import { Users, TrendingUp, CreditCard, Calendar } from 'lucide-react';

export function CustomerLoyaltyStats({ customers }) {
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.visits > 0).length;
  const averagePoints = customers.reduce((acc, c) => acc + c.loyaltyPoints, 0) / totalCustomers || 0;
  const totalSpent = customers.reduce((acc, c) => acc + c.totalSpent, 0);

  const stats = [
    {
      label: 'Clientes Totales',
      value: totalCustomers,
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'Clientes Activos',
      value: activeCustomers,
      icon: TrendingUp,
      color: 'bg-green-100 text-green-600'
    },
    {
      label: 'Puntos Promedio',
      value: Math.round(averagePoints),
      icon: CreditCard,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      label: 'Total Gastado',
      value: `$${totalSpent.toFixed(2)}`,
      icon: Calendar,
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
