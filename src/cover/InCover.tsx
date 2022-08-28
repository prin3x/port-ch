import React from "react";

type Props = {};

function InCover({}: Props) {
  return (
    <div className="flex w-full relative">
      {/* <img src="/assets/Ellipse_2.png" alt="el" className="absolute" /> */}
      <section className="w-[50%] min-h-screen relative pb-20">
        {/* <div className="absolute right-0 top-0 font-[16px] mt-[26px] mr-6">
          About
        </div> */}
        <div className="intro-box mx-auto block max-w-[600px] mt-36">
          <h1 className="text-[76px] font-semibold uppercase drop-shadow-md leading-[76px]">
            AMITA TOMASA
          </h1>
          <h2 className="text-[76px] font-regular drop-shadow-md leading-[76px]">
            <span className="text-[#668D86]">U</span>
            X/
            <span className="text-[#668D86]">U</span>I Designer
          </h2>
          <div className="info flex mt-5 flex-wrap">
            <p>
              Email :
              <span className="text-[#8C8C8C]">amita.tomasa@gmail.com</span>
            </p>
            <p className="ml-5">
              Contact :<span className="text-[#8C8C8C]">0852558855</span>
            </p>
            <p>
              Address :
              <span className="text-[#8C8C8C]">
                188/136 watcharapol saimai bangkok 10220
              </span>
            </p>
            <p>
              Graduated 2018 :
              <span className="text-[#8C8C8C]">
                Suranaree University of technology (GPAX 3.20)
              </span>
            </p>
          </div>
          <div className="flex  drop-shadow-md ">
            <h3 className="text-[48px] mt-16">Works &nbsp;</h3>
          </div>

          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Bitnance Co., Ltd Feb 2021 - Now
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                UX/UI Designer & Product Owner
              </h3>
              <ul className="list-disc ml-4">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Reserching & Designing work flow about fintech
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Creating prototype/ci with figma
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Thinking marketing strategy direction
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Creating team strategy
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Giving task
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Collecting feedback
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Improving UX/UI
                </li>
              </ul>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Naremit Innovation Co., Ltd 2019 - 2020
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                UX/UI Designer & Graphic Designer
              </h3>
              <ul className="list-disc ml-4">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Reserching & Designing work flow about resteraung/pos
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Creating prototype
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Designing socail media banner
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Designing press, proprosal, bussiness card, boot backdrop
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Designing video motion graphic marketing
                </li>
              </ul>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                JobExpress Co., Ltd 2019
              </time>
              <ul className="list-disc ml-4">
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  UI Designer & Graphic Designer
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Improving UI job seeker website
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Designing email with mail chimp
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Designing socail media banner following ci
                </li>
                <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Designing press, proprosal, bussiness card
                </li>
              </ul>
            </li>
          </ol>

          <div className="flex  drop-shadow-md ">
            <h3 className="text-[48px] mt-16">Skill &nbsp;</h3>
            <span className="flex-grow border-b border-black mb-8"></span>
          </div>
          <div className="flex gap-20">
            <div className="skill-tree">
              <h5 className="text-[22px] text-[#668D86] mt-2 block w-fit-content">
                Design
              </h5>
              <ul className="list-disc ml-4">
                <li className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                  Pixel design
                </li>
                <li className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                  Adobe master
                </li>
                <li className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                  Visual design
                </li>
                <li className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                  Branding
                </li>
                <li className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                  Design thinking
                </li>
              </ul>
            </div>
            <div className="skill-tree">
              <h5 className="text-[22px] text-[#668D86] mt-2  block w-fit-content">
                Investment
              </h5>
              <ul className="list-disc ml-4">
                <li className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                  Pixel design
                </li>
                <li className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                  Adobe master
                </li>
              </ul>
            </div>
            <div className="skill-tree">
              <h5 className="text-[22px] text-[#668D86] mt-2  block w-fit-content">
                Language
              </h5>
              <ul className="list-disc ml-4">
                <li className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                  Pixel design
                </li>
                <li className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                  Adobe master
                </li>
              </ul>
            </div>
          </div>

          <div className="flex drop-shadow-md">
            <h3 className="text-[48px] mt-16">Toolbox &nbsp;</h3>
            <span className="flex-grow border-b border-black mb-8"></span>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <div className="w-[35px] h-[35px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[16px] text-[#668D86] mt-2">Adobe</h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[35px] h-[35px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[16px] text-[#668D86] mt-2">Figma</h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[35px] h-[35px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[16px] text-[#668D86] mt-2">Sketch</h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[35px] h-[35px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[16px] text-[#668D86] mt-2">XD</h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[35px] h-[35px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[16px] text-[#668D86] mt-2">Lottie</h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[35px] h-[35px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[16px] text-[#668D86] mt-2">Hotjar</h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[35px] h-[35px] rounded-md bg-[#B8C6C2]"></div>
              <h5 className="text-[16px] text-[#668D86] mt-2">GG pixel</h5>
            </div>
          </div>

          <div className="flex drop-shadow-md">
            <span className="flex-grow border-b border-black mb-8 mr-5"></span>
            <button className="border border-[#668D86] bg-transparent w-[200px] h-[60px] rounded-md text-[#668D86] text-[24px] mt-10">
              Hire Me!
            </button>
            <span className="flex-grow border-b border-black mb-8 ml-5"></span>
          </div>
        </div>
      </section>

      <section className="w-[50%] min-h-screen relative bg-[#F7F7F9] h-fit">
        <img
          src="/assets/incover.png"
          alt="in-cover"
          className="w-[95%] block ml-auto"
        />
      </section>
    </div>
  );
}

export default InCover;
