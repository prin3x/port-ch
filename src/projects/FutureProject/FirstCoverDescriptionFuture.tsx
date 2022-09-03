import React from "react";

type Props = {};

function FirstCoverDescriptionFuture({}: Props) {
  return (
    <div className="md:p-24 p-5">
      <p className="font-light  text-[16px]">BITNANCE EXCHANGE</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 text-black gap-20">
        <div className="title flex flex-col items-start">
          <h1 className="font-bold text-[48px] leading-tight">
            Cryptocurrency exchange Buy, trade, and hold
          </h1>
          <p className="text-[16px] mt-10">
            แพลตฟอร์มแลกเปลี่ยนซื้อขายสกุลเงินดิจิทัลที่ได้รับใบอนุญาตจาก
            กลต.ของไทย โดยดึงจุดเด่นการออกแบบของการเทรดสกุลเงินดิจิทัล กับ
            การเทรดอนุพันธ์ มาปรับใช้งานให้เหมาะสมกับลักษณะการใช้งานของคนไทย
          </p>
        </div>
        <div className="w-full grid grid-cols-2 mx-auto gap-10">
          <div className="details ">
            <div className="flex flex-col">
              <h3 className="font-bold leading-10 block text-[24px]">Client</h3>
              <p className="text-[16px block]">Bitnance co., ltd</p>
            </div>
          </div>

          <div className="details ">
            <div className="flex flex-col">
              <h3 className="font-bold leading-10 block text-[24px]">Year</h3>
              <p className="text-[16px block]">2021 - Present</p>
            </div>
          </div>

          <div className="details ">
            <div className="flex flex-col">
              <h3 className="font-bold leading-10 block text-[24px]">
                Services
              </h3>
              <p className="text-[16px block]">Project Management</p>
              <p className="text-[16px block]">UX & UI Design</p>
              <p className="text-[16px block]">Graphic Design</p>
            </div>
          </div>

          <div className="details ">
            <div className="flex flex-col">
              <h3 className="font-bold leading-10 block text-[24px]">Year</h3>
              <p className="text-[16px block]">Tailwinds</p>
              <p className="text-[16px block]">Golang</p>
              <p className="text-[16px block]">Blockcahin</p>
              <p className="text-[16px block]">Nodejs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCoverDescriptionFuture;
