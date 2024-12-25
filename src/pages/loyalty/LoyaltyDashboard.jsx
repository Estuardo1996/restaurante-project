import { useState } from 'react';
import { useCustomerStore } from '@/store/customers';
import { LoyaltyTierCard } from './components/LoyaltyTierCard';
import { LoyaltyTransactionList } from './components/LoyaltyTransactionList';
import { CustomerLoyaltyStats } from './components/CustomerLoyaltyStats';

export function LoyaltyDashboard() {
  const loyaltyTiers = useCustomerStore((state) => state.loyaltyTiers);
  const transactions = useCustomerStore((state) => state.transactions);
  const customers = useCustomerStore((state) => state.customers);

  return (
    <div className="h-full w-full flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-4">Programa de Fidelización</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        {loyaltyTiers.map((tier) => (
          <LoyaltyTierCard key={tier.id} tier={tier} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        <CustomerLoyaltyStats customers={customers} />
        <LoyaltyTransactionList transactions={transactions} />
      </div>
    </div>
  );
}
