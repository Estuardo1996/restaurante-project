import { create } from 'zustand';
import { Recipe } from '@/types/recipe';

const sampleRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Pasta Carbonara',
    description: 'Pasta italiana clásica con salsa cremosa de huevo y panceta',
    ingredients: [
      { id: '1', name: 'Spaghetti', quantity: 500, unit: 'g', cost: 2.5 },
      { id: '2', name: 'Huevos', quantity: 4, unit: 'unidades', cost: 1.0 },
      { id: '3', name: 'Panceta', quantity: 200, unit: 'g', cost: 4.0 },
      { id: '4', name: 'Queso Parmesano', quantity: 100, unit: 'g', cost: 3.0 }
    ],
    instructions: [
      'Cocinar la pasta en agua con sal',
      'Dorar la panceta',
      'Mezclar huevos con queso rallado',
      'Combinar todo mientras la pasta está caliente'
    ],
    servings: 4,
    category: 'Pasta',
    preparationTime: 25,
    cost: 10.5,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Ensalada César',
    description: 'Ensalada clásica con pollo, crutones y aderezo César',
    ingredients: [
      { id: '5', name: 'Lechuga Romana', quantity: 1, unit: 'unidad', cost: 2.0 },
      { id: '6', name: 'Pechuga de Pollo', quantity: 400, unit: 'g', cost: 5.0 },
      { id: '7', name: 'Crutones', quantity: 100, unit: 'g', cost: 1.5 },
      { id: '8', name: 'Aderezo César', quantity: 100, unit: 'ml', cost: 2.0 }
    ],
    instructions: [
      'Cocinar el pollo y cortarlo en tiras',
      'Lavar y cortar la lechuga',
      'Mezclar todos los ingredientes',
      'Agregar el aderezo y servir'
    ],
    servings: 2,
    category: 'Ensaladas',
    preparationTime: 20,
    cost: 10.5,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800'
  }
];

interface RecipeState {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  updateRecipe: (id: string, recipe: Recipe) => void;
  deleteRecipe: (id: string) => void;
  calculateRecipeCost: (recipe: Recipe) => number;
}

export const useRecipeStore = create<RecipeState>((set, get) => ({
  recipes: sampleRecipes,
  
  addRecipe: (recipe: Recipe) => {
    const cost = get().calculateRecipeCost(recipe);
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, cost }],
    }));
  },
  
  updateRecipe: (id: string, recipe: Recipe) => {
    const cost = get().calculateRecipeCost(recipe);
    set((state) => ({
      recipes: state.recipes.map((r) => 
        r.id === id ? { ...recipe, cost } : r
      ),
    }));
  },
  
  deleteRecipe: (id: string) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }));
  },

  calculateRecipeCost: (recipe: Recipe) => {
    return recipe.ingredients.reduce(
      (total, ingredient) => total + ingredient.cost * ingredient.quantity,
      0
    );
  },
}));