import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid'; // Necesitarás instalar `uuid`

const sampleTables = [
  {
    id: '1',
    number: 1,
    capacity: 4,
    status: 'available',
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    number: 2,
    capacity: 2,
    status: 'occupied',
    position: { x: 1, y: 0 },
  },
  {
    id: '3',
    number: 3,
    capacity: 6,
    status: 'reserved',
    position: { x: 2, y: 0 },
  },
  {
    id: '4',
    number: 4,
    capacity: 4,
    status: 'cleaning',
    position: { x: 0, y: 1 },
  },
  {
    id: '5',
    number: 5,
    capacity: 8,
    status: 'available',
    position: { x: 1, y: 1 },
    joinedWith: ['6'],
  },
  {
    id: '6',
    number: 6,
    capacity: 8,
    status: 'available',
    position: { x: 2, y: 1 },
    joinedWith: ['5'],
  },
];

const sampleOrders = [
  {
    id: '1',
    tableId: '2',
    diners: [
      { id: '1', name: 'Cliente 1', orderItems: [] },
      { id: '2', name: 'Cliente 2', orderItems: [] },
    ],
    items: [
      {
        id: '1',
        menuItemId: '1',
        quantity: 1,
        status: 'delivered',
        notes: 'Sin cebolla',
      },
    ],
    payments: [],
    status: 'active',
    startTime: new Date(),
  },
];

export const useTableStore = create((set, get) => ({
  tables: sampleTables,
  orders: sampleOrders,

  addTable: (table) => {
    const newTable = {
      ...table,
      id: uuidv4(),
    };
    set((state) => ({
      tables: [...state.tables, newTable],
    }));
  },

  updateTableStatus: (tableId, status) => {
    set((state) => ({
      tables: state.tables.map((table) =>
        table.id === tableId ? { ...table, status } : table
      ),
    }));
  },

  joinTables: (tableIds) => {
    set((state) => ({
      tables: state.tables.map((table) =>
        tableIds.includes(table.id)
          ? { ...table, joinedWith: tableIds.filter((id) => id !== table.id) }
          : table
      ),
    }));
  },

  unjoinTables: (tableIds) => {
    set((state) => ({
      tables: state.tables.map((table) =>
        tableIds.includes(table.id) ? { ...table, joinedWith: undefined } : table
      ),
    }));
  },

  createOrder: (tableId, diners) => {
    const orderId = uuidv4();
    const newOrder = {
      id: orderId,
      tableId,
      diners: diners.map((diner) => ({
        ...diner,
        id: uuidv4(),
        orderItems: [],
      })),
      items: [],
      payments: [],
      status: 'active',
      startTime: new Date(),
    };

    set((state) => ({
      orders: [...state.orders, newOrder],
      tables: state.tables.map((table) =>
        table.id === tableId ? { ...table, status: 'occupied' } : table
      ),
    }));

    return orderId;
  },

  addOrderItem: (orderId, item) => {
    const newItem = {
      ...item,
      id: uuidv4(),
      status: 'pending',
    };

    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId
          ? { ...order, items: [...order.items, newItem] }
          : order
      ),
    }));
  },

  updateOrderItemStatus: (orderId, itemId, status) => {
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              items: order.items.map((item) =>
                item.id === itemId ? { ...item, status } : item
              ),
            }
          : order
      ),
    }));
  },

  splitOrderItem: (orderId, itemId, dinerIds) => {
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              items: order.items.map((item) =>
                item.id === itemId ? { ...item, splitBetween: dinerIds } : item
              ),
            }
          : order
      ),
    }));
  },

  addPayment: (orderId, payment) => {
    const newPayment = {
      ...payment,
      id: uuidv4(),
      timestamp: new Date(),
    };

    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId
          ? { ...order, payments: [...order.payments, newPayment] }
          : order
      ),
    }));
  },

  getDinerTotal: (orderId, dinerId) => {
    const order = get().orders.find((o) => o.id === orderId);
    if (!order) return 0;

    return order.items.reduce((total, item) => {
      if (item.splitBetween?.includes(dinerId)) {
        const splitAmount = item.quantity / item.splitBetween.length;
        return total + splitAmount * 10;
      }
      return total;
    }, 0);
  },

  getOrderTotal: (orderId) => {
    const order = get().orders.find((o) => o.id === orderId);
    if (!order) return 0;

    return order.items.reduce((total, item) => {
      return total + item.quantity * 10;
    }, 0);
  },

  getRemainingBalance: (orderId) => {
    const order = get().orders.find((o) => o.id === orderId);
    if (!order) return 0;

    const total = get().getOrderTotal(orderId);
    const paid = order.payments.reduce((sum, payment) => sum + payment.amount, 0);

    return total - paid;
  },
}));
