import React, { useEffect, useState } from 'react';
import { getEmpresas, createEmpresa } from '@/lib/api';

const EmpresasPage = () => {
  const [empresas, setEmpresas] = useState([]);
  const [newEmpresa, setNewEmpresa] = useState('');

  useEffect(() => {
    const fetchEmpresas = async () => {
      const data = await getEmpresas();
      setEmpresas(data);
    };

    fetchEmpresas();
  }, []);

  const handleAddEmpresa = async () => {
    const empresa = { Nombre: newEmpresa }; // Ajusta al modelo de datos
    await createEmpresa(empresa);
    setNewEmpresa('');
    const data = await getEmpresas();
    setEmpresas(data);
  };

  return (
    <div>
      <h1>Empresas</h1>
      <input
        type="text"
        value={newEmpresa}
        onChange={(e) => setNewEmpresa(e.target.value)}
        placeholder="Nueva Empresa"
      />
      <button onClick={handleAddEmpresa}>Agregar Empresa</button>
      <ul>
        {empresas.map((empresa) => (
          <li key={empresa.EmpresaID}>{empresa.Nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmpresasPage;
