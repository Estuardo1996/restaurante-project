// Single responsibility: Define stock movement factory
import { MovementType } from './constants.js';

export const createStockMovement = ({
  itemId = '',
  quantity = 0,
  type = MovementType.IN,
  reason = '',
  recipeId = undefined
} = {}) => ({
  id: crypto.randomUUID(),
  itemId,
  quantity,
  type,
  reason,
  date: new Date(),
  recipeId
});