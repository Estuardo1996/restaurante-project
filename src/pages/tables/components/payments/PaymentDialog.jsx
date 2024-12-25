import { useState } from 'react';
import { Order, PaymentMethod } from '@/types/table';
import { useTableStore } from '@/store/tables';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { PaymentMethodSelector } from './PaymentMethodSelector';
import { DinerPaymentList } from './DinerPaymentList';



export function PaymentDialog({ order, onClose }) {
  const [selectedDinerId, setSelectedDinerId] = useState(order.diners[0]?.id);
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState<PaymentMethod>('cash');
  
  const addPayment = useTableStore((state) => state.addPayment);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDinerId && amount) {
      addPayment(order.id, {
        dinerId: selectedDinerId,
        amount: parseFloat(amount),
        method,
        status: 'completed'
      });
      setAmount('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Registrar Pago</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <DinerPaymentList
          order={order}
          selectedDinerId={selectedDinerId}
          onSelectDiner={setSelectedDinerId}
        />

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Monto
            </label>
            <Input
              type="number"
              step="0.01"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              required
            />
          </div>

          <PaymentMethodSelector
            selected={method}
            onSelect={setMethod}
          />

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              Registrar Pago
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}