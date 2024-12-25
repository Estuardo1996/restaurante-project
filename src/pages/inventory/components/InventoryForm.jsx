import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Save } from 'lucide-react';

export function InventoryForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    quantity: initialData?.quantity || 0,
    unit: initialData?.unit || '',
    minStock: initialData?.minStock || 0,
    currentStock: initialData?.currentStock || 0,
    cost: initialData?.cost || 0,
    category: initialData?.category || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full h-full">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <Input
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Categoría</label>
          <Input
            value={formData.category}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, category: e.target.value }))
            }
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Cantidad Inicial</label>
          <Input
            type="number"
            min="0"
            value={formData.quantity}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                quantity: parseFloat(e.target.value),
              }))
            }
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Unidad</label>
          <Input
            value={formData.unit}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, unit: e.target.value }))
            }
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Stock Mínimo</label>
          <Input
            type="number"
            min="0"
            value={formData.minStock}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                minStock: parseFloat(e.target.value),
              }))
            }
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Costo por Unidad</label>
        <Input
          type="number"
          min="0"
          step="0.01"
          value={formData.cost}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              cost: parseFloat(e.target.value),
            }))
          }
          required
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit">
          <Save className="w-4 h-4 mr-2" />
          Guardar Producto
        </Button>
      </div>
    </form>
  );
}
