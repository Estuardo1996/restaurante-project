// Single responsibility: Central export point
export type { InventoryItem, StockMovement } from './types';
export { createInventoryItem, createStockMovement } from './factories';
export { MovementType, StockStatus } from './constants';