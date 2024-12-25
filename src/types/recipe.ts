export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  cost: number;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  servings: number;
  category: string;
  preparationTime: number;
  cost: number;
  image?: string;
}