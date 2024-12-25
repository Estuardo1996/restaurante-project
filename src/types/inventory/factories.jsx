// Single responsibility: Factory functions for inventory objects
import { InventoryItem, StockMovement } from './types';
import { MovementType } from './constants';

export const createInventoryItem = (data = {}) => 
  InventoryItem.create({
    ...data,
    currentStock: data.currentStock || data.quantity
  });

export const createStockMovement = (data = {}) =>
  StockMovement.create({
    ...data,
    type: data.type || MovementType.IN
  });