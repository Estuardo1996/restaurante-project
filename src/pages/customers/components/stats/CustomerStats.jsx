import { Card } from '@/components/ui/card';
import { Users, Star, TrendingUp, Calendar } from 'lucide-react';
import { useCustomerStore } from '@/store/customers';

export function CustomerStats() {
  const customers = useCustomerStore((state) => state.customers);

  const activeCustomers = customers.filter(c => 
    new Date(c.lastVisit).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000
  ).length;

  const totalSpent = customers.reduce((sum, c) => sum + c.totalSpent, 0);
  const avgVisits = customers.reduce((sum, c) => sum + c.visits, 0) / customers.length;

  const stats = [
    {
      label: 'Total Clientes',
      value: customers.length,
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'Clientes Activos',
      value: activeCustomers,
      icon: Star,
      color: 'bg-green-100 text-green-600'
    },
    {
      label: 'Ventas Totales',
      value: `$${totalSpent.toFixed(2)}`,
      icon: TrendingUp,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      label: 'Visitas Promedio',
      value: Math.round(avgVisits),
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