import { Card } from '@/components/ui/card';
import { RecipeInfo } from './RecipeInfo';
import { RecipeImage } from './RecipeImage';

export function RecipeCard({ recipe, onClick }) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <RecipeImage image={recipe.image} name={recipe.name} />
      <RecipeInfo recipe={recipe} />
    </Card>
  );
}