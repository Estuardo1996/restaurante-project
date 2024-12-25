import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { MainLayout } from '@/components/layout/MainLayout';
import { Dashboard } from '@/pages/Dashboard';
import { RecipeList } from '@/pages/recipes/RecipeList';
import { InventoryList } from '@/pages/inventory/InventoryList';
import { TableLayout } from '@/pages/tables/TableLayout';
import { CustomerList } from '@/pages/customers/CustomerList';
import { SupplierList } from '@/pages/suppliers/SupplierList';
import { LoyaltyDashboard } from '@/pages/loyalty/LoyaltyDashboard';
import { Settings } from '@/pages/settings/Settings';
import { useAuthStore } from '@/store/auth';

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="recipes" element={<RecipeList />} />
          <Route path="inventory" element={<InventoryList />} />
          <Route path="tables" element={<TableLayout />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="suppliers" element={<SupplierList />} />
          <Route path="loyalty" element={<LoyaltyDashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route index element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </Router>
  );
}