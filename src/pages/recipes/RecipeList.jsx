import { useState } from 'react';
import { useRecipeStore } from '@/store/recipes';
import { RecipeCard } from '@/components/recipes/RecipeCard';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { RecipeDialog } from './components/RecipeDialog';

export function RecipeList() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const recipes = useRecipeStore((state) => state.recipes);
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const categories = ['all', ...new Set(recipes.map(recipe => recipe.category))];
  const filteredRecipes = selectedCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  const handleSave = (recipeData) => {
    if (selectedRecipe) {
      updateRecipe(selectedRecipe.id, { ...recipeData, id: selectedRecipe.id, cost: 0 });
    } else {
      addRecipe({ ...recipeData, id: crypto.randomUUID(), cost: 0 });
    }
    setShowDialog(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Recetas</h1>
        <Button onClick={() => setShowDialog(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Nueva Receta
        </Button>
      </div>

      <div className="flex gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={() => {
              setSelectedRecipe(recipe);
              setShowDialog(true);
            }}
          />
        ))}
      </div>

      {showDialog && (
        <RecipeDialog
          recipe={selectedRecipe}
          onClose={() => {
            setShowDialog(false);
            setSelectedRecipe(null);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
