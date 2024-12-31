import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create((set) => ({
  token: null,
  isAuthenticated: false,
  user: null,

  login: (token, user) => set({ token, user, isAuthenticated: true }),
  logout: () => set({ token: null, user: null, isAuthenticated: false }),
}));