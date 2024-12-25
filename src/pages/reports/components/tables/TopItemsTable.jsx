import { Card } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export function TopItemsTable({ items }) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold">Productos Más Vendidos</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-2">Producto</th>
              <th className="pb-2">Cantidad</th>
              <th className="pb-2">Ingresos</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.quantity}</td>
                <td className="py-2">${item.revenue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}