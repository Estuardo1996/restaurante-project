import { Clock, Users } from 'lucide-react';

export function RecipeInfo({ recipe }) {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">{recipe.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{recipe.description}</p>
      
      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{recipe.preparationTime} min</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Users className="w-4 h-4" />
          <span>{recipe.servings} porciones</span>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-900">
          Costo: ${recipe.cost.toFixed(2)}
        </span>
        <span className="text-sm text-gray-600">
          {recipe.category}
        </span>
      </div>
    </div>
  );
}