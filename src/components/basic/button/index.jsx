export default function BasicButton({ children }) {
  const bg = "edfcfa";
  const textColor = "8dd4c5";

  return (
    <div
      className={`py-2 px-4 text-xs rounded-full bg-[#${bg}] text-[#${textColor}]`}
    >
      {children}
    </div>
  );
}
