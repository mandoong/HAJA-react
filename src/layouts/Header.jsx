import {
  MagnifyingGlassIcon,
  PencilIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function LayoutHeader() {
  return (
    <>
      <div className="flex h-16 px-4 items-center justify-between">
        <div className="w-full flex items-center gap-10">
          로고
          <div className="w-96 text-[10px] md:hidden justify-around h-10 items-center flex">
            <Link className="hover:text-orange-400" to="/">
              모임
            </Link>
            <Link className="hover:text-orange-400" to="/">
              프로덕트
            </Link>
            <Link className="hover:text-orange-400" to="/">
              하자인
            </Link>
            <Link className="hover:text-orange-400" to="/">
              퀘스트
            </Link>
            <Link className="hover:text-orange-400" to="/">
              라운지
            </Link>
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <MagnifyingGlassIcon className="w-6" />
          </div>
          <div>
            <PencilIcon className="w-6" />
          </div>
          <div>
            <UserCircleIcon className="w-6" />
          </div>
        </div>
      </div>
      <div className="w-full text-sm md:flex justify-around h-10 items-center hidden">
        <Link className="hover:text-orange-400" to="/">
          모임
        </Link>
        <Link className="hover:text-orange-400" to="/">
          프로덕트
        </Link>
        <Link className="hover:text-orange-400" to="/">
          하자인
        </Link>
        <Link className="hover:text-orange-400" to="/">
          퀘스트
        </Link>
        <Link className="hover:text-orange-400" to="/">
          라운지
        </Link>
      </div>
    </>
  );
}
