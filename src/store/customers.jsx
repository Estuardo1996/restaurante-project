import { create } from 'zustand';

const defaultTiers = [
  {
    id: '1',
    name: 'Bronce',
    minimumPoints: 0,
    discount: 0,
    benefits: ['Acumulación básica de puntos']
  },
  {
    id: '2',
    name: 'Plata',
    minimumPoints: 100,
    discount: 5,
    benefits: ['5% de descuento', 'Puntos dobles en bebidas']
  },
  {
    id: '3',
    name: 'Oro',
    minimumPoints: 500,
    discount: 10,
    benefits: ['10% de descuento', 'Puntos dobles en todo', 'Postre gratis en cumpleaños']
  }
];

const sampleCustomers = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '123-456-7890',
    loyaltyPoints: 250,
    currentTier: '2',
    visits: 15,
    totalSpent: 450.75,
    lastVisit: new Date()
  }
];

export const useCustomerStore = create((set, get) => ({
  customers: sampleCustomers,
  loyaltyTiers: defaultTiers,
  transactions: [],

  addCustomer: (customer) => {
    const newCustomer = {
      ...customer,
      id: crypto.randomUUID(),
      loyaltyPoints: 0,
      currentTier: '1',
      visits: 0,
      totalSpent: 0,
      lastVisit: new Date()
    };

    set((state) => ({
      customers: [...state.customers, newCustomer]
    }));
  },

  updateCustomer: (id, updates) => {
    set((state) => ({
      customers: state.customers.map((customer) =>
        customer.id === id ? { ...customer, ...updates } : customer
      )
    }));
  },

  addLoyaltyPoints: (customerId, points, orderId) => {
    const transaction = {
      id: crypto.randomUUID(),
      customerId,
      points,
      type: 'earn',
      orderId,
      description: 'Puntos ganados por compra',
      date: new Date()
    };

    set((state) => {
      const customer = state.customers.find((c) => c.id === customerId);
      if (!customer) return state;

      const newPoints = customer.loyaltyPoints + points;
      const newTier = get().getCurrentTier(newPoints);

      return {
        customers: state.customers.map((c) =>
          c.id === customerId
            ? {
                ...c,
                loyaltyPoints: newPoints,
                currentTier: newTier.id
              }
            : c
        ),
        transactions: [...state.transactions, transaction]
      };
    });
  },

  getCurrentTier: (points) => {
    const tiers = get().loyaltyTiers;
    return [...tiers]
      .sort((a, b) => b.minimumPoints - a.minimumPoints)
      .find((tier) => points >= tier.minimumPoints) || tiers[0];
  }
}));