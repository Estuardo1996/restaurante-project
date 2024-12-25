import { useState } from 'react';
import { useInventoryStore } from '@/store/inventory';
import { Button } from '@/components/ui/button';
import { Plus, AlertTriangle } from 'lucide-react';
import { InventoryTable } from './components/InventoryTable';
import { LowStockAlert } from './components/LowStockAlert';
import { InventoryDialog } from './components/InventoryDialog';

export function InventoryList() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showLowStock, setShowLowStock] = useState(false);

  const items = useInventoryStore((state) => state.items);
  const lowStockItems = useInventoryStore((state) => state.getLowStockItems());
  const addItem = useInventoryStore((state) => state.addItem);

  const handleSave = (itemData) => {
    addItem(itemData);
    setShowDialog(false);
    setSelectedItem(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inventario</h1>
        <div className="flex gap-2">
          {lowStockItems.length > 0 && (
            <Button 
              variant="outline" 
              className="text-amber-600"
              onClick={() => setShowLowStock(true)}
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Productos bajos en stock ({lowStockItems.length})
            </Button>
          )}
          <Button onClick={() => setShowDialog(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Producto
          </Button>
        </div>
      </div>

      <InventoryTable 
        items={items}
        onEdit={setSelectedItem}
      />
      
      {showLowStock && (
        <LowStockAlert 
          items={lowStockItems} 
          onClose={() => setShowLowStock(false)} 
        />
      )}

      {showDialog && (
        <InventoryDialog
          item={selectedItem}
          onClose={() => {
            setShowDialog(false);
            setSelectedItem(null);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
}