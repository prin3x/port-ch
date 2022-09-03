import React from "react";
import LayoutNavbar from "../navbar/LayoutNavbar";
import DesignElement, { IDesignElement } from "../projects/DesignElement";
import WebDesignIdea, { ITab } from "../projects/WebDesignIdea";
import FirstPageImageCover from "../projects/FirstPageImageCover";
import FirstCoverDescriptionFuture from "../projects/FutureProject/FirstCoverDescriptionFuture";
import NextProjects, { INextProduct } from "../projects/NextProjects";
import ProjectGoals from "../projects/ProjectGoals";
import ProjectComps from "../projects/ProjectComps";
import MobileIdea from "../projects/MobileIdea";

type Props = {};

function Charity({}: Props) {
  const firstPageCoverImage = {
    left: "/assets/1577_Head-Picture-2.png",
    middle: "/assets/1577_Head-Picture-1.png",
    right: "/assets/1577_Head-Picture-3.png",
  };

  const designElements: IDesignElement[] = [
    {
      image: "/assets/charity-color-palate.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/charity_font.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
  ];

  const imageComponent = "/assets/1577_Components.png";
  const tabs: ITab[] = [
    {
      key: "1",
      title: "Home",
      lightImage: "/assets/1577_Home-1.png",
    },
    {
      key: "2",
      title: "Event",
      lightImage: "/assets/1577_Home-2.png",
    },
    {
      key: "3",
      title: "Donatoin",
      lightImage: "/assets/1577_Home-3.png",
    },
  ];

  const mobileTabs: ITab[] = [
    {
      key: "1",
      title: "Content",
      lightImage: "/assets/1577_Back-Office_Content-",
    },
    {
      key: "2",
      title: "Event",
      lightImage: "/assets/1577_Back-Office_Event-",
    },
    {
      key: "3",
      title: "Banner",
      lightImage: "/assets/1577_Back-Office_Banner-",
    },
  ];

  const nextProduct: INextProduct[] = [
    {
      image: "/assets/pos-sm.png",
      link: "/projects/pos",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
    {
      image: "/assets/exchange-sm.png",
      link: "/projects/exchange",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
  ];

  return (
    <LayoutNavbar>
      <div className="container max-w-full custom-container overflow-hidden">
        <FirstPageImageCover {...firstPageCoverImage} />
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

export default Charity;
