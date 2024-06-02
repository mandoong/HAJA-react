import { create } from "zustand";
import { Post } from "../utils/repository";

const usePostStore = create((set) => ({
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

export default usePostStore;
