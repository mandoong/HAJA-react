import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

export const useUserStore = create(
  persist(
    (set, get) => ({
      token: null,
      setToken: (token) => set({ token }),
      removeToken: () => set({ token: null }),
    }),
    {
      name: "token_storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
