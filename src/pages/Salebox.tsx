import LayoutNavbar from "../navbar/LayoutNavbar";
import DesignElement, { IDesignElement } from "../projects/DesignElement";
import WebDesignIdea, { ITab } from "../projects/WebDesignIdea";
import FirstCoverDescriptionFuture from "../projects/FutureProject/FirstCoverDescriptionFuture";
import NextProjects, { INextProduct } from "../projects/NextProjects";
import ProjectGoals from "../projects/ProjectGoals";
import SoloFirstPageImage from "../projects/SoloFirstPageImage";

type Props = {};

function Bingo({}: Props) {
  const designElements: IDesignElement[] = [
    {
      image: "/assets/SALEBOX_Color-Palate.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/SALEBOX_Font.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
  ];

  const tabs: ITab[] = [
    {
      key: "1",
      title: "Home",
      lightImage: "/assets/sb-web-01.png",
    },
    {
      key: "2",
      title: "Solution",
      lightImage: "/assets/sb-web-02.png",
    },
    {
      key: "3",
      title: "Retail",
      lightImage: "/assets/sb-web-03.png",
    },
  ];

  const nextProduct: INextProduct[] = [
    {
      image: "/assets/wallet-sm.png",
      link: "/projects/wallet",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
    {
      image: "/assets/4king-sm.png",
      link: "/projects/4king ",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
  ];

  return (
    <LayoutNavbar>
      <div className="container max-w-full custom-container overflow-hidden  mt-14 sm:mt-0">
        <SoloFirstPageImage image="/assets/cover-salebox.png"/>
        <FirstCoverDescriptionFuture />
        <ProjectGoals />
        <DesignElement designElements={designElements} />
        <WebDesignIdea tabs={tabs} />
        <NextProjects nextProduct={nextProduct} />
      </div>
    </LayoutNavbar>
  );
}

export default Bingo;
