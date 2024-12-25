import { InventoryItem } from '@/types/inventory';
import { X } from 'lucide-react';

export function LowStockAlert({ items, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Productos Bajos en Stock
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-red-50 rounded-lg"
            >
              <div>
                <h3 className="font-medium text-red-800">{item.name}</h3>
                <p className="text-sm text-red-600">
                  Stock actual: {item.currentStock} {item.unit} (Mínimo: {item.minStock})
                </p>
              </div>
              <button
                className="px-4 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200"
                onClick={() => {
                  // Aquí se implementará la lógica para crear una orden de compra
                  console.log(`Crear orden de compra para: ${item.name}`);
                }}
              >
                Ordenar más
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
