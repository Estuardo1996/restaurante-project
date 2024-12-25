export const createInventoryItem = ({
  name,
  quantity,
  unit,
  minStock,
  currentStock,
  cost,
  category
}) => ({
  id: crypto.randomUUID(),
  name,
  quantity,
  unit,
  minStock,
  currentStock: currentStock || quantity,
  cost,
  category,
  lastUpdated: new Date()
});

export const createMovement = ({
  itemId,
  quantity,
  type,
  reason,
  recipeId
}) => ({
  id: crypto.randomUUID(),
  itemId,
  quantity,
  type,
  reason,
  date: new Date(),
  recipeId
});