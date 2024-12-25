import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Star } from 'lucide-react';
import { useCustomerStore } from '@/store/customers';

export function CustomerFilters({ 
  search, 
  onSearchChange,
  selectedTier,
  onTierChange 
}) {
  const loyaltyTiers = useCustomerStore((state) => state.loyaltyTiers);

  return (
    <div className="space-y-4 mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Buscar clientes..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button
          variant={selectedTier === 'all' ? 'default' : 'outline'}
          onClick={() => onTierChange('all')}
        >
          Todos
        </Button>
        {loyaltyTiers.map((tier) => (
          <Button
            key={tier.id}
            variant={selectedTier === tier.id ? 'default' : 'outline'}
            onClick={() => onTierChange(tier.id)}
            className="flex items-center gap-1"
          >
            <Star className="w-4 h-4" />
            {tier.name}
          </Button>
        ))}
      </div>
    </div>
  );
}