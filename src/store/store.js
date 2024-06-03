import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Post } from "../utils/repository";

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

  setPosts: (posts) => set({ posts }),

  fetchPosts: async () => {
    set({ isLoadingPosts: true });
    try {
      const data = await Post.fetchPosts();
      set({ posts: data });
    } catch (err) {
      console.error("fetching Posts error:", err);
    } finally {
      set({ isLoadingPosts: false });
    }
  },
}));
