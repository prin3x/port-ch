import React, { useEffect, useRef, useState } from "react";

type Props = {};

const WIDTH_CONSTANTS = 1000;

function VersionWindowSlide({}: Props) {
  const [mousePosX, setMousePosX] = useState(0);
  const handlerRef = useRef<any>();
  const [initSlide, setInitSlide] = useState(true);
  const [isSliding, setIsSliding] = useState(false);

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

  return (
    <div className="p-24">
      <div className="flex items-center">
        <h2 className="font-bold text-[48px] leading-tight flex-2">
          Version 1.0 & 2.0
        </h2>
        <p className="flex-1 ml-20 text-[16px]">
          Version 2.0 ปรับเปลี่ยนการออกแบบ UI ให้ทันสมันขึ้น เพิ่ม Dark
          Modegเข้ามา เน้นใช้ไอคอนและรูปภาพ 3D สร้างมิติให้กับแพลตฟอร์ม
          เนื่องจาก Primary Color ของเว็บไซต์คือสีขาวและเหลืองทำให้ขาด Mood&Tone
          ของ Fainancail จึงเป็นที่มาของการพัฒนา
        </p>
      </div>
      <div className="h-[700px] relative w-full mt-10" onClick={toggleSliding}>
        <div className="absolute centered-axis-x top-[50%] flex justify-around">
          <img
            src="/assets/EXCHANGE_Head-Picture-Dark-2.png"
            alt=""
            className="h-[430px]"
          />
          <img src="/assets/White_Hero2.png" alt="" className="h-[430px]" />
        </div>
        <div
          className={`window-slide relative h-[600px] mx-auto block`}
          style={{ width: `${WIDTH_CONSTANTS}px` }}
          onMouseMove={findCursurPositionOnTarget}
        >
          <img
            src="/assets/Exchange_Landing_v1.png"
            alt=""
            className="h-[600px] w-[WIDTH_CONSTANTSpx] z-40 absolute"
            style={{ width: `${WIDTH_CONSTANTS}px` }}
          />
          <img
            src="/assets/Exchange_Landing_v2.png"
            style={{
              width: `${WIDTH_CONSTANTS}px`,
              clipPath: `polygon(${
                initSlide ? "50" : (mousePosX / WIDTH_CONSTANTS) * 100
              }% 0%, ${
                initSlide ? "50" : (mousePosX / WIDTH_CONSTANTS) * 100
              }% 100%, 100% 100%, 100% 0%)`,
            }}
            alt=""
            className={`ex-clip h-[600px] w-[${WIDTH_CONSTANTS}px] z-40 absolute`}
            ref={handlerRef}
          />
          <img
            src="/assets/Handle_Icon.png"
            alt=""
            className="z-40 absolute top-[40%] w-10 cursor-pointer"
            style={{
              transform: `translateX(${
                initSlide ? WIDTH_CONSTANTS / 2 - 20 : mousePosX - 20
              }px)`,
            }}
            onMouseDown={toggleSliding}
            onMouseUp={toggleSliding}
            onClick={toggleSliding}
          />
        </div>
      </div>
    </div>
  );
}

export default VersionWindowSlide;
