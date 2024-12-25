export interface Supplier {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
  products: string[]; // IDs de productos que suministra
  rating: number;
  lastOrder?: Date;
  paymentTerms?: string;
  notes?: string;
}

export interface PurchaseOrder {
  id: string;
  supplierId: string;
  items: {
    productId: string;
    quantity: number;
    unitPrice: number;
  }[];
  status: 'pending' | 'approved' | 'received' | 'cancelled';
  total: number;
  orderDate: Date;
  expectedDeliveryDate?: Date;
  receivedDate?: Date;
  notes?: string;
}