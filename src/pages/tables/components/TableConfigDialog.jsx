import { useState } from 'react';
import { useTableStore } from '@/store/tables';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Plus } from 'lucide-react';

export function TableConfigDialog({ onClose }) {
  const addTable = useTableStore((state) => state.addTable);
  const [formData, setFormData] = useState({
    number: '',
    capacity: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTable({
      number: parseInt(formData.number),
      capacity: parseInt(formData.capacity),
      status: 'available',
      position: { x: 0, y: 0 }
    });
    setFormData({ number: '', capacity: '' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Configuración de Mesas</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Número de Mesa
            </label>
            <Input
              type="number"
              min="1"
              value={formData.number}
              onChange={(e) => setFormData(prev => ({ ...prev, number: e.target.value }))}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Capacidad
            </label>
            <Input
              type="number"
              min="1"
              value={formData.capacity}
              onChange={(e) => setFormData(prev => ({ ...prev, capacity: e.target.value }))}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Agregar Mesa
          </Button>
        </form>

        <div className="mt-6">
          <Button onClick={onClose} variant="outline" className="w-full">
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}
