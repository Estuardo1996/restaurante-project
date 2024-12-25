import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Building2, 
  Clock, 
  CreditCard, 
  Printer, 
  Mail,
  Wifi,
  Database,
  Shield
} from 'lucide-react';

export function Settings() {
  const [generalSettings, setGeneralSettings] = useState({
    restaurantName: 'Mi Restaurante',
    address: 'Calle Principal 123',
    phone: '123-456-7890',
    email: 'contacto@mirestaurante.com',
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Configuración</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Información General */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold">Información General</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre del Restaurante
              </label>
              <Input
                value={generalSettings.restaurantName}
                onChange={(e) => setGeneralSettings({ ...generalSettings, restaurantName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dirección
              </label>
              <Input
                value={generalSettings.address}
                onChange={(e) => setGeneralSettings({ ...generalSettings, address: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <Input
                value={generalSettings.phone}
                onChange={(e) => setGeneralSettings({ ...generalSettings, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                value={generalSettings.email}
                onChange={(e) => setGeneralSettings({ ...generalSettings, email: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Horario */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold">Horario de Operación</h2>
          </div>
          <div className="space-y-2">
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day) => (
              <div key={day} className="flex items-center gap-2">
                <span className="w-24 text-sm">{day}</span>
                <Input type="time" className="w-24" defaultValue="09:00" />
                <span className="text-sm">a</span>
                <Input type="time" className="w-24" defaultValue="22:00" />
              </div>
            ))}
          </div>
        </div>

        {/* Impresoras */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <Printer className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold">Impresoras</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Impresora de Cocina
              </label>
              <div className="flex gap-2">
                <Input defaultValue="EPSON TM-T88V" className="flex-1" />
                <Button variant="outline">Probar</Button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Impresora de Facturas
              </label>
              <div className="flex gap-2">
                <Input defaultValue="EPSON TM-T88V" className="flex-1" />
                <Button variant="outline">Probar</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagos */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold">Métodos de Pago</h2>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Efectivo', enabled: true },
              { name: 'Tarjeta de Crédito', enabled: true },
              { name: 'Tarjeta de Débito', enabled: true },
              { name: 'Transferencia', enabled: false },
            ].map((method) => (
              <div key={method.name} className="flex items-center justify-between">
                <span className="text-sm">{method.name}</span>
                <Button variant={method.enabled ? 'default' : 'outline'} size="sm">
                  {method.enabled ? 'Habilitado' : 'Deshabilitado'}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Notificaciones */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold">Notificaciones</h2>
          </div>
          <div className="space-y-2">
            {[
              'Nuevas órdenes',
              'Productos bajos en stock',
              'Reportes diarios',
              'Comentarios de clientes',
            ].map((notification) => (
              <div key={notification} className="flex items-center justify-between">
                <span className="text-sm">{notification}</span>
                <Button variant="outline" size="sm">
                  Configurar
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Integración */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <Wifi className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold">Integración</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                API Key
              </label>
              <div className="flex gap-2">
                <Input type="password" defaultValue="sk_test_123456789" className="flex-1" />
                <Button variant="outline">Mostrar</Button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Webhook URL
              </label>
              <Input defaultValue="https://api.mirestaurante.com/webhook" />
            </div>
          </div>
        </div>

        {/* Respaldo */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <Database className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold">Respaldo y Restauración</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Último respaldo: 2024-02-20 15:30
              </p>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  Crear Respaldo
                </Button>
                <Button variant="outline" className="flex-1">
                  Restaurar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Seguridad */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold">Seguridad</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contraseña de Administrador
              </label>
              <div className="flex gap-2">
                <Input type="password" defaultValue="********" className="flex-1" />
                <Button variant="outline">Cambiar</Button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Autenticación de Dos Factores
              </label>
              <Button variant="outline" className="w-full mt-1">
                Configurar 2FA
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <Button variant="outline">Cancelar Cambios</Button>
        <Button>Guardar Cambios</Button>
      </div>
    </div>
  );
}