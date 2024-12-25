import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export function ReportFilters({ period, onPeriodChange }) {
  const periods = [
    { id: 'day', label: 'Hoy' },
    { id: 'week', label: 'Esta Semana' },
    { id: 'month', label: 'Este Mes' },
    { id: 'year', label: 'Este Año' }
  ];

  return (
    <div className="flex gap-2 mb-6">
      {periods.map(({ id, label }) => (
        <Button
          key={id}
          variant={period === id ? 'default' : 'outline'}
          onClick={() => onPeriodChange(id)}
          className="flex items-center gap-1"
        >
          <Calendar className="w-4 h-4" />
          {label}
        </Button>
      ))}
    </div>
  );
}