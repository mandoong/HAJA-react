import UserListSection from "../../components/page/user/UserListSection";
import UserWrapper from "../../components/page/user/UserWrapper";

export default function UserList() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8]">
      <div className="w-full">
        <UserWrapper />
        <UserListSection />
      </div>
    </div>
  );
}
