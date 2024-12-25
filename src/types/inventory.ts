export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  minStock: number;
  currentStock: number;
  cost: number;
  category: string;
  lastUpdated: Date;
}

export interface StockMovement {
  id: string;
  itemId: string;
  quantity: number;
  type: 'IN' | 'OUT';
  reason: string;
  date: Date;
  recipeId?: string;
}