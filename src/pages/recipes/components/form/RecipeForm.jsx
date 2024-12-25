import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Save } from 'lucide-react';
import { IngredientList } from './IngredientList';
import { InstructionList } from './InstructionList';

export function RecipeForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    servings: initialData?.servings || 1,
    category: initialData?.category || '',
    preparationTime: initialData?.preparationTime || 30,
    image: initialData?.image || '',
    ingredients: initialData?.ingredients || [{ id: '1', name: '', quantity: 0, unit: '', cost: 0 }],
    instructions: initialData?.instructions || ['']
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Categoría</label>
          <Input
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Descripción</label>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          required
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Porciones</label>
          <Input
            type="number"
            min="1"
            value={formData.servings}
            onChange={(e) => setFormData(prev => ({ ...prev, servings: parseInt(e.target.value) }))}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tiempo (min)</label>
          <Input
            type="number"
            min="1"
            value={formData.preparationTime}
            onChange={(e) => setFormData(prev => ({ ...prev, preparationTime: parseInt(e.target.value) }))}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Imagen URL</label>
          <Input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
          />
        </div>
      </div>

      <IngredientList
        ingredients={formData.ingredients}
        onChange={(ingredients) => setFormData(prev => ({ ...prev, ingredients }))}
      />

      <InstructionList
        instructions={formData.instructions}
        onChange={(instructions) => setFormData(prev => ({ ...prev, instructions }))}
      />

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit">
          <Save className="w-4 h-4 mr-2" />
          Guardar Receta
        </Button>
      </div>
    </form>
  );
}