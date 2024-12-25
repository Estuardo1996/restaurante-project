export interface LoyaltyTier {
  id: string;
  name: string;
  minimumPoints: number;
  discount: number;
  benefits: string[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  loyaltyPoints: number;
  currentTier: string;
  visits: number;
  totalSpent: number;
  lastVisit: Date;
  notes?: string;
}

export interface LoyaltyTransaction {
  id: string;
  customerId: string;
  points: number;
  type: 'earn' | 'redeem';
  orderId?: string;
  description: string;
  date: Date;
}