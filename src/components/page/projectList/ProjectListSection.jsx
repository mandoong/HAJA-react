import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import BasicCardImgCard from "../../basic/card/ImgCard";
import { Project } from "../../../utils/repository";

export default function ProjectListSection() {
  const [data, setData] = useState([]);
  const [numColumns, setNumColumns] = useState(4); // 한 줄에 표시할 개수
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetch = async (page = 1) => {
    try {
      const result = await Project.ProjectList(page, 12);
      setData(result.data.nodes);
      setTotalPages(Math.ceil(result.data.count / 12)); // 올림하여 총 페이지 수 계산
      console.log(Math.ceil(result.data.count / 12));
    } catch (error) {
      console.log("Fail", error);
    }
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
    <div className="w-full py-4 px-10">
      <div
        className="grid gap-5 justify-center "
        style={{
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
        }}
      >
        {data.length > 0 ? (
          data.map((e) => (
            <div key={e.id}>
              <BasicCardImgCard
                key={e.id}
                img={e.thumbnailUrl}
                title={e.title}
                desc={e.platform}
                like
              >
                <div className="flex justify-between items-center">
                  <div className="text-xs text-[#afafaf] ml-auto">
                    by {e.userId}
                  </div>
                </div>
                <hr className="my-4" />
                <Link
                  className="w-full py-2 rounded-full flex justify-center items-center text-sm text-[#8dd4c5] bg-[#edfcfa]"
                  to={`/project/${e.id}`}
                >
                  프로젝트 자세히 보기
                </Link>
              </BasicCardImgCard>
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
