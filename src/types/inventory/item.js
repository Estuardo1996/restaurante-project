// Single responsibility: Define inventory item factory
export const createInventoryItem = ({
  name = '',
  quantity = 0,
  unit = '',
  minStock = 0,
  currentStock = 0,
  cost = 0,
  category = ''
} = {}) => ({
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