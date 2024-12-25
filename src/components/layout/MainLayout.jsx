import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    return localStorage.getItem('sidebarOpen') !== 'false';
  });

  useEffect(() => {
    localStorage.setItem('sidebarOpen', String(sidebarOpen));
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className={`
        fixed top-0 left-0 h-full bg-gray-900
        transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'w-64' : 'w-20'}
      `}>
        <Sidebar 
          collapsed={!sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      </aside>

      <main className={`
        flex-1 transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'ml-64' : 'ml-20'}
      `}>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}