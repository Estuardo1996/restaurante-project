export type TableStatus = 'available' | 'occupied' | 'reserved' | 'cleaning';
export type PaymentMethod = 'cash' | 'card' | 'transfer';
export type PaymentStatus = 'pending' | 'partial' | 'completed';

export interface TablePosition {
  x: number;
  y: number;
}

// src/types/table.ts
export interface Table {
  id: string;
  number: number;
  capacity: number;
  status: 'available' | 'occupied' | 'reserved' | 'cleaning';
  position: { x: number; y: number };
  joinedWith?: string[];
}


export interface OrderItem {
  id: string;
  menuItemId: string;
  quantity: number;
  notes?: string;
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  splitBetween?: string[];
}

export interface Diner {
  id: string;
  name: string;
  orderItems: string[];
}

export interface Payment {
  id: string;
  dinerId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  timestamp: Date;
}

export interface Order {
  id: string;
  tableId: string;
  diners: Diner[];
  items: OrderItem[];
  payments: Payment[];
  status: 'active' | 'completed' | 'cancelled';
  startTime: Date;
  endTime?: Date;
}
// src/types/table.ts

export const Order = {
  id: 0,
  description: 'Default Order',
};

export const Table = {
  id: 0,
  number: 1,
  capacity: 4,
};

export const PaymentMethod = {
  id: 0,
  method: 'Credit Card', // Puedes agregar más propiedades según sea necesario
};