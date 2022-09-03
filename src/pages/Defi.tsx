import LayoutNavbar from "../navbar/LayoutNavbar";
import DesignElement, { IDesignElement } from "../projects/DesignElement";
import WebDesignIdea, { ITab } from "../projects/WebDesignIdea";
import FirstCoverDescriptionFuture from "../projects/FutureProject/FirstCoverDescriptionFuture";
import NextProjects, { INextProduct } from "../projects/NextProjects";
import ProjectGoals from "../projects/ProjectGoals";
import ProjectComps from "../projects/ProjectComps";
import SoloFirstPageImage from "../projects/SoloFirstPageImage";

type Props = {};

function Defi({}: Props) {
  const designElements: IDesignElement[] = [
    {
      image: "/assets/ACT_Color-Palate.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/ACT_Font.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/act-logo.png",
      description:
        " ออกแบบ Loading โดยเน้นการเคลื่อนไหวแบบมีเส้นสายนำสายตาให้มีความสอดคล้องกับ Logo และ Interior ของออฟฟิศ",
    },
  ];

  const imageComponent = "/assets/ACT_Components.png";

  const tabs: ITab[] = [
    {
      key: "1",
      title: "Home",
      lightImage: "/assets/act-web-01.png",
    },
    {
      key: "2",
      title: "Farm",
      lightImage: "/assets/act-web-02.png",
    },
    {
      key: "3",
      title: "My contract",
      lightImage: "/assets/act-web-03.png",
    },
    {
      key: "4",
      title: "Vote",
      lightImage: "/assets/act-web-04.png",
    },
    {
      key: "5",
      title: "Auction",
      lightImage: "/assets/act-web-05.png",
    },
  ];

  const nextProduct: INextProduct[] = [
    {
      image: "/assets/binary-sm.png",
      link: "/projects/binary",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
    {
      image: "/assets/game-fi-sm.png",
      link: "/projects/game-fi",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
  ];

  return (
    <LayoutNavbar>
      <div className="container max-w-full custom-container overflow-hidden   mt-14 sm:mt-0">
        <SoloFirstPageImage image='/assets/act-cover.png' />
        <FirstCoverDescriptionFuture />
        <ProjectGoals />
        <DesignElement designElements={designElements} />
        <ProjectComps imageComponent={imageComponent} />
        <WebDesignIdea tabs={tabs} />
        <NextProjects nextProduct={nextProduct} />
      </div>
    </LayoutNavbar>
  );
}

export default Defi;
