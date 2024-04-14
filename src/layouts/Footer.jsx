export default function LayoutFooter() {
  return (
    <>
      <div className="flex w-full justify-between gap-20 text-sm px-4 py-16 border-y-[1px]  mt-4 text-gray-400">
        <div className="w-56">
          <div className="mb-10">하자</div>
          <div>
            <div className="flex justify-between w-full">
              <div>1:1문의</div>
              <button type="button" className="font-semibold text-gray-600">
                카카오톡 연결
              </button>
            </div>
            <div className="flex justify-between w-full">
              <div>운영자 상담</div>
              <button type="button" className="font-semibold text-gray-600">
                하자운영자 연결
              </button>
            </div>
            <div className="flex justify-between w-full">
              <div>오픈 쳇</div>
              <button type="button" className="font-semibold text-gray-600">
                코드 2580
              </button>
            </div>
            <div className="flex justify-between w-full">
              <div>제휴 문의</div>
              <button type="button" className="font-semibold text-gray-600">
                haja@gmail.com
              </button>
            </div>
          </div>
        </div>
        <div className="w-[640px] flex gap-4">
          <div className="flex-1 flex flex-col gap-4">
            <div className="font-bold text-gray-600">바로가기</div>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                모임
              </button>
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                프로덕트
              </button>
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                하자인
              </button>
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                퀘스트
              </button>
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                라운지
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="font-bold text-gray-600">이용안내</div>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                공지사항
              </button>
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                FAQ
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="font-bold text-gray-600">관련사이트</div>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                네이버 블로그
              </button>
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                티스트리 블로그
              </button>
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                인스타그램
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="font-bold text-gray-600">서비스 약관</div>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                서비스 이용약관
              </button>
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                개인정보취급방침
              </button>
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                전자금융거래약관
              </button>
              <button
                type="button"
                className="hover:text-gray-700 hover:font-semibold text-start"
              >
                결제/환불약관
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm py-20 bg-[#fbfbfb] px-4 text-gray-400">
        <div className="mb-4">개인정보담당자: 홍기동 haja@gmail.com</div>
        <div>Copyright 2024 HAJA ALL right reserved</div>
      </div>
    </>
  );
}
