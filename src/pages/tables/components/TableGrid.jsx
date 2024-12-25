import { TableItem } from './TableItem';

export function TableGrid({ onTableSelect }) {
  const tables = useTableStore((state) => state.tables);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-fr">
      {tables.map((table) => (
        <TableItem
          key={table.id}
          table={table}
          onClick={() => onTableSelect(table)}
        />
      ))}
    </div>
  );
}
