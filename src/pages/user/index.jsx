import MypageMenu from "../../components/page/user/MypageMenu";

export default function UserMypage() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8]">
      <div className="flex flex-col items-center max-w-[1200px] px-10 box-border">
        <div className="w-full pt-12 text-left text-sm font-semibold text-[#594bba]">
          Myself
        </div>
        <div className="w-full pb-8 text-left text-3xl font-semibold">
          마이페이지
        </div>
        <MypageMenu />
      </div>
    </div>
  );
}
