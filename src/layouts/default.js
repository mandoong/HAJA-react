import LayoutHeader from "./Header";
import LayoutFooter from "./Footer";

export default function LayoutDefault({ children }) {
  return (
    <div className="w-30 bg-bottom">
      <LayoutHeader />
      <div className="w-full flex justify-center">
        <div className="max-w-[1400px] w-full">{children}</div>
      </div>
      <LayoutFooter />
    </div>
  );
}
