import React from "react";
import { Link } from "react-router-dom";

export interface INextProduct {
  image: string;
  link: string;
  text: string;
  title: string;
}

type Props = {
  nextProduct: INextProduct[];
};

function NextProjects({ nextProduct }: Props) {
  return (
      <div className="p-5 md:p-24">
          <div className="flex justify-between">
              <div className="hidden md:flex">
                  <img src="/assets/left-arrows.png" className="w-6" alt="" />
                  <p className="font-bold ml-3">Previous project</p>
              </div>

              <div className="flex">
                  <p className="font-bold mr-3">Next project</p>
                  <img src="/assets/right-arrows.png" className="w-6" alt="" />
              </div>
          </div>
    <div className='flex justify-center md:justify-between mt-4'>
      {nextProduct.map((product, index) => (
        <Link to={product.link} key={product.link}>
          <li className={`md:flex flex-col bg-[#E9EBEC] w-[550px] ${index === nextProduct.length - 1 && 'hidden'}`}>
            <img src={product.image} className='w-full' alt="" />
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
      ))}
    </div>
    </div>

  );
}

export default NextProjects;
