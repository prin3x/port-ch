import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function ProjectList({}: Props) {
  return (
    <div className="px-0 md:px-20 pt-5">
      <p>My work</p>
      <div className="flex drop-shadow-md">
        <h3 className="text-[48px] font-bold uppercase">Projects &nbsp;</h3>
      </div>
      <div className="flex drop-shadow-md my-5">
        <h3 className="text-[30px] font-bold">Blockchain &nbsp;</h3>
        <span className="flex-grow border-b border-black mb-4"></span>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/projects/exchange">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/exchange-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Web3 and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Cryptocurrency exchange platform
              </h3>
            </div>
          </li>
        </Link>
        <Link to="/projects/future">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/future-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Web3 and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Hongkong future trade platform
              </h3>
            </div>
          </li>
        </Link>
        <Link to="/projects/exchange">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/binary-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Website and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Hongkong binary trade platform
              </h3>
            </div>
          </li>
        </Link>
        <Link to="/projects/defi">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/defi-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Website and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Decentralize Finance and ACT token
              </h3>
            </div>
          </li>
        </Link>
        <Link to="/projects/exchange">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/game-fi-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Website and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Game - Defi pay to earn
              </h3>
            </div>
          </li>
        </Link>
        <Link to="/projects/exchange">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/bingo-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Website and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Hongkong binary trade platform
              </h3>
            </div>
          </li>
        </Link>
      </ul>

      <div className="flex drop-shadow-md my-5">
        <h3 className="text-[30px] font-bold">Restaurant &nbsp;</h3>
        <span className="flex-grow border-b border-black mb-4"></span>
      </div>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Link to="/projects/exchange">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/booking-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Website and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Daruma sushi application
              </h3>
            </div>
          </li>
        </Link>
        <Link to="/projects/exchange">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/pos-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Website and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Salebox Point of sale (POS)
              </h3>
            </div>
          </li>
        </Link>
        <Link to="/projects/exchange">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/salebox-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Website and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Salebox company website
              </h3>
            </div>
          </li>
        </Link>
      </ul>

      <div className="flex drop-shadow-md my-5">
        <h3 className="text-[30px] font-bold">Other &nbsp;</h3>
        <span className="flex-grow border-b border-black mb-4"></span>
      </div>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Link to="/projects/exchange">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/4king-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Website and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Decentralize Finance and ACT token
              </h3>
            </div>
          </li>
        </Link>
        <Link to="/projects/exchange">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/wallet-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Website and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Yaksri wallet
              </h3>
            </div>
          </li>
        </Link>
        <Link to="/projects/exchange">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/neramit-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Website and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Neramit company website
              </h3>
            </div>
          </li>
        </Link>
        <Link to="/projects/exchange">
          <li className="flex flex-col bg-[#E9EBEC] w-[401px]">
            <img src="/assets/charity-sm.png" alt="" />
            <div className="w-full p-6">
              <p className="text-[#8C8C8C] text-sm">
                Website and mobile application
              </p>
              <h3 className="text-[18px] font-semibold text-black">
                Charity and donation website
              </h3>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default ProjectList;
