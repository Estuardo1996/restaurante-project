import { Table } from '@/types/table';
import { Users } from 'lucide-react';


const statusColors = {
  available: 'bg-green-100 text-green-800 border-green-200',
  occupied: 'bg-red-100 text-red-800 border-red-200',
  reserved: 'bg-blue-100 text-blue-800 border-blue-200',
  cleaning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
};

export function TableItem({ table, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-4 rounded-lg border-2 transition-all
        hover:shadow-md active:scale-95
        ${table.joinedWith ? 'border-blue-500' : 'border-gray-200'}
        ${statusColors[table.status]}
      `}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-lg font-semibold">Mesa {table.number}</span>
        <div className="flex items-center gap-1 text-sm">
          <Users className="w-4 h-4" />
          <span>{table.capacity}</span>
        </div>
        
        {table.joinedWith && (
          <div className="text-xs text-blue-600 text-center mt-2">
            Unida con: {table.joinedWith.map((id) => `Mesa ${id}`).join(', ')}
          </div>
        )}
      </div>
    </button>
  );
}