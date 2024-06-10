import { useEffect, useRef, useCallback } from "react";
import { usePostStore } from "../../store/store";
import LoungeList from "./List";
import LoungeRankTap from "./RankTap";
import LoungeTagTap from "./TagTap";

export default function Lounge() {
  const { posts, fetchPosts, hasMore, fetchMorePosts, isLoadingPosts } =
    usePostStore();
  const observer = useRef(null);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // 마지막 게시물을 관찰
  const lastPostRef = useCallback(
    (node) => {
      if (isLoadingPosts) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            // console.log("마지막 게시물");
            fetchMorePosts();
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
    [isLoadingPosts, fetchMorePosts, hasMore]
  );

  return (
    <div className="flex w-full">
      <LoungeTagTap />
      {isLoadingPosts ? (
        <div>스피너 넣기</div>
      ) : (
        <LoungeList posts={posts} lastPostRef={lastPostRef} />
      )}
      <LoungeRankTap />
    </div>
  );
}
