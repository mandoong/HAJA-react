import LayoutHeader from "./Header";

export default function LayoutDefault({ children }) {
  return (
    <div className="w-30 bg-bottom">
      <LayoutHeader />
      {children}
    </div>
  );
}
