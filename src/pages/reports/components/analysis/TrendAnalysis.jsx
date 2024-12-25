import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function TrendAnalysis({ trends }) {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Análisis de Tendencias</h3>
      <div className="space-y-4">
        {trends.map((trend) => (
          <div key={trend.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {trend.change > 0 ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <span className="text-sm">{trend.label}</span>
            </div>
            <div className={`text-sm font-medium ${
              trend.change > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {trend.change > 0 ? '+' : ''}{trend.change}%
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}