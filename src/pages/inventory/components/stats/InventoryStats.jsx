import { Card } from '@/components/ui/card';
import { Package, AlertTriangle, TrendingUp } from 'lucide-react';
import { useInventoryStore } from '@/store/inventory';

export function InventoryStats() {
  const items = useInventoryStore((state) => state.items);
  const lowStockItems = useInventoryStore((state) => state.getLowStockItems());

  const totalValue = items.reduce((sum, item) => 
    sum + (item.currentStock * item.cost), 0
  );

  const stats = [
    {
      label: 'Total Productos',
      value: items.length,
      icon: Package,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'Bajo Stock',
      value: lowStockItems.length,
      icon: AlertTriangle,
      color: 'bg-amber-100 text-amber-600'
    },
    {
      label: 'Valor Total',
      value: `$${totalValue.toFixed(2)}`,
      icon: TrendingUp,
      color: 'bg-green-100 text-green-600'
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