export interface IFirstPageProps {
    image: string;
  }
  
  function SoloFirstPageImage({ image }: IFirstPageProps) {
    return (
      <div className="md:p-14 w-full">
        <img
          src={image}
          alt=""
          className="block mx-auto"
        />
      </div>
    );
  }
  
  export default SoloFirstPageImage;
  