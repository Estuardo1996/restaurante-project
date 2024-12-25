import { Card } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export function PaymentMethodsTable({ payments }) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold">Métodos de Pago</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-2">Método</th>
              <th className="pb-2">Transacciones</th>
              <th className="pb-2">Total</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {payments.map((payment) => (
              <tr key={payment.method} className="border-t">
                <td className="py-2 capitalize">{payment.method}</td>
                <td className="py-2">{payment.transactions}</td>
                <td className="py-2">${payment.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}