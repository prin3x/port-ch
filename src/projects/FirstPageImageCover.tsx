export interface IFirstPageProps {
  left: string;
  middle: string;
  right: string;
}

function FirstPageImageCover({ left, middle, right }: IFirstPageProps) {
  return (
    <div className="p-5 h-[700px] relative w-full">
      <img
        src={left}
        alt=""
        className="h-[430px] absolute centered-axis-x-25 top-[50%] "
      />
      <img
        src={right}
        alt=""
        className="h-[430px] absolute centered-axis-x-75 top-[50%] "
      />
      <img
        src={middle}
        alt=""
        className="h-[630px] absolute centered-axis-x top-[50%] "
      />
    </div>
  );
}

export default FirstPageImageCover;
