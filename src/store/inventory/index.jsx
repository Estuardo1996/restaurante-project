import { create } from 'zustand';
import { createInventoryItem, MovementType } from '@/types/inventory';

const sampleInventory = [
  createInventoryItem({
    name: 'Harina',
    quantity: 50,
    unit: 'kg',
    minStock: 20,
    currentStock: 35,
    cost: 2.5,
    category: 'Secos'
  })
];

export const useInventoryStore = create((set, get) => ({
  items: sampleInventory,
  movements: [],

  addItem: (item) => {
    const newItem = createInventoryItem(item);
    set((state) => ({
      items: [...state.items, newItem]
    }));
  },

  updateStock: (itemId, quantity, type, reason, recipeId) => {
    set((state) => ({
      items: state.items.map(item => 
        item.id === itemId
          ? {
              ...item,
              currentStock: type === MovementType.IN 
                ? item.currentStock + quantity
                : item.currentStock - quantity,
              lastUpdated: new Date()
            }
          : item
      )
    }));
  },

  getItemStock: (itemId) => {
    const item = get().items.find(i => i.id === itemId);
    return item?.currentStock ?? 0;
  },

  getLowStockItems: () => {
    return get().items.filter(item => item.currentStock <= item.minStock);
  }
}));