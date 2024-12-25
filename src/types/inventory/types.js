// Single responsibility: Base inventory type definitions
export const InventoryItem = {
  create: ({
    id = crypto.randomUUID(),
    name = '',
    quantity = 0,
    unit = '',
    minStock = 0,
    currentStock = 0,
    cost = 0,
    category = '',
    lastUpdated = new Date()
  } = {}) => ({
    id,
    name,
    quantity,
    unit,
    minStock,
    currentStock,
    cost,
    category,
    lastUpdated
  })
};

export const StockMovement = {
  create: ({
    id = crypto.randomUUID(),
    itemId = '',
    quantity = 0,
    type = 'IN',
    reason = '',
    date = new Date(),
    recipeId = undefined
  } = {}) => ({
    id,
    itemId,
    quantity,
    type,
    reason,
    date,
    recipeId
  })
};