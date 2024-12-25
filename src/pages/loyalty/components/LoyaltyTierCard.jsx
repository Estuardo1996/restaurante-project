import { Card } from '@/components/ui/card';
import { Award } from 'lucide-react';

export function LoyaltyTierCard({ tier }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Award className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{tier.name}</h3>
          <p className="text-sm text-gray-500">
            {tier.minimumPoints} puntos mínimos
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-2xl font-bold text-blue-600">
          {tier.discount}% descuento
        </div>
        
        <div className="space-y-2">
          {tier.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
