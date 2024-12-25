import { NavLink } from 'react-router-dom';
import { 
  ChefHat, 
  Store, 
  TableProperties, 
  Home, 
  Settings,
  Users,
  Truck,
  Gift,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Dashboard', icon: Home, href: '/dashboard' },
  { name: 'Recetas', icon: ChefHat, href: '/recipes' },
  { name: 'Inventario', icon: Store, href: '/inventory' },
  { name: 'Mesas', icon: TableProperties, href: '/tables' },
  { name: 'Clientes', icon: Users, href: '/customers' },
  { name: 'Proveedores', icon: Truck, href: '/suppliers' },
  { name: 'Fidelización', icon: Gift, href: '/loyalty' },
  { name: 'Configuración', icon: Settings, href: '/settings' },
];

export function Sidebar({ collapsed, onToggle, onMobileClose }) {
  return (
    <div className="flex flex-col h-full bg-gray-900">
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
        <div className="flex items-center">
          <ChefHat className="w-8 h-8 text-white" />
          {!collapsed && (
            <span className="ml-3 text-xl font-bold text-white truncate">
              Restaurant
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="hidden lg:flex text-white hover:bg-gray-800"
          onClick={onToggle}
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </Button>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            onClick={onMobileClose}
            className={({ isActive }) => `
              flex items-center px-4 py-3 text-sm text-gray-300
              transition-colors hover:bg-gray-800
              ${isActive ? 'bg-gray-800 border-l-4 border-blue-500' : ''}
              ${collapsed ? 'justify-center' : 'justify-start'}
            `}
          >
            <item.icon className={`w-5 h-5 ${collapsed ? '' : 'mr-3'}`} />
            {!collapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}