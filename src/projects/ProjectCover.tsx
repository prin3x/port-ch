import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../icon/RightArrow";

type Props = {};

function ProjectCover({}: Props) {
  return (
    <section>
      <div
        className="exchange min-h-[60vh] relative bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/assets/project-green-bg.png)" }}
      />
      <div
        className="exchange min-h-screen h-[140vh] relative w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/assets/exchange.png)" }}
      >
        <div className="relative min-w-[20rem] flex flex-col items-centermd:h-auto font-bold text-[64px] md:text-[179px] text-white uppercase centered-axis-x drop-shadow-xl top-[39%]">
          EXCHANGE
          <Link to="/projects/exchange">
            <button
              type="button"
              style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              className="flex items-center gap-3 bottom-0 text-white text-[24px] border border-zinc-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <span>Explore</span> <RightArrow />
            </button>
          </Link>
        </div>
      </div>

      <div
        className="exchange min-h-screen h-[140vh] relative w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/assets/future.png)" }}
      >
        <div className="relative min-w-[20rem] flex flex-col items-center md:h-auto font-bold  text-[64px] md:text-[179px] text-white uppercase centered-axis-x drop-shadow-xl top-[39%]">
          FUTURE
          <Link to="/projects/future">
            <button
              type="button"
              style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              className="flex items-center gap-3 bottom-0 text-white text-[24px] border border-zinc-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <span>Explore</span> <RightArrow />
            </button>
          </Link>
        </div>
      </div>

      <div
        className="exchange min-h-screen h-[140vh] relative w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/assets/binary.png)" }}
      >
        <div className="relative min-w-[20rem] flex flex-col items-center md:h-auto font-bold  text-[64px] md:text-[179px] text-white uppercase centered-axis-x drop-shadow-xl top-[39%]">
          BINARY
          <Link to="/projects/binary">
            <button
              type="button"
              style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              className="flex items-center gap-3 bottom-0 text-white text-[24px] border border-zinc-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <span>Explore</span> <RightArrow />
            </button>
          </Link>
        </div>
      </div>

      <div
        className="exchange min-h-screen h-[140vh] relative w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/assets/game-fi.png)" }}
      >
        <div className="relative min-w-[20rem] flex flex-col items-center md:h-auto font-bold  text-[64px] md:text-[179px] text-white uppercase centered-axis-x drop-shadow-xl top-[39%]">
          GAME FI
          <Link to="/projects/game-fi">
            <button
              type="button"
              style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              className="flex items-center gap-3 bottom-0 text-white text-[24px] border border-zinc-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <span>Explore</span> <RightArrow />
            </button>
          </Link>
        </div>
      </div>

      <div
        className="exchange min-h-screen h-[140vh] relative w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/assets/bingo.png)" }}
      >
        <div className="relative min-w-[20rem] flex flex-col items-center md:h-auto font-bold  text-[64px] md:text-[179px] text-white uppercase centered-axis-x drop-shadow-xl top-[39%]">
          BINGO
          <Link to="/projects/bingo">
            <button
              type="button"
              style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              className="flex items-center gap-3 bottom-0 text-white text-[24px] border border-zinc-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <span>Explore</span> <RightArrow />
            </button>
          </Link>
        </div>
      </div>

      <div
        className="exchange min-h-screen h-[140vh] relative w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/assets/defi.png)" }}
      >
        <div className="relative min-w-[20rem] flex flex-col items-center md:h-auto font-bold  text-[64px] md:text-[179px] text-white uppercase centered-axis-x drop-shadow-xl top-[39%]">
          DEFI
          <Link to="/projects/defi">
            <button
              type="button"
              style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              className="flex items-center gap-3 bottom-0 text-white text-[24px] border border-zinc-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <span>Explore</span> <RightArrow />
            </button>
          </Link>
        </div>
      </div>

      <div
        className="exchange min-h-screen h-[140vh] relative w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/assets/daruma.png)" }}
      >
        <div className="relative min-w-[20rem] flex flex-col items-center md:h-auto font-bold  text-[64px] md:text-[179px] text-white uppercase centered-axis-x drop-shadow-xl top-[39%]">
          BOOKING
          <Link to="/projects/booking">
            <button
              type="button"
              style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              className="flex items-center gap-3 bottom-0 text-white text-[24px] border border-zinc-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <span>Explore</span> <RightArrow />
            </button>
          </Link>
        </div>
      </div>

      <div
        className="exchange min-h-screen h-[140vh] relative w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/assets/4KING.png)" }}
      >
        <div className="relative min-w-[20rem] flex flex-col items-center md:h-auto font-bold  text-[64px] md:text-[179px] text-white uppercase centered-axis-x drop-shadow-xl top-[39%]">
          4KING
          <Link to="/projects/4king">
            <button
              type="button"
              style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              className="flex items-center gap-3 bottom-0 text-white text-[24px] border border-zinc-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <span>Explore</span> <RightArrow />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectCover;
