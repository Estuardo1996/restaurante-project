import { useState } from 'react';
import { useTableStore } from '@/store/tables';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react'; // Si estás usando un ícono de X, asegúrate de importar correctamente.

export function NewOrderDialog({ tableId, onClose }) {
  const [diners, setDiners] = useState([{ name: '' }]);
  const createOrder = useTableStore((state) => state.createOrder);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validDiners = diners.filter((diner) => diner.name.trim() !== '');
    if (validDiners.length > 0) {
      createOrder(tableId, validDiners);
      onClose();
    }
  };

  const addDiner = () => {
    setDiners([...diners, { name: '' }]);
  };

  const removeDiner = (index) => {
    setDiners(diners.filter((_, i) => i !== index));
  };

  const updateDinerName = (index, name) => {
    const newDiners = [...diners];
    newDiners[index].name = name;
    setDiners(newDiners);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Nueva Orden</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            {diners.map((diner, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  placeholder={`Comensal ${index + 1}`}
                  value={diner.name}
                  onChange={(e) => updateDinerName(index, e.target.value)}
                />
                {diners.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDiner(index)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={addDiner}
            className="w-full"
          >
            Agregar Comensal
          </Button>

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              Crear Orden
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
