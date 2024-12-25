import { useState } from 'react';
import { useCustomerStore } from '@/store/customers';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { CustomerTable } from './components/CustomerTable';
import { CustomerDialog } from './components/CustomerDialog';

export function CustomerList() {
  const [showDialog, setShowDialog] = useState(false);
  const customers = useCustomerStore((state) => state.customers);
  const addCustomer = useCustomerStore((state) => state.addCustomer);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <Button onClick={() => setShowDialog(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Cliente
        </Button>
      </div>

      <CustomerTable customers={customers} />

      {showDialog && (
        <CustomerDialog
          onClose={() => setShowDialog(false)}
          onSave={(customer) => {
            addCustomer(customer);
            setShowDialog(false);
          }}
        />
      )}
    </div>
  );
}