// Single responsibility: Central export point for inventory types
export { MovementType, StockStatus } from './constants.jsx';
export { createInventoryItem } from './item.js';
export { createStockMovement } from './movement.js';