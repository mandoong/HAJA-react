import LayoutHeader from "./Header";
import LayoutFooter from "./Footer";

export default function LayoutDefault({ children }) {
  return (
    <div className="w-30 bg-bottom">
      <LayoutHeader />
      {children}
      <LayoutFooter />
    </div>
  );
}
