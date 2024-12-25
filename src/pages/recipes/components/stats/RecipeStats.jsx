import { Card } from '@/components/ui/card';
import { ChefHat, Clock, Users } from 'lucide-react';
import { useRecipeStore } from '@/store/recipes';

export function RecipeStats() {
  const recipes = useRecipeStore((state) => state.recipes);

  const avgPrepTime = recipes.reduce((sum, recipe) => 
    sum + recipe.preparationTime, 0) / recipes.length;

  const avgServings = recipes.reduce((sum, recipe) => 
    sum + recipe.servings, 0) / recipes.length;

  const stats = [
    {
      label: 'Total Recetas',
      value: recipes.length,
      icon: ChefHat,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'Tiempo Promedio',
      value: `${Math.round(avgPrepTime)} min`,
      icon: Clock,
      color: 'bg-green-100 text-green-600'
    },
    {
      label: 'Porciones Promedio',
      value: Math.round(avgServings),
      icon: Users,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}