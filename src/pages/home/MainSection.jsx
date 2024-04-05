export default function HomeMainSection() {
  return (
    <div
      className="w-full max-w-[1200px] h-[500px] bg-fixed bg-center relative"
      style={{ backgroundImage: 'url("/img/mainCard.png")' }}
    >
      <div className="absolute top-52 left-10 text-[32px] font-bold">
        <div className="mb-2 font-[500]">프로젝트 어디서?</div>
        <div>헤메지 말고 그냥 &apos;하자&apos;!</div>
      </div>
      <div className="absolute top-[350px] left-10 ">
        <div>내가 생각하는 아이디어를 실현하는 커뮤니티</div>
        <div>본업은 직장인, 부캐는 하자인이 되어보세요.</div>
      </div>
    </div>
  );
}
