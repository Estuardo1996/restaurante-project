import { CreditCard, Wallet, BanknoteIcon } from 'lucide-react';

const methods = [
  { id: 'cash', label: 'Efectivo', icon: Wallet },
  { id: 'card', label: 'Tarjeta', icon: CreditCard },
  { id: 'transfer', label: 'Transferencia', icon: BanknoteIcon },
];

export function PaymentMethodList({ selected, onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {methods.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => onSelect(id)}
          className={`p-2 rounded-lg border flex flex-col items-center gap-1 ${
            selected === id
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <Icon className="w-5 h-5" />
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  );
}