import { Card } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function LoyaltyTransactionList({ transactions }) {
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Últimas Transacciones</h3>
      <div className="space-y-4">
        {sortedTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                transaction.type === 'earn'
                  ? 'bg-green-100'
                  : 'bg-red-100'
              }`}>
                {transaction.type === 'earn' ? (
                  <ArrowUpRight className="w-4 h-4 text-green-600" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-600" />
                )}
              </div>
              <div>
                <p className="font-medium">
                  {transaction.type === 'earn' ? 'Ganados' : 'Canjeados'}
                </p>
                <p className="text-sm text-gray-500">{transaction.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-bold ${
                transaction.type === 'earn'
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}>
                {transaction.type === 'earn' ? '+' : '-'}{transaction.points} pts
              </p>
              <p className="text-sm text-gray-500">
                {new Date(transaction.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
