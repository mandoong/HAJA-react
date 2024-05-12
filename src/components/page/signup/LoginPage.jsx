export default function loginPage() {
  const handleClose = () => {
    const popup = window.open("", "_self");
    popup.close();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg">기존 페이지로 돌아갑니다.</p>
      <button type="button" onClick={handleClose}>
        확인
      </button>
    </div>
  );
}
