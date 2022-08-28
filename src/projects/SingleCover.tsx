import React from "react";

type Props = {
  cover: string;
};

function SingleCover({ cover }: Props) {
  return (
    <div className="p-5 h-[700px] relative w-full">
      <img
        src={cover}
        alt=""
        className="h-[630px] absolute centered-axis-x top-[50%] "
      />
    </div>
  );
}

export default SingleCover;
