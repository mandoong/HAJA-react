import BasicWrapper from "../../basic/card/Wrapper";

export default function ApplyWrapper() {
  const wrapperItems = [
    {
      title: "프로젝트 생성",
      desc: "만들고 싶은 프로젝트가 있다면 HAJA에서 같이 하나씩 정리해봐요!",
    },
  ];
  return (
    <div>
      {wrapperItems.map((w) => {
        return <BasicWrapper key={w.title} title={w.title} desc={w.desc} />;
      })}
    </div>
  );
}
