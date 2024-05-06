import { useCallback, useEffect, useRef, useState } from "react";

export default function MySlider() {
  const [isSlide, setIsSlide] = useState(false);
  const [mouse, setMouse] = useState({});

  const slider = useRef();

  useEffect(() => {
    const mouseDown = (evt) => {
      setIsSlide(true);

      setMouse({
        x: evt.clientX,
        scroll: slider.current.scrollLeft,
      });
    };

    const mouseMove = (evt) => {
      if (isSlide) {
        const x = mouse.x - evt.clientX;
        const data = mouse.scroll + x;
        slider.current.scrollLeft = data;
      }
    };

    const mouseUp = () => {
      setIsSlide(false);
    };

    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, [isSlide]);

  const items = ["1", "2"];

  return (
    <div className="w-full h-20 flex items-center">
      <div className="w-10">{"<"}</div>
      <div
        className="flex-1 flex flex-nowrap overflow-hidden h-full"
        ref={slider}
      >
        {items.map((e) => {
          return (
            <div className="w-full flex-[0_0_100%] bg-gray-400" key={e}>
              {e}
            </div>
          );
        })}
      </div>

      <div className="w-10">{">"}</div>
    </div>
  );
}
