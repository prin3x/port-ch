import LayoutNavbar from "../navbar/LayoutNavbar";
import DesignElement, { IDesignElement } from "../projects/DesignElement";
import ExchangeWindowSlide from "../projects/ExchangeProjects/ExchangeWindowSlide";
import VersionWindowSlide from "../projects/ExchangeProjects/VersionWindowSlide";
import FirstPage from "../projects/FirstPage";
import MobileIdea from "../projects/MobileIdea";
import NextProjects, { INextProduct } from "../projects/NextProjects";
import ProjectComps from "../projects/ProjectComps";
import ProjectGoals from "../projects/ProjectGoals";
import WebDesignIdea, { ITab } from "../projects/WebDesignIdea";

type Props = {};

function Exchange({}: Props) {

  const nextProduct: INextProduct[] = [
    {
      image: "/assets/defi-sm.png",
      link: "/projects/defi",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
    {
      image: "/assets/future-sm.png",
      link: "/projects/future",
      text: "Website 3 application",
      title: "Decentralize Finance and ACT token",
    },
  ];

  const designElements: IDesignElement[] = [
    {
      image: "/assets/EXCHANGE_Color-Palate.png",
      description:
        "เน้นใช้สี Illuminating yellow และ Ultimate gray เป็น Primary Color ตาม CI ให้สอดคล้องกับ Logo ของบริษัท ใช้สีเทาไล่เฉดที่เข้มขึ้นเป็น Secondary Color เพื่อให้ Mood&Tone สบายตาใช้งานง่าย เหมาะกับ White Mode และ Dark Mode",
    },
    {
      image: "/assets/EXCHANGE_Font.png",
      description:
        "ใช้ฟ้อนท์ Noto sans thai และ Noto sans เนื่องจากมีความคล้ายคลึงกับฟ้อนท์ Sukhumvit แต่มีราคาที่ย่อมเยากว่า สไตล์ฟ้อนท์มีความทันสมัยแต่ยังสุภาพ อ่านง่าย เหมาะกับการแสดงตัวเลขเยอะๆที่มีทศนิยมถึงแปดหลัก",
    },
    {
      image: "/assets/Group_38194.png",
      description:
        " ออกแบบ Loading โดยเน้นการเคลื่อนไหวแบบมีเส้นสายนำสายตาให้มีความสอดคล้องกับ Logo และ Interior ของออฟฟิศ",
    },
  ];

  const tabs: ITab[] = [
    {
      key: "1",
      title: "Trade",
      lightImage: "/assets/EXCHANGE_Trade_White.png",
    },
    {
      key: "2",
      title: "Home",
      lightImage: "/assets/EXCHANGE_Dashborad_White.png",
    },
    {
      key: "3",
      title: "Wallet",
      lightImage: "/assets/EXCHANGE_Wallet_White.png",
    },
    {
      key: "4",
      title: "KYC",
      lightImage: "/assets/EXCHANGE_KYC_White.png",
    },
  ];

  const mobileTabs: ITab[] = [
    {
      key: "1",
      title: "Trade",
      lightImage: "/assets/EXCHANGE_Mobile_Tade_",
    },
    {
      key: "2",
      title: "Home",
      lightImage: "/assets/EXCHANGE_Mobile_Home_",
    },
    {
      key: "3",
      title: "Wallet",
      lightImage: "/assets/EXCHANGE_Mobile_Wallet_",
    },
    {
      key: "4",
      title: "KYC",
      lightImage: "/assets/EXCHANGE_Mobile_KYC_",
    },
  ];

  const imageComponent = "/assets/Exchange_Components.png";

  return (
    <LayoutNavbar>
      <div className="container  max-w-full custom-container overflow-hidden">
        <ExchangeWindowSlide />
        <FirstPage />
        <ProjectGoals />
        <VersionWindowSlide />
        <DesignElement designElements={designElements} />
        <ProjectComps imageComponent={imageComponent} />
        <WebDesignIdea tabs={tabs} />
        <MobileIdea tabs={mobileTabs} />
        <NextProjects nextProduct={nextProduct} />
      </div>
    </LayoutNavbar>
  );
}

export default Exchange;
