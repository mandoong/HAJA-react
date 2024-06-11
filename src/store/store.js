import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

export const useUserStore = create((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  removeToken: () => set({ token: null }),
}));

export const usePostStore = create((set) => ({
  posts: [],
  isLoadingPosts: false,
  page: 1,
  perPage: 10,
  query: "",
  hasMore: true,
  totalPosts: 0,

  setPosts: (posts) => set({ posts }),
  addPosts: (newPosts) =>
    set((state) => ({
      posts: [...state.posts, ...newPosts],
    })),
  setPage: (page) => set({ page }),
  setPerPage: (perPage) => set({ perPage }),
  setQuery: (query) => set({ query }),
  setTotalPosts: (totalPosts) => set({ totalPosts }),
  setHasMore: (hasMore) => set({ hasMore }),
  setIsLoadingPosts: (isLoadingPosts) => set({ isLoadingPosts }),
}));
