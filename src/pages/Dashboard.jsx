import { Card } from '@/components/ui/card';
import { ChefHat, Store, TableProperties } from 'lucide-react';

const stats = [
  { label: 'Recetas Activas', value: '24', icon: ChefHat, color: 'bg-blue-500' },
  { label: 'Productos en Stock', value: '156', icon: Store, color: 'bg-green-500' },
  { label: 'Mesas Ocupadas', value: '8/12', icon: TableProperties, color: 'bg-purple-500' },
];

const recentActivity = [
  { id: 1, action: 'Nueva orden', table: 'Mesa 4', time: '5 min ago' },
  { id: 2, action: 'Pago recibido', table: 'Mesa 2', time: '15 min ago' },
  { id: 3, action: 'Orden completada', table: 'Mesa 1', time: '30 min ago' },
];

export function Dashboard() {
  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Actividad Reciente</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.table}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Resumen del Día</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Ventas Totales</span>
              <span className="font-medium">$1,234.56</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Órdenes Completadas</span>
              <span className="font-medium">18</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Clientes Atendidos</span>
              <span className="font-medium">45</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}