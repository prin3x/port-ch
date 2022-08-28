import React from "react";

type Props = {
  designElements: IDesignElement[];
};

export interface IDesignElement {
  image: string;
  description: string;
}

function DesignElement({ designElements }: Props) {
  return (
    <div className="p-24">
      <p className="font-light text-[16px]">DIGITAL INFRA NETWORK</p>
      <h2 className="font-bold text-[48px] leading-tight">Design Elements</h2>
      <div className="grid grid-cols-3 mt-10 gap-36">
        {designElements.map((d) => (
          <div className="color flex flex-col" key={d.image}>
            <div className="min-h-[440px] pb-10">
              <img
                src={d.image}
                alt="Color-Palate"
                className="max-w-[345px]"
              />
            </div>
            <p>{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignElement;
