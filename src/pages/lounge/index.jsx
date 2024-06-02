import { useEffect } from "react";
import usePostStore from "../../store/usePostStore";
import LoungeList from "./List";
import LoungeRankTap from "./RankTap";
import LoungeTagTap from "./TagTap";

export default function Lounge() {
  const { posts, fetchPosts, isLoadingPosts } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="flex w-full">
      <LoungeTagTap />
      {isLoadingPosts ? <div>스피너 넣기</div> : <LoungeList posts={posts} />}
      <LoungeRankTap />
    </div>
  );
}
