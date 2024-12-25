// Single responsibility: Define inventory constants
export const MovementType = {
  IN: 'IN',
  OUT: 'OUT'
} as const;

export const StockStatus = {
  NORMAL: 'normal',
  LOW: 'low',
  OUT_OF_STOCK: 'out_of_stock'
} as const;