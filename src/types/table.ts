export type TableStatus = 'available' | 'occupied' | 'reserved' | 'cleaning';
export type PaymentMethod = 'cash' | 'card' | 'transfer';
export type PaymentStatus = 'pending' | 'partial' | 'completed';

export interface TablePosition {
  x: number;
  y: number;
}

export interface Table {
  id: string;
  number: number;
  capacity: number;
  status: TableStatus;
  position: TablePosition;
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