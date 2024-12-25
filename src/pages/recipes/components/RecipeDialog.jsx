import { X } from 'lucide-react';
import { RecipeForm } from './form';

export function RecipeDialog({ recipe, onClose, onSave }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {recipe ? 'Editar Receta' : 'Nueva Receta'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <RecipeForm
          initialData={recipe}
          onSubmit={onSave}
          onCancel={onClose}
        />
      </div>
    </div>
  );
}