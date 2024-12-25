import { Card } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export function SalesChart() {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold">Ventas por Período</h3>
      </div>
      <div className="h-64 flex items-center justify-center text-gray-500">
        Gráfico de ventas (implementar con librería de gráficos)
      </div>
    </Card>
  );
}