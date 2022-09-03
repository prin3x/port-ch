import React from "react";

type Props = {
  imageComponent: string;
};

function ProjectComps({imageComponent}: Props) {
  return (
    <div className="bg-[#E9EBEC]">
      <div className="p-5 md:p-24">
        <p className="font-light text-[16px]">DESIGN</p>
        <h2 className="font-bold text-[48px] leading-tight">Components</h2>
        <img src={imageComponent} alt="" />
      </div>
    </div>
  );
}

export default ProjectComps;
