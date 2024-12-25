import { Card } from '@/components/ui/card';
import { Users, Star, ShoppingBag } from 'lucide-react';
import { useSupplierStore } from '@/store/suppliers';

export function SupplierStats() {
  const suppliers = useSupplierStore((state) => state.suppliers);
  const purchaseOrders = useSupplierStore((state) => state.purchaseOrders);

  const activeOrders = purchaseOrders.filter(
    order => order.status === 'pending' || order.status === 'approved'
  );

  const averageRating = suppliers.reduce(
    (sum, supplier) => sum + supplier.rating, 0
  ) / suppliers.length;

  const stats = [
    {
      label: 'Total Proveedores',
      value: suppliers.length,
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'Calificación Promedio',
      value: averageRating.toFixed(1),
      icon: Star,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      label: 'Órdenes Activas',
      value: activeOrders.length,
      icon: ShoppingBag,
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