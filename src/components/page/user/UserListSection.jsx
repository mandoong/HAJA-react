import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { User } from "../../../utils/repository";
import BasicUserProfile from "../../basic/user/UserProfile";

export default function UserListSection() {
  const [data, setData] = useState([]);
  const [numColumns, setNumColumns] = useState(4); // 한 줄에 표시할 개수
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetch = async (page = 1) => {
    const result = await User.GetUser(page, 12);
    setData(result.data.nodes);
    setTotalPages(Math.ceil(result.data.count / 12)); // 올림하여 총 페이지 수 계산
  };

  useEffect(() => {
    fetch(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280) {
        setNumColumns(4);
      } else if (windowWidth >= 1024) {
        setNumColumns(3);
      } else if (windowWidth >= 768) {
        setNumColumns(2);
      } else if (windowWidth >= 640) {
        setNumColumns(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getVisiblePageNumbers = () => {
    const pages = [];
    const totalVisible = 10;
    const halfVisible = Math.floor(totalVisible / 2);
    let startPage = Math.max(currentPage - halfVisible, 1);
    const endPage = Math.min(startPage + totalVisible - 1, totalPages);

    if (endPage - startPage < totalVisible - 1) {
      startPage = Math.max(endPage - totalVisible + 1, 1);
    }

    for (let i = startPage; i <= endPage; i += 1) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="w-full py-4 pt-10 px-10">
      <div
        className="grid gap-5 justify-center "
        style={{
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
        }}
      >
        {data.length > 0 ? (
          data.map((e) => (
            <div key={e.id}>
              <BasicUserProfile
                key={e.id}
                img={e.thumbnailUrl}
                nickname={e.nickname}
                title={e.title}
                email={e.email}
                like
                note
              >
                <div className="text-sm px-3 pb-3">
                  <div className="flex justify-between mb-3 text-[#888888]" />
                  <hr className="w-full" />
                  <div className="flex text-xs pt-2">
                    <button
                      type="button"
                      className="w-full mx-1 h-6 rounded-md bg-blue-300 hover:bg-blue-500 text-xs font-bold text-[white]"
                    >
                      모임 초대하기
                    </button>
                  </div>
                </div>
              </BasicUserProfile>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="w-full py-4 px-10">
        <div className="py-20 flex text-lg justify-center items-center gap-4">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeftIcon className="w-5" />
            <strong className="border-b-2 border-gray-400">Previous</strong>
          </button>
          <div>
            {getVisiblePageNumbers().map((page) => (
              <button
                type="button"
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-2 ${currentPage === page ? "font-bold" : ""}`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2"
          >
            <strong className="border-b-2 border-gray-400">Next</strong>
            <ArrowRightIcon className="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
