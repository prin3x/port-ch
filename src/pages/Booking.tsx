import LayoutNavbar from "../navbar/LayoutNavbar";
import DesignElement, { IDesignElement } from "../projects/DesignElement";
import WebDesignIdea, { ITab } from "../projects/WebDesignIdea";
import FirstCoverDescriptionFuture from "../projects/FutureProject/FirstCoverDescriptionFuture";
import NextProjects, { INextProduct } from "../projects/NextProjects";
import ProjectGoals from "../projects/ProjectGoals";
import ProjectComps from "../projects/ProjectComps";
import MobileIdea from "../projects/MobileIdea";
import SoloFirstPageImage from "../projects/SoloFirstPageImage";

type Props = {};

function Booking({}: Props) {

  const designElements: IDesignElement[] = [
    {
      image: "/assets/DARUMA_Color-Palate.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/DARUMA_Font.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
  ];

  const imageComponent = "/assets/DARUMA_Components.png";

  const tabs: ITab[] = [
    {
      key: "1",
      title: "Landing",
      lightImage: "/assets/landing-daruma.png",
    },
  ];

  const nextProduct: INextProduct[] = [
    {
      image: "/assets/bingo-sm.png",
      link: "/projects/bingo",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
    {
      image: "/assets/pos-sm.png",
      link: "/projects/pos",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
  ];

  const mobileTabs: ITab[] = [
    {
      key: "1",
      title: "Buy & Check in",
      lightImage: "/assets/DARUMA_Mobile-",
    },
  ];


  return (
    <LayoutNavbar>
      <div className="container  max-w-full custom-container overflow-hidden">
        <SoloFirstPageImage image={"/assets/daruma-cover.png"}/>
        <FirstCoverDescriptionFuture />
        <ProjectGoals />
        <DesignElement designElements={designElements} />
        <ProjectComps imageComponent={imageComponent} />
        <WebDesignIdea tabs={tabs} />
        <MobileIdea tabs={mobileTabs} />
        <NextProjects nextProduct={nextProduct} />
      </div>
    </LayoutNavbar>
  );
}

export default Booking;
