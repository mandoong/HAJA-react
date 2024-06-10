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

export const usePostStore = create((set, get) => ({
  posts: {},
  isLoadingPosts: false,
  page: 1,
  perPage: 10,
  query: "",
  hasMore: true,
  totalPosts: 0,

  setPosts: (posts) => set({ posts }),
  setPage: (page) => set({ page }),
  setPerPage: (perPage) => set({ perPage }),
  setQuery: (query) => set({ query }),

  fetchPosts: async () => {
    set({ isLoadingPosts: true });
    try {
      const { page, perPage, query } = get();
      const res = await Post.fetchPosts({ page, perPage, query });
      set({
        posts: res.data.nodes,
        totalPosts: res.data.count,
        hasMore: page * perPage < res.data.count,
      });
    } catch (err) {
      console.error("fetchPosts 오류:", err);
      set({ posts: {} });
    } finally {
      set({ isLoadingPosts: false });
    }
  },

  fetchMorePosts: async () => {
    set({ isLoadingPosts: true });
    try {
      const { page, perPage, query, totalPosts } = get();
      const nextPage = page + 1;
      const res = await Post.fetchPosts({ page: nextPage, perPage, query });
      set((state) => ({
        posts: [...state.posts, ...res.data.nodes],
        page: nextPage,
        hasMore: nextPage * perPage < totalPosts,
      }));
      console.log("추가 포스트 응답:", res.data);
    } catch (err) {
      console.error("fetchMorePosts 오류:", err);
    } finally {
      set({ isLoadingPosts: false });
    }
  },
}));
