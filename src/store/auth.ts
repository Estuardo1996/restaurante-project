import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
};

const DEFAULT_PASSWORD = 'admin123'; // En producción, esto debería estar en el backend

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: (password: string) => {
    if (password === DEFAULT_PASSWORD) {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false }),
}));