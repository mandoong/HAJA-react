import BasicWrapper from "../../basic/card/Wrapper";

export default function UserWrapper() {
  const wrapperItems = [
    {
      title: "하자인",
      desc: "프로젝트를 함께할 하자인을 찾아보세요!",
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
