import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  designElements: IDesignElement[];
};

export interface IDesignElement {
  image: string;
  description: string;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function DesignElement({ designElements }: Props) {
  return (
    <div className="p-5 md:p-24">
      <p className="font-light text-[16px]">DIGITAL INFRA NETWORK</p>
      <h2 className="font-bold text-[48px] leading-tight">Design Elements</h2>
      {/* <div className="grid grid-cols-3 mt-10 gap-36"> */}
        <Carousel responsive={responsive}>
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
        </Carousel>
      {/* </div> */}
    </div>
  );
}

export default DesignElement;
