import React, { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactElement;
}

function LayoutNavbar({ children }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="absolute top-0 w-full z-50">
      <div className="flex  w-full justify-between">
        <div className="left-div">
          <Link to="/">
            <img src="/assets/Ellipse_2.png" alt="el" className="" />
          </Link>
        </div>
        <div className="center-div flex translate-x-[-55px]">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <div className="font-[16px] mt-[26px] mr-6 text-black">About</div>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <div className="font-[16px] mt-[26px] ml-6 text-black">
              Projects
            </div>
          </Link>
        </div>
        <div className="right-div">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="font-[16px] mt-[26px] mr-6 text-black">
              Get in touch
            </div>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}

export default LayoutNavbar;
