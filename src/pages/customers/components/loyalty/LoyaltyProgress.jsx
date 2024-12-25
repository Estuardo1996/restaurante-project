import { useCustomerStore } from '@/store/customers';

export function LoyaltyProgress({ customer }) {
  const getCurrentTier = useCustomerStore((state) => state.getCurrentTier);
  const loyaltyTiers = useCustomerStore((state) => state.loyaltyTiers);
  
  const currentTier = getCurrentTier(customer.loyaltyPoints);
  const nextTier = loyaltyTiers.find(t => t.minimumPoints > customer.loyaltyPoints);
  
  const progress = nextTier
    ? ((customer.loyaltyPoints - currentTier.minimumPoints) / 
       (nextTier.minimumPoints - currentTier.minimumPoints)) * 100
    : 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{currentTier.name}</span>
        {nextTier && (
          <span className="text-gray-600">
            {customer.loyaltyPoints} / {nextTier.minimumPoints} puntos
          </span>
        )}
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}