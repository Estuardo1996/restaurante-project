import { Card } from '@/components/ui/card';
import { Gift, Check } from 'lucide-react';

export function LoyaltyBenefits({ tier }) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Gift className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold">Beneficios {tier.name}</h3>
      </div>
      <div className="space-y-2">
        {tier.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}