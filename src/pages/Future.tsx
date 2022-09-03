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

function Future({}: Props) {
  const nextProduct: INextProduct[] = [
    {
      image: "/assets/exchange-sm.png",
      link: "/projects/exchange",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
    {
      image: "/assets/binary-sm.png",
      link: "/projects/binary",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
  ];

  const designElements: IDesignElement[] = [
    {
      image: "/assets/1000X_Color-Palate.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น Primary Color ตาม CI ให้สอดคล้องกับ Logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น Secondary Color เพื่อให้ Mood&Tone สบายตาใช้งานง่าย เหมาะกับ White Mode และ Dark Mode",
    },
    {
      image: "/assets/1000X_Font.png",
      description:
        "ใช้ฟ้อนท์ Noto sans thai และ Noto sans เนื่องจากมีความคล้ายคลึงกับฟ้อนท์ Sukhumvit แต่มีราคาที่ย่อมเยากว่า สไตล์ฟ้อนท์มีความทันสมัยแต่ยังสุภาพ อ่านง่าย เหมาะกับการแสดงตัวเลขเยอะๆที่มีทศนิยมถึงแปดหลัก",
    },
    {
      image: "/assets/1000xlogo.png",
      description:
        " ออกแบบ Loading โดยเน้นการเคลื่อนไหวแบบมีเส้นสายนำสายตาให้มีความสอดคล้องกับ Logo และ Interior ของออฟฟิศ",
    },
  ];

  const tabs: ITab[] = [
    {
      key: "1",
      title: "Trade",
      lightImage: "/assets/1000X_Trade.png",
    },
    {
      key: "2",
      title: "Home",
      lightImage: "/assets/1000X_level.png",
    },
    {
      key: "3",
      title: "Portfolio",
      lightImage: "/assets/1000X_Leader.png",
    },
    {
      key: "4",
      title: "Leader",
      lightImage: "/assets/1000X_Statistic.png",
    },
  ];


  const mobileTabs: ITab[] = [
    {
      key: "1",
      title: "Trade",
      lightImage: "/assets/1000X_Mobile_Trade-",
    },
    {
      key: "2",
      title: "Home",
      lightImage: "/assets/1000X_Mobile_Home-",
    },
    {
      key: "3",
      title: "Portfolio",
      lightImage: "/assets/1000X_Mobile_Port-",
    },
    {
      key: "4",
      title: "Leader",
      lightImage: "/assets/1000X_Mobile_Leader-",
    },
  ];

  const imageComponent = "/assets/1000X_Components.png";

  return (
    <LayoutNavbar>
      <div className="container  max-w-full custom-container overflow-hidden">
        <FirstPageImageCover
          left="/assets/1000X_Head-Picture-2.png"
          middle="/assets/1000X_Head-Picture-3.png"
          right="/assets/1000X_Head-Picture-1.png"
        />
        <FirstCoverDescriptionFuture />
        <ProjectGoals />
        <DesignElement designElements={designElements} />
        <ProjectComps imageComponent={imageComponent}/>
        <WebDesignIdea tabs={tabs} />
        <MobileIdea tabs={mobileTabs} />
        <NextProjects nextProduct={nextProduct}/>
      </div>
    </LayoutNavbar>
  );
}

export default Future;
