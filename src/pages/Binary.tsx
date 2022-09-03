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

function Binary({}: Props) {
  const firstPageCoverImage = {
    left: "/assets/2TICK_Head-Picture-2.png",
    middle: "/assets/2TICK_Head-Picture-1.png",
    right: "/assets/2TICK_Head-Picture-3.png",
  };

  const designElements: IDesignElement[] = [
    {
      image: "/assets/2TICK_Color-Palate.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/2TICK_Font.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/binary-cos.png",
      description:
        " ออกแบบ Loading โดยเน้นการเคลื่อนไหวแบบมีเส้นสายนำสายตาให้มีความสอดคล้องกับ Logo และ Interior ของออฟฟิศ",
    },
  ];

  const imageComponent = "/assets/2TICK_Components.png";
  const tabs: ITab[] = [
    {
      key: "1",
      title: "Binary",
      lightImage: "/assets/2TICK_Binary.png",
    },
    {
      key: "2",
      title: "Future",
      lightImage: "/assets/2TICK_Future.png",
    },
    {
      key: "3",
      title: "Landing",
      lightImage: "/assets/2TICK_Landing.png",
    },
    {
      key: "4",
      title: "Dashboard",
      lightImage: "/assets/2TICK_Dashboard.png",
    },
    {
      key: "5",
      title: "Deposit",
      lightImage: "/assets/2TICK_Deposit.png",
    },
  ];

  const mobileTabs: ITab[] = [
    {
      key: "1",
      title: "Binary",
      lightImage: "/assets/2TICK_Trade-",
    },
    {
      key: "2",
      title: "Future",
      lightImage: "/assets/2TICK_Future-",
    },
    {
      key: "3",
      title: "Other",
      lightImage: "/assets/2TICK_Other-",
    },
  ];

  const nextProduct: INextProduct[] = [
    {
      image: "/assets/future-sm.png",
      link: "/projects/future",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
    {
      image: "/assets/defi-sm.png",
      link: "/projects/defi",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
  ];

  return (
    <LayoutNavbar>
      <div className="container  max-w-full custom-container overflow-hidden">
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

export default Binary;
