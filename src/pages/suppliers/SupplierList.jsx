import { useState } from 'react';
import { useSupplierStore } from '@/store/suppliers';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { SupplierTable } from './components/SupplierTable';
import { SupplierDialog } from './components/SupplierDialog';

export function SupplierList() {
  const [showDialog, setShowDialog] = useState(false);
  const suppliers = useSupplierStore((state) => state.suppliers);
  const addSupplier = useSupplierStore((state) => state.addSupplier);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Proveedores</h1>
        <Button onClick={() => setShowDialog(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Proveedor
        </Button>
      </div>

      <SupplierTable suppliers={suppliers} />

      {showDialog && (
        <SupplierDialog
          onClose={() => setShowDialog(false)}
          onSave={(supplier) => {
            addSupplier(supplier);
            setShowDialog(false);
          }}
        />
      )}
    </div>
  );
}