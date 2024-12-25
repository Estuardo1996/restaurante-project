import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Minus } from 'lucide-react';

export function IngredientList({ ingredients, onChange }) {
  const addIngredient = () => {
    onChange([...ingredients, { id: crypto.randomUUID(), name: '', quantity: 0, unit: '', cost: 0 }]);
  };

  const removeIngredient = (index) => {
    onChange(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (index, field, value) => {
    onChange(ingredients.map((ing, i) => 
      i === index ? { ...ing, [field]: value } : ing
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-medium text-gray-700">Ingredientes</label>
        <Button type="button" variant="outline" size="sm" onClick={addIngredient}>
          <Plus className="w-4 h-4 mr-1" /> Agregar
        </Button>
      </div>
      <div className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <div key={ingredient.id} className="flex gap-2">
            <Input
              placeholder="Nombre"
              value={ingredient.name}
              onChange={(e) => updateIngredient(index, 'name', e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="Cantidad"
              value={ingredient.quantity}
              onChange={(e) => updateIngredient(index, 'quantity', parseFloat(e.target.value))}
              required
            />
            <Input
              placeholder="Unidad"
              value={ingredient.unit}
              onChange={(e) => updateIngredient(index, 'unit', e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="Costo"
              value={ingredient.cost}
              onChange={(e) => updateIngredient(index, 'cost', parseFloat(e.target.value))}
              required
            />
            {ingredients.length > 1 && (
              <Button 
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeIngredient(index)}
              >
                <Minus className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}