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

function Bingo({}: Props) {
  const firstPageCoverImage = {
    left: "/assets/BINGO_Head-Picture-2.png",
    middle: "/assets/BINGO_Head-Picture-1.png",
    right: "/assets/BINGO_Head-Picture-3.png",
  };

  const designElements: IDesignElement[] = [
    {
      image: "/assets/BINGO_Color-Palate.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/BINGO_Font.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/bingo_logo.png",
      description:
        " ออกแบบ Loading โดยเน้นการเคลื่อนไหวแบบมีเส้นสายนำสายตาให้มีความสอดคล้องกับ Logo และ Interior ของออฟฟิศ",
    },
  ];

  const imageComponent = "/assets/BINGO_Components.png";

  const tabs: ITab[] = [
    {
      key: "1",
      title: "Home",
      lightImage: "/assets/bingo-web-01.png",
    },
    {
      key: "2",
      title: "Play",
      lightImage: "/assets/bingo-web-02.png",
    },
    {
      key: "3",
      title: "Buy",
      lightImage: "/assets/bingo-web-03.png",
    },
    {
      key: "4",
      title: "History",
      lightImage: "/assets/bingo-web-04.png",
    },
  ];

  const nextProduct: INextProduct[] = [
    {
      image: "/assets/game-fi-sm.png",
      link: "/projects/game-fi",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
    {
      image: "/assets/booking-sm.png",
      link: "/projects/booking",
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

export default Bingo;
