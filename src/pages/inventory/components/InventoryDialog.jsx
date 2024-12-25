import { InventoryForm } from './InventoryForm';

export function InventoryDialog({ item, onSave, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">
          {item ? 'Editar Producto' : 'Nuevo Producto'}
        </h2>
        <InventoryForm
          initialValues={item || {}}
          onSubmit={(data) => {
            onSave(data);
            onClose();
          }}
        />
        <button
          className="mt-4 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
