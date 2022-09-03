import React, { ReactElement, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  children: ReactElement;
}

function LayoutNavbar({ children }: Props) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="absolute top-0 w-full z-50">
      <div className="hidden md:flex  w-full justify-between">
        <div className="left-div">
          <NavLink to="/">
            <button className="w-40 h-40 rounded-full bg-[#B8C6C2] -mt-24 pt-24">
              <span className="text-[#000]">Amita</span>
            </button>
          </NavLink>
        </div>
        <div className="center-div flex translate-x-[-55px]">
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <div className="font-[16px] mt-[26px] mr-6 text-black">About</div>
          </NavLink>
          <NavLink to="/projects" style={{ textDecoration: "none" }}>
            <div className="font-[16px] mt-[26px] ml-6 text-black">
              Projects
            </div>
          </NavLink>
        </div>
        <div className="right-div">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <div className="font-[16px] mt-[26px] mr-6 text-black">
              Get in touch
            </div>
          </NavLink>
        </div>
      </div>
      <div
        className={`z-50 sm:h-14 fixed md:hidden flex w-full justify-between ease-linear	`}
        style={{backgroundColor: navbarOpen ? "#B8C6C2" : "#fff"}}
      >
        <button className={`w-24 h-24 rounded-full bg-white -mt-10 pt-7 ease-linear	`}>
          <span className="text-[#668D86]">Amita</span>
        </button>
        <div
          onClick={toggleNavbar}
          className="space-y-2 p-4 sm:pr-6 cursor-pointer"
        >
          <span className="block w-8 h-0.5 bg-black shadow-lg"></span>
          <span className="block w-6 h-0.5 bg-black shadow-lg"></span>
          <span className="block w-4 h-0.5 bg-black shadow-lg"></span>
        </div>
      </div>
      <nav
        className={`z-40 sticky top-0 w-full md:hidden md:w-auto h-screen  bg-[#B8C6C2] ${
          navbarOpen ? "block" : "hidden"
        }`}
        id="navbar"
      >
        <ul className="mx-auto h-full flex flex-col p-4 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className="mt-auto">
            <div className="text-[#668D86] text-[28px] text-center">Menu</div>
          </li>
          <li className="mt-10 w-fit mx-auto">
            <NavLink
              to="/"
              className="text-[36px] hover:text-white text-center block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li className="mt-10 w-fit mx-auto">
            <NavLink
              to="/about"
              className="text-[36px] hover:text-white text-center block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white"
            >
              About
            </NavLink>
          </li>
          <li className="mt-10 w-fit mx-auto mb-auto">
            <NavLink
              to="/projects"
              className="text-[36px] hover:text-white text-center block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white"
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
}

export default LayoutNavbar;
