export interface MenuItem {
  id: string;
  name: string;
  type: 'recipe' | 'product';
  price: number;
  description?: string;
  image?: string;
  // Para productos de inventario
  inventoryItemId?: string;
  // Para recetas
  recipeId?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}