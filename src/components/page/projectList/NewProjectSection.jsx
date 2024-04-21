import { Link } from "react-router-dom";
import BasicCardImgCard from "../../basic/card/ImgCard";
import CommentCard from "../../basic/card/CommentCard";
import SimpleSlider from "../../basic/card/Slider";

export default function NewProject() {
  const listitems = [
    {
      title: "라이너블",
      desc: "안녕하세요. 여기는 서비스의 설명란입니다. 원하시는 내용이 표기 되는 공간입니다.",
      img: "",
      user: { name: "React" },
    },
  ];
  const commitems = [
    {
      name: "한옥마을요정",
      comment: "첫 번째 댓글입니다.",
      date: new Date().toLocaleDateString(),
    },
    {
      name: "React",
      comment: "두 번째 댓글입니다.",
      date: new Date().toLocaleDateString(),
    },
    {
      name: "Node.js",
      comment: "세 번째 댓글입니다.",
      date: new Date().toLocaleDateString(),
    },
  ];
  return (
    <div className="w-full justify-between">
      <div className="flex-1">
        <div>신규 프로젝트</div>
        <div className="justify-between border rounded-lg p-4">
          <SimpleSlider />
          <div className="flex justify-between items-center">
            <div className="text-xs text-[#afafaf] ml-auto">
              by {listitems[0].user.name}
            </div>
          </div>
          <hr className="my-4" />
          <Link
            className="w-full py-2 rounded-fll flex justify-center items-center text-sm text-[#8dd4c5] bg-[#edfcfa]"
            to="/"
          >
            프로젝트 자세히 보기
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <div>최신 댓글</div>
        <div className="border rounded-lg p-4">
          {commitems.map((c) => {
            return (
              <CommentCard key={c.comment} name={c.name} comment={c.comment}>
                <div className="flex justify-between items-center">
                  <div className="text-xs text-[#afafaf] ml-auto">{c.date}</div>
                </div>
              </CommentCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
