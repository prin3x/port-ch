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

function Wallet({}: Props) {
  const firstPageCoverImage = {
    left: "/assets/YAKSRI_Head-Picture-2.png",
    middle: "/assets/YAKSRI_Head-Picture-1.png",
    right: "/assets/YAKSRI_Head-Picture-3.png",
  };

  const designElements: IDesignElement[] = [
    {
      image: "/assets/YAKSRI_Color-Palate.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/YAKSRI_Font.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
  ];

  const imageComponent = "/assets/YAKSRI_Components.png";
  const tabs: ITab[] = [
    {
      key: "1",
      title: "Home",
      lightImage: "/assets/ys-web-01.png",
    },
    {
      key: "2",
      title: "What is YAKSRI",
      lightImage: "/assets/ys-web-02.png",
    },
    {
      key: "3",
      title: "Overview",
      lightImage: "/assets/ys-web-03.png",
    },
    {
      key: "4",
      title: "Privilege",
      lightImage: "/assets/ys-web-04.png",
    },
    {
      key: "5",
      title: "Subscripe",
      lightImage: "/assets/ys-web-05.png",
    },
  ];

  const mobileTabs: ITab[] = [
    {
      key: "1",
      title: "Home",
      lightImage: "/assets/YAKSRI_Mobile_Home-",
    },
    {
      key: "2",
      title: "Top up",
      lightImage: "/assets/YAKSRI_Topup-",
    },
    {
      key: "3",
      title: "Payment gateway",
      lightImage: "/assets/YAKSRI_Payment-Gateway-",
    },
    {
      key: "4",
      title: "Pay",
      lightImage: "/assets/YAKSRI_Pay-",
    },
  ];

  const nextProduct: INextProduct[] = [
    {
      image: "/assets/booking-sm.png",
      link: "/projects/booking",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
    {
      image: "/assets/neramit-sm.png",
      link: "/projects/neramit",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
  ];

  return (
    <LayoutNavbar>
      <div className="container max-w-full custom-container overflow-hidden mt-14 sm:mt-0">
        <SoloFirstPageImage image="/assets/cover-wallet.png" />
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

export default Wallet;
