import { useState } from 'react';
import { TableGrid } from './components/TableGrid';
import { TableActions } from './components/TableActions';
import { TableOrders } from './components/TableOrders';
import { TableConfigDialog } from './components/TableConfigDialog';
import { Button } from '@/components/ui/button';
import { Settings, ArrowLeft } from 'lucide-react';

export function TableLayout() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [showConfig, setShowConfig] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleTableSelect = (table) => {
    setSelectedTable(table);
    setShowDetails(true);
  };

  const handleBack = () => {
    setSelectedTable(null);
    setShowDetails(false);
  };

  return (
    <div className="h-[calc(100vh-4rem)]">
      <div className={`
        h-full transition-all duration-300
        ${showDetails ? 'hidden lg:block lg:pr-96' : 'block w-full'}
      `}>
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Disposición de Mesas</h1>
            <Button 
              variant="outline"
              onClick={() => setShowConfig(true)}
            >
              <Settings className="w-4 h-4 mr-2" />
              Configurar Mesas
            </Button>
          </div>
          
          <div className="flex-1 overflow-auto">
            <TableGrid onTableSelect={handleTableSelect} />
          </div>
        </div>
      </div>

      <div className={`
        fixed top-0 right-0 h-full w-full lg:w-96 bg-white shadow-xl
        transform transition-transform duration-300 z-20
        ${showDetails ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="sticky top-0 bg-white border-b z-10">
          <div className="flex items-center h-16 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Regresar a mesas
            </Button>
            <h2 className="font-semibold">
              {selectedTable ? `Mesa ${selectedTable.number}` : 'Detalles'}
            </h2>
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100%-4rem)] p-4">
          {selectedTable && (
            <>
              <TableActions table={selectedTable} />
              <TableOrders tableId={selectedTable.id} />
            </>
          )}
        </div>
      </div>

      {showConfig && (
        <TableConfigDialog onClose={() => setShowConfig(false)} />
      )}
    </div>
  );
}
