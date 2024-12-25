import { Button } from '@/components/ui/button';

interface OrderActionsProps {
  onViewDetails: () => void;
  onPayment: () => void;
}

export function OrderActions({ onViewDetails, onPayment }: OrderActionsProps) {
  return (
    <div className="flex gap-2">
      <Button size="sm" variant="outline" onClick={onViewDetails}>
        Ver detalles
      </Button>
      <Button size="sm" variant="outline" onClick={onPayment}>
        Pagar
      </Button>
    </div>
  );
}