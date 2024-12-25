import { useState } from 'react';
import { MenuItem } from '@/types/menu';
import { useTableStore } from '@/store/tables';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MenuSelector } from './MenuSelector';
import { X, Minus, Plus } from 'lucide-react';

interface NewOrderItemProps {
  orderId: string;
  onClose: () => void;
}

export function NewOrderItem({ orderId, onClose }: NewOrderItemProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  
  const addOrderItem = useTableStore((state) => state.addOrderItem);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedItem) {
      addOrderItem(orderId, {
        menuItemId: selectedItem.id,
        quantity,
        notes: notes || undefined,
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-lg font-semibold">
            {selectedItem ? 'Detalles del Item' : 'Agregar Item'}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {selectedItem ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="flex items-start gap-4">
              {selectedItem.image && (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              )}
              <div className="flex-1">
                <h4 className="text-lg font-medium">{selectedItem.name}</h4>
                {selectedItem.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedItem.description}
                  </p>
                )}
                <p className="text-lg font-medium text-blue-600 mt-2">
                  ${selectedItem.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cantidad
                </label>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => quantity > 1 && setQuantity(q => q - 1)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-20 text-center"
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(q => q + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notas especiales
                </label>
                <Input
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej: Sin cebolla, extra picante..."
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setSelectedItem(null)}
              >
                Cambiar Item
              </Button>
              <Button type="submit" className="flex-1">
                Agregar a la Orden (${(selectedItem.price * quantity).toFixed(2)})
              </Button>
            </div>
          </form>
        ) : (
          <MenuSelector onSelect={setSelectedItem} />
        )}
      </div>
    </div>
  );
}