import LayoutNavbar from "../navbar/LayoutNavbar";
import DesignElement, { IDesignElement } from "../projects/DesignElement";
import WebDesignIdea, { ITab } from "../projects/WebDesignIdea";
import FirstPageImageCover from "../projects/FirstPageImageCover";
import FirstCoverDescriptionFuture from "../projects/FutureProject/FirstCoverDescriptionFuture";
import NextProjects, { INextProduct } from "../projects/NextProjects";
import ProjectGoals from "../projects/ProjectGoals";
import ProjectComps from "../projects/ProjectComps";
import SingleCover from "../projects/SingleCover";

type Props = {};

function Bingo({}: Props) {
  const firstPageCoverImage = {
    left: "/assets/SALEBOX_Head-Picture-2.png",
    middle: "/assets/SALEBOX_Head-Picture-1.png",
    right: "/assets/SALEBOX_Head-Picture-3.png",
  };

  const designElements: IDesignElement[] = [
    {
      image: "/assets/4KING_Color-Palate.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
    {
      image: "/assets/4KING_Font.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น pimary color ตาม ci ให้สอดคล้องกับ logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น secondary color เพื่อให้ mood&tone สบายตาใช้งานง่าย เหมาะกับ white mode และ dark mode",
    },
  ];

  const tabs: ITab[] = [
    {
      key: "1",
      title: "Upload",
      lightImage: "/assets/4king-upload-01.png",
    },
  ];

  const nextProduct: INextProduct[] = [
    {
      image: "/assets/salebox-sm.png",
      link: "/projects/salebox",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
    {
      image: "/assets/pos-sm.png",
      link: "/projects/pos ",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
  ];

  return (
    <LayoutNavbar>
      <div className="container max-w-full">
        <SingleCover cover="/assets/4king-cover.png" />
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