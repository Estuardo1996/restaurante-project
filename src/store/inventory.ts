import { create } from 'zustand';
import { InventoryItem, StockMovement } from '@/types/inventory';

const sampleInventory: InventoryItem[] = [
  {
    id: '1',
    name: 'Harina',
    quantity: 50,
    unit: 'kg',
    minStock: 20,
    currentStock: 35,
    cost: 2.5,
    category: 'Secos',
    lastUpdated: new Date()
  },
  {
    id: '2',
    name: 'Aceite de Oliva',
    quantity: 20,
    unit: 'l',
    minStock: 5,
    currentStock: 4,
    cost: 8.0,
    category: 'Líquidos',
    lastUpdated: new Date()
  },
  {
    id: '3',
    name: 'Tomates',
    quantity: 30,
    unit: 'kg',
    minStock: 10,
    currentStock: 15,
    cost: 3.0,
    category: 'Verduras',
    lastUpdated: new Date()
  }
];

interface InventoryState {
  items: InventoryItem[];
  movements: StockMovement[];
  addItem: (item: Omit<InventoryItem, 'id' | 'lastUpdated'>) => void;
  updateStock: (itemId: string, quantity: number, type: 'IN' | 'OUT', reason: string, recipeId?: string) => void;
  getItemStock: (itemId: string) => number;
  getLowStockItems: () => InventoryItem[];
}

export const useInventoryStore = create<InventoryState>((set, get) => ({
  items: sampleInventory,
  movements: [],

  addItem: (item) => {
    const newItem: InventoryItem = {
      ...item,
      id: crypto.randomUUID(),
      lastUpdated: new Date(),
      currentStock: item.quantity
    };
    
    set((state) => ({
      items: [...state.items, newItem],
      movements: [...state.movements, {
        id: crypto.randomUUID(),
        itemId: newItem.id,
        quantity: item.quantity,
        type: 'IN',
        reason: 'Initial stock',
        date: new Date()
      }]
    }));
  },

  updateStock: (itemId, quantity, type, reason, recipeId) => {
    const movement: StockMovement = {
      id: crypto.randomUUID(),
      itemId,
      quantity,
      type,
      reason,
      date: new Date(),
      recipeId
    };

    set((state) => ({
      items: state.items.map(item => 
        item.id === itemId
          ? {
              ...item,
              currentStock: type === 'IN' 
                ? item.currentStock + quantity
                : item.currentStock - quantity,
              lastUpdated: new Date()
            }
          : item
      ),
      movements: [...state.movements, movement]
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