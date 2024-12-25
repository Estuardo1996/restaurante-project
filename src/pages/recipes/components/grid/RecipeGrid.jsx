import { RecipeCard } from '@/components/recipes/RecipeCard';

export function RecipeGrid({ recipes, onRecipeSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => onRecipeSelect(recipe)}
        />
      ))}
    </div>
  );
}