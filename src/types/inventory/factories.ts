// Single responsibility: Factory functions for creating inventory objects
import { InventoryItem, StockMovement } from './types';
import { MovementType } from './constants';

export const createInventoryItem = (data: Partial<InventoryItem>): InventoryItem => ({
  id: crypto.randomUUID(),
  name: '',
  quantity: 0,
  unit: '',
  minStock: 0,
  currentStock: data.quantity || 0,
  cost: 0,
  category: '',
  lastUpdated: new Date(),
  ...data
});

export const createStockMovement = (data: Partial<StockMovement>): StockMovement => ({
  id: crypto.randomUUID(),
  itemId: '',
  quantity: 0,
  type: MovementType.IN,
  reason: '',
  date: new Date(),
  ...data
});