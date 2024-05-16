import LoungeList from "./List";
import LoungeRankTap from "./RankTap";
import LoungeTagTap from "./TagTap";

export default function Lounge() {
  return (
    <div className="flex">
      <LoungeTagTap />
      <LoungeList />
      <LoungeRankTap />
    </div>
  );
}
