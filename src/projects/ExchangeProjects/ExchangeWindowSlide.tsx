import React, { useEffect, useRef, useState } from "react";

type Props = {};

const WIDTH_CONSTANTS = 1000;

function ExchangeWindowSlide({}: Props) {
  const [mousePosX, setMousePosX] = useState(0);
  const handlerRef = useRef<any>();
  const [initSlide, setInitSlide] = useState(true);
  const [isSliding, setIsSliding] = useState(false);
  const [widthConstants, setWidthConstants] = useState(WIDTH_CONSTANTS)

  function findCursurPositionOnTarget(e: any) {
    e.preventDefault();
    if (!isSliding) return;
    const rect = (handlerRef.current as any).getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.

    setMousePosX(x);
  }

  const toggleSliding = () => {
    if (!isSliding) {
      setInitSlide(false);
      return setIsSliding(true);
    }
    setIsSliding(false);
  };

  useEffect(() => {
   if(typeof window !== 'undefined'){
    if(window.innerWidth < 821){
      setWidthConstants(700)
    }

    if(window.innerWidth < 450){
      setWidthConstants(300)
    }
   }
  },[window])

  return (
    <div className="p-5 h-[350px] sm:h-[700px] relative w-full" onClick={toggleSliding}>
      <div className="absolute centered-axis-x top-[50%] flex justify-around">
        <img
          src="/assets/EXCHANGE_Head-Picture-Dark-2.png"
          alt=""
          className="hidden sm:h-[430px]"
        />
        <img src="/assets/White_Hero2.png" alt="" className=" hidden sm:h-[430px]" />
      </div>
      <div
        className={`window-slide relative h-[300px] sm:h-[600px] mx-auto block`} 
        style={{ width: `${widthConstants}px` }}
        onMouseMove={findCursurPositionOnTarget}
      >
        <img
          src="/assets/EXCHANGE_Head-Picture-Dark-1.png"
          alt=""
          className={`h-[300px] sm:h-[600px] z-30 absolute`}
          style={{ width: `${widthConstants}px` }}
        />
        <img
          src="/assets/EXCHANGE_Head-Picture-White-1.png"
          style={{
            width: `${widthConstants}px`,
            clipPath: `polygon(${
              initSlide ? "50" : (mousePosX / widthConstants) * 100
            }% 0%, ${
              initSlide ? "50" : (mousePosX / widthConstants) * 100
            }% 100%, 100% 100%, 100% 0%)`,
          }}
          alt=""
          className={`ex-clip h-[300px] sm:h-[600px] w-[${widthConstants}px] z-30 absolute`}
          ref={handlerRef}
        />
        <img
          src="/assets/Handle_Icon.png"
          alt=""
          className="z-30 absolute top-[45%] sm:top-[40%] w-10 cursor-pointer"
          style={{
            transform: `translateX(${
              initSlide ? widthConstants / 2 - 20 : mousePosX - 20
            }px)`,
          }}
          onMouseDown={toggleSliding}
          onMouseUp={toggleSliding}
          onClick={toggleSliding}
        />
      </div>
    </div>
  );
}

export default ExchangeWindowSlide;
