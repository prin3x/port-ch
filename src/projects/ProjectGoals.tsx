import React from "react";

type Props = {};

function ProjectGoals({}: Props) {
  return (
    <div className="bg-[#E9EBEC]">
      <div className="p-5 md:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="project-goal max-w-[639px]">
            <p className="font-light text-[16px]">BITNANCE EXCHANGE</p>
            <h2 className="font-bold text-[48px] leading-tight">
              Goals & Challenge{" "}
            </h2>
            <p className="font-thin  text-[16px] mt-5">
              UX/UI
              หลักของแพลตฟอร์มออกแบบโดยต้องการลดความซับซ้อนของสมองในการใช้งาน
              ผู้ที่เทรดไม่เป็น สามารถมองแล้วเข้าใจวิธีการใช้งานเบ้ื้องต้นได้
              ทว่าฟีเจอร์ระดับ Advanceที่ผู้ชำนาญการเทรดใช้ ก็ต้องมีให้ครบ
              และต้องนำเสนอฟีเจอร์ของการเทรดอนุพันธ์ผสมเข้ามาในแพลตฟอร์ม
              จึงเป็นความท้าทายในการออกแบบผลงานที่รีไควเม้นท์ขัดแย้งกันอย่างยิ่ง
            </p>

            <p className="font-thin  text-[16px] mt-10">
              ที่สำคัญคือการออกแบบการนำเสนอผลประกอบการลงทุนต้องมีความเด่นชัด
              ไม่ทำให้ผู้ใช้งานพลาดโอกาสในการทำกำไรขณะเดียวกันเมื่อผู้ใช้งานขาดทุนก็ต้องไม่สร้างความรู้สึกลบ
            </p>
          </div>

          <div className="illustrate-1 ">
            <img
              src="/assets/1920_1080.png"
              alt=""
              className="w-[575px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGoals;
