import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LayoutHeader from "./Header";
import LayoutFooter from "./Footer";

export default function LayoutDefault({ children }) {
  const layout = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(window.scrollTop);
  }, [pathname]);

  return (
    <div className="w-30 bg-bottom" ref={layout}>
      <LayoutHeader />
      <div className="w-full flex justify-center">
        <div className="max-w-[1400px] w-full">{children}</div>
      </div>
      <LayoutFooter />
    </div>
  );
}
