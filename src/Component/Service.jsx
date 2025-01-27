import React from "react";
import money from "../assets/image/service1.png";
import bill from "../assets/image/service2.png";
import wallet from "../assets/image/service3.png";
import insurance from "../assets/image/service.png";
import travel from "../assets/image/service4.png";
import investment from "../assets/image/service5.png";

const Service = () => {
  const scroll = [
    { id: 1, src: money, name: "money transfer" },
    { id: 2, src: bill, name: "Recharge and bill payment" },
    { id: 3, src: wallet, name: "Personal wallet" },
    { id: 4, src: insurance, name: "Insurance" },
    { id: 5, src: travel, name: "Travel booking" },
    { id: 6, src: investment, name: "Investment & SIP" },
  ];
  return (
    <div className="mt-[5rem]">
      <h1 className="text-center text-[2rem] md:text-[3rem] overflow-x-hidden text-[#3D73B3] font-bold">
        Our Service
      </h1>
      <div className="overflow-x-scroll md:overflow-x-hidden">
        <div className="flex w-[90rem] md:w-full  flex-row px-[0.5rem] md:px-[3rem] gap-[4rem] md:gap-[0] md:justify-between mt-[3rem] text-center w-full">
          {scroll.map((scrol) => {
            return (
              <div
                key={scrol.id}
                className="flex flex-col gap-2 w-[20%] md:w-[auto] h-[auto] mx-auto"
              >
                <img src={scrol.src} alt="image" className="w-full md:w-[10rem]" />
                <p className="font-semibold text-[0.8rem] md:text-[1rem]">
                  {scrol.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between px-[0.5rem] md:px-[3rem] mt-[4rem] md:mt-[8rem] text-center">
        <div className="w-[30%] md:w-[25%] ">
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold">500K +</h1>
          <p className="text-[1rem] md:text-[1.5rem] font-semibold">Users in all over india</p>
        </div>
        <div className="w-[30%] md:w-[25%]">
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold">500K +</h1>
          <p className="text-[1rem] md:text-[1.5rem] font-semibold">Users in all over india</p>
        </div>
        <div className="w-[30%] md:w-[25%]">
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold">500K +</h1>
          <p className="text-[1rem] md:text-[1.5rem] font-semibold">Users in all over india</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
