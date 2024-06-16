import { useEffect, useRef, useCallback } from "react";
import { usePostStore } from "../../store/store";
import LoungeList from "./List";
import LoungeRankTap from "./RankTap";
import LoungeTagTap from "./TagTap";
import { Post } from "../../utils/repository";

export default function Lounge() {
  const {
    posts,
    setPosts,
    addPosts,
    page,
    perPage,
    query,
    totalPosts,
    hasMore,
    setHasMore,
    isLoadingPosts,
    setIsLoadingPosts,
    setPage,
    setTotalPosts,
  } = usePostStore();

  const observer = useRef(null);

  const loadInitialPosts = async () => {
    setIsLoadingPosts(true);
    try {
      const res = await Post.fetchPosts({ page, perPage, query });
      setPosts(res.data.nodes);
      setTotalPosts(res.data.count);
      setHasMore(page * perPage < res.data.count);
    } catch (err) {
      setPosts([]);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  const loadMorePosts = async () => {
    setIsLoadingPosts(true);
    try {
      const nextPage = page + 1;
      const res = await Post.fetchPosts({ page: nextPage, perPage, query });
      addPosts(res.data.nodes);
      setPage(nextPage);
      setHasMore(nextPage * perPage < totalPosts);
      // console.log("다음 10개 추가된 배열:", posts);
    } catch (err) {
      console.error("추가 오류:", err);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  useEffect(() => {
    loadInitialPosts();
  }, []);

  const lastPostRef = useCallback(
    (node) => {
      if (isLoadingPosts) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            // console.log("마지막 게시물");
            loadMorePosts();
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 1.0,
        }
      );
      if (node) observer.current.observe(node);
    },
    [isLoadingPosts, hasMore, posts]
  );

  return (
    <div className="flex w-full">
      <LoungeTagTap />
      <LoungeList
        posts={posts}
        lastPostRef={lastPostRef}
        isLoading={isLoadingPosts}
      />
      <LoungeRankTap />
    </div>
  );
}
