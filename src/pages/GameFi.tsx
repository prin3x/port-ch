import React from "react";
import LayoutNavbar from "../navbar/LayoutNavbar";
import DesignElement, { IDesignElement } from "../projects/DesignElement";
import WebDesignIdea, { ITab } from "../projects/WebDesignIdea";
import FirstPageImageCover from "../projects/FirstPageImageCover";
import FirstCoverDescriptionFuture from "../projects/FutureProject/FirstCoverDescriptionFuture";
import NextProjects, { INextProduct } from "../projects/NextProjects";
import ProjectGoals from "../projects/ProjectGoals";
import ProjectComps from "../projects/ProjectComps";

type Props = {};

function GameFi({}: Props) {
  const firstPageCoverImage = {
    left: "/assets/RPS_Head-Picture-2.png",
    middle: "/assets/RPS_Head-Picture-1.png",
    right: "/assets/RPS_Head-Picture-3.png",
  };

  const designElements: IDesignElement[] = [
    {
      image: "/assets/RPS_Color-Palate.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/RPS_Font.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/rps_logo.png",
      description:
        " ออกแบบ Loading โดยเน้นการเคลื่อนไหวแบบมีเส้นสายนำสายตาให้มีความสอดคล้องกับ Logo และ Interior ของออฟฟิศ",
    },
  ];

  const imageComponent = "/assets/RPS_Components.png";

  const tabs: ITab[] = [
    {
      key: "1",
      title: "Home",
      lightImage: "/assets/game-fi-web-01.png",
    },
    {
      key: "2",
      title: "Shop",
      lightImage: "/assets/game-fi-web-02.png",
    },
    {
      key: "3",
      title: "Marketplace",
      lightImage: "/assets/game-fi-web-03.png",
    },
    {
      key: "4",
      title: "Inventory",
      lightImage: "/assets/game-fi-web-04.png",
    },
  ];

  const nextProduct: INextProduct[] = [
    {
      image: "/assets/defi-sm.png",
      link: "/projects/defi",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
    {
      image: "/assets/bingo-sm.png",
      link: "/projects/bingo",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
  ];

  return (
    <LayoutNavbar>
      <div className="container max-w-full">
        <FirstPageImageCover {...firstPageCoverImage} />
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

export default GameFi;
