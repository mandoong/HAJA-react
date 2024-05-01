export default function HomeBanner() {
  return (
    <div className="w-full mt-10">
      <div className="flex w-full h-24 bg-[#45d8e2] rounded-lg py-2 gap-10">
        <div className="w-48 flex justify-end items-center">
          <div className="w-20 aspect-square rounded-full border bg-[#47d9e3] flex flex-col justify-center items-center gap-2 rotate-45">
            <div className="rounded-full w-6 h-3 bg-white" />
            <div className="rounded-full w-16 h-3 bg-white" />
            <div className="rounded-full w-4 h-3 bg-white" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-sm">
            기다렸던 스피릿, 독서습관 만들기! 지금 만나보세요
          </div>
          <div className="flex w-full justify-center gap-2">
            <div className="rounded-full w-10 aspect-square bg-white" />
            <div className="rounded-full w-10 aspect-square bg-white" />
            <div className="rounded-full w-10 aspect-square bg-white" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-[#333333] text-white text-xs px-4 py-2 flex justify-center items-center rounded-full">
            회고 보러가기
          </div>
        </div>
      </div>
    </div>
  );
}
