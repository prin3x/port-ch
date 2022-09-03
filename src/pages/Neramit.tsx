import React from "react";
import LayoutNavbar from "../navbar/LayoutNavbar";
import DesignElement, { IDesignElement } from "../projects/DesignElement";
import FirstCoverDescriptionFuture from "../projects/FutureProject/FirstCoverDescriptionFuture";
import NextProjects, { INextProduct } from "../projects/NextProjects";
import ProjectGoals from "../projects/ProjectGoals";
import SoloFirstPageImage from "../projects/SoloFirstPageImage";
import WebDesignIdea, { ITab } from "../projects/WebDesignIdea";

type Props = {};

function Neramit({}: Props) {
  const designElements: IDesignElement[] = [
    {
      image: "/assets/NERAMIT_Color-Palate_2.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/NERAMIT_Font.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
  ];

  const tabs: ITab[] = [
    {
      key: "1",
      title: "Landing",
      lightImage: "/assets/neramit-landing.png",
    },
  ];

  const nextProduct: INextProduct[] = [
    {
      image: "/assets/4king-sm.png",
      link: "/projects/4king",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
    {
      image: "/assets/charity-sm.png",
      link: "/projects/charity ",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
  ];
  return (
    <LayoutNavbar>
      <div className="container max-w-full custom-container overflow-hidden">
        <SoloFirstPageImage image="/assets/cover-neramit.png" />
        <FirstCoverDescriptionFuture />
        <ProjectGoals />
        <DesignElement designElements={designElements} />
        <WebDesignIdea tabs={tabs} />
        <NextProjects nextProduct={nextProduct} />
      </div>
    </LayoutNavbar>
  );
}

export default Neramit;
