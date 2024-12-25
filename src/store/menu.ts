import { create } from 'zustand';
import { MenuItem, MenuCategory } from '@/types/menu';

interface MenuState {
  categories: MenuCategory[];
  addMenuItem: (categoryId: string, item: Omit<MenuItem, 'id'>) => void;
  removeMenuItem: (categoryId: string, itemId: string) => void;
  addCategory: (name: string) => void;
  removeCategory: (id: string) => void;
  getMenuItem: (itemId: string) => MenuItem | undefined;
}

const sampleCategories: MenuCategory[] = [
  {
    id: '1',
    name: 'Entradas',
    items: [
      {
        id: '1',
        name: 'Ensalada César',
        type: 'recipe',
        recipeId: '1',
        price: 12.99,
        description: 'Lechuga romana fresca con aderezo César, crutones y queso parmesano',
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9'
      }
    ]
  },
  {
    id: '2',
    name: 'Platos Principales',
    items: [
      {
        id: '2',
        name: 'Pasta Carbonara',
        type: 'recipe',
        recipeId: '2',
        price: 18.99,
        description: 'Pasta fresca con salsa cremosa, panceta y queso parmesano',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3'
      }
    ]
  },
  {
    id: '3',
    name: 'Bebidas',
    items: [
      {
        id: '3',
        name: 'Limonada Casera',
        type: 'product',
        inventoryItemId: '1',
        price: 4.99,
        description: 'Limonada fresca con menta',
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859'
      }
    ]
  }
];

export const useMenuStore = create<MenuState>((set, get) => ({
  categories: sampleCategories,
  // ... resto del código existente
}));