import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL base de tu backend
});

export const authenticate = async (username, password) => {
    try {
      const response = await api.post('/api/Auth/login', { username, password }); // Ajusta la ruta según tu API
      return response.data; // Suponiendo que devuelve un token en `data.token`
    } catch (error) {
      console.error('Error en la autenticación:', error);
      throw new Error('Credenciales inválidas');
    }
  };


// Ejemplo: Endpoints para empresas
export const getEmpresas = async () => {
  const response = await api.get('/api/empresas');
  return response.data;
};

export const createEmpresa = async (empresa) => {
  const response = await api.post('/api/empresas', empresa);
  return response.data;
};

// Otros catálogos
export const getSucursales = async () => {
  const response = await api.get('/api/sucursales');
  return response.data;
};

export default api;
