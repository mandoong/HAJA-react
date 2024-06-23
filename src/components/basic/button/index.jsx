export default function BasicButton({ children, onClick = () => {} }) {
  const bg = "edfcfa";
  const textColor = "8dd4c5";

  return (
    <button
      type="button"
      className={`py-2 px-4 text-xs rounded-full bg-[#${bg}] text-[#${textColor}]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
