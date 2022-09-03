import React from "react";

type Props = {};

function Cover({}: Props) {
  return (
    <div className="flex w-full relative">
      <section className="w-[100%] md:w-[50%]  min-h-screen relative pb-20">
        <img
          src="/assets/cover-right-bg.png"
          alt="el"
          className="md:hidden block ml-auto"
        />
        <div className="intro-box relative -mt-64  pt-5 px-10 mx-auto block max-w-[600px] md:mt-36 text-center md:text-left">
          <div className="md:-hidden absolute top-0 opacity-20 w-full h-56 bg-gradient-to-b to-white"></div>
          <h1 className="z-40 text-[32px] md:text-[76px] font-semibold uppercase drop-shadow-md leading-[32px] md:leading-[76px]">
            AMITA TOMASA
          </h1>
          <h2 className="z-40 text-[32px] md:text-[76px] font-regular drop-shadow-md  leading-[32px] md:leading-[76px]">
            <span className="text-[#668D86]">U</span>
            X/
            <span className="text-[#668D86]">U</span>I Designer
          </h2>
          <div className="z-40 flex">
            <p className="z-40 text-center md:text-left mt-7">
              Hi! I’m a UX/UI Designer and Product manager &nbsp;
            </p>
            <span className="hidden md:block flex-grow border-b border-black mb-2"></span>
          </div>
          <p className="z-40 text-center md:text-left mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="z-40 bg-[#668D86] w-[200px] h-[60px] rounded-md text-white shadow-xl text-[24px]">
            Explore
          </button>

          <div className="flex  drop-shadow-md ">
            <h3 className="text-[48px] mt-16">Highlight &nbsp;</h3>
            <span className="flex-grow border-b border-black mb-8"></span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-[40px] h-[40px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[22px] text-[#668D86] mt-2">Blockchain</h5>
              <p className="text-[14px] text-[#333333]">
                Thorough research and an optimized strategy are the foundation
                for the best product development.
              </p>
            </div>
            <div className="flex flex-col  items-center md:items-start">
              <div className="w-[40px] h-[40px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[22px] text-[#668D86] mt-2">Exchange</h5>
              <p className="text-[14px] text-[#333333]">
                Thorough research and an optimized strategy are the foundation
                for the best product development.
              </p>
            </div>
            <div className="flex flex-col  items-center md:items-start">
              <div className="w-[40px] h-[40px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[22px] text-[#668D86] mt-2">Fufure/Binary</h5>
              <p className="text-[14px] text-[#333333]">
                Thorough research and an optimized strategy are the foundation
                for the best product development.
              </p>
            </div>
            <div className="flex flex-col  items-center md:items-start">
              <div className="w-[40px] h-[40px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[22px] text-[#668D86] mt-2">Defi</h5>
              <p className="text-[14px] text-[#333333]">
                Thorough research and an optimized strategy are the foundation
                for the best product development.
              </p>
            </div>
            <div className="flex flex-col  items-center md:items-start">
              <div className="w-[40px] h-[40px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[22px] text-[#668D86] mt-2">Game-Fi</h5>
              <p className="text-[14px] text-[#333333]">
                Thorough research and an optimized strategy are the foundation
                for the best product development.
              </p>
            </div>
            <div className="flex flex-col  items-center md:items-start">
              <div className="w-[40px] h-[40px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[22px] text-[#668D86] mt-2">POS</h5>
              <p className="text-[14px] text-[#333333]">
                Thorough research and an optimized strategy are the foundation
                for the best product development.
              </p>
            </div>
          </div>
          <button className="border border-[#668D86] bg-transparent w-[200px] h-[60px] rounded-md text-[#668D86] text-[24px] mt-10">
            Hire Me!
          </button>
        </div>
      </section>

      <section className="hidden md:block md:w-[50%] min-h-screen relative bg-[#F7F7F9]">
        <div className="logo absolute top-[168px] -left-16 z-50">
          <img src="/assets/3years.png" alt="" className="w-[131px]" />
        </div>
        <img
          src="/assets/cover-right-bg.png"
          alt="el"
          className="w-[95%] block ml-auto"
        />
      </section>
    </div>
  );
}

export default Cover;
