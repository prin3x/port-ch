import React, { useState } from "react";
import { ITab } from "./WebDesignIdea";

type Props = {
  tabs: ITab[];
};

function MobileIdea({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState("1");

  const onChangeActiveTab = (key: string) => {
    setActiveTab(key);
  };
  return (
    <div className="p-24">
      <div className="flex items-center">
        <div className="flex flex-col flex-2">
          <p className="font-light  text-[16px]">DESIGN ideas</p>
          <h2 className="font-bold text-[36px] leading-tight ">
            Mobile Application
          </h2>
        </div>
        <div className="flex flex-col flex-1 ">
          <p className="ml-20 text-[16px]">
            การออกแบบในแต่ละหน้าของ Exchange ต้องใช้ความละเอียดรอบคอบ
            ทุกอย่างมีที่มาที่ไป สีที่นำมาใช้ต้องสื่อความหมายอย่างชัดเจน
            ตัวเลขที่นำมาแสดงคืออะไร คำนวณจากไหน
            มีความใส่ใจในการบอกรายละเอียดต่างๆแก่ผู้ใช้งาน
            หากในกณีที่ระบบดำเนินการไม่สำเร็จจะแสดงให้ผู้ใช้
            รู้ว่าเพราะอะไรและควรทำอย่างไรต่อไป
          </p>
          <p className="flex-1 ml-20 text-[16px] mt-5">
            ออกแบบ by Pixcel Pading&Margin ต้องเท่ากัน Components
            มีมาตราฐานไปในทางเดียวกัน สามารถนำมาใช้ได้ซ้ำ เพื่อลดภาระในขั้นตอน
            การพัฒนา Code
            และสิ่งสำคัญคือทุกอย่างที่ทำต้องให้ประโยชน์อย่างสูงสุดแก่ผู้ใช้
          </p>
        </div>
      </div>
      <div className="mt-10 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <li
              onClick={() => onChangeActiveTab(tab.key)}
              key={tab.key}
              className="mr-10 cursor-pointer"
            >
              <div
                className={`inline-block p-4 rounded-t-lg border-b-2 ${
                  activeTab === tab.key
                    ? "border-blue-800 hover:text-black hover:border-blue-600 dark:hover:text-black text-black font-bold"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                {tab.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="image-by-tab mt-10 flex gap-14">
        <img
          src={
            tabs.find((tab) => tab.key === activeTab)?.lightImage + "1" + ".png"
          }
          alt=""
          className="h-[555px]"
        />
        <img
          src={
            tabs.find((tab) => tab.key === activeTab)?.lightImage + "2" + ".png"
          }
          alt=""
          className="h-[555px]"
        />
        <img
          src={
            tabs.find((tab) => tab.key === activeTab)?.lightImage + "3" + ".png"
          }
          alt=""
          className="h-[555px]"
        />
        <img
          src={
            tabs.find((tab) => tab.key === activeTab)?.lightImage + "4" + ".png"
          }
          alt=""
          className="h-[555px]"
        />
      </div>
    </div>
  );
}

export default MobileIdea;
