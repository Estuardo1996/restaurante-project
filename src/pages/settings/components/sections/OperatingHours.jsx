import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Clock } from 'lucide-react';

export function OperatingHours({ hours, onChange }) {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Horario de Operación</h2>
      </div>
      <div className="space-y-2">
        {days.map((day) => (
          <div key={day} className="flex items-center gap-2">
            <span className="w-24 text-sm">{day}</span>
            <Input
              type="time"
              className="w-24"
              value={hours[day]?.open || '09:00'}
              onChange={(e) => onChange({
                ...hours,
                [day]: { ...hours[day], open: e.target.value }
              })}
            />
            <span className="text-sm">a</span>
            <Input
              type="time"
              className="w-24"
              value={hours[day]?.close || '22:00'}
              onChange={(e) => onChange({
                ...hours,
                [day]: { ...hours[day], close: e.target.value }
              })}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}