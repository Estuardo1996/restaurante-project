import { create } from 'zustand';

const sampleRecipes = [
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
  }
];

export const useRecipeStore = create((set, get) => ({
  recipes: sampleRecipes,
  
  addRecipe: (recipe) => {
    const cost = get().calculateRecipeCost(recipe);
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, cost }],
    }));
  },
  
  updateRecipe: (id, recipe) => {
    const cost = get().calculateRecipeCost(recipe);
    set((state) => ({
      recipes: state.recipes.map((r) => 
        r.id === id ? { ...recipe, cost } : r
      ),
    }));
  },
  
  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }));
  },

  calculateRecipeCost: (recipe) => {
    return recipe.ingredients.reduce(
      (total, ingredient) => total + ingredient.cost * ingredient.quantity,
      0
    );
  },
}));