import { create } from 'zustand';
import { Supplier, PurchaseOrder } from '@/types/supplier';

interface SupplierState {
  suppliers: Supplier[];
  purchaseOrders: PurchaseOrder[];
  
  addSupplier: (supplier: Omit<Supplier, 'id' | 'rating'>) => void;
  updateSupplier: (id: string, supplier: Partial<Supplier>) => void;
  createPurchaseOrder: (order: Omit<PurchaseOrder, 'id' | 'status' | 'orderDate'>) => void;
  updatePurchaseOrder: (id: string, updates: Partial<PurchaseOrder>) => void;
}

const sampleSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Distribuidora ABC',
    contact: 'María González',
    email: 'maria@abc.com',
    phone: '123-456-7890',
    address: 'Calle Principal 123',
    products: ['1', '2', '3'],
    rating: 4.5,
    paymentTerms: 'Net 30'
  }
];

export const useSupplierStore = create<SupplierState>((set) => ({
  suppliers: sampleSuppliers,
  purchaseOrders: [],

  addSupplier: (supplier) => {
    const newSupplier: Supplier = {
      ...supplier,
      id: crypto.randomUUID(),
      rating: 5
    };

    set((state) => ({
      suppliers: [...state.suppliers, newSupplier]
    }));
  },

  updateSupplier: (id, updates) => {
    set((state) => ({
      suppliers: state.suppliers.map((supplier) =>
        supplier.id === id ? { ...supplier, ...updates } : supplier
      )
    }));
  },

  createPurchaseOrder: (order) => {
    const newOrder: PurchaseOrder = {
      ...order,
      id: crypto.randomUUID(),
      status: 'pending',
      orderDate: new Date()
    };

    set((state) => ({
      purchaseOrders: [...state.purchaseOrders, newOrder]
    }));
  },

  updatePurchaseOrder: (id, updates) => {
    set((state) => ({
      purchaseOrders: state.purchaseOrders.map((order) =>
        order.id === id ? { ...order, ...updates } : order
      )
    }));
  }
}));