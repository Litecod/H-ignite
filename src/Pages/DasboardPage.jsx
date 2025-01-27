import React from "react";
import Record from "../Component/DasboardComponents/Record";
import ProfitVeiw from "../Component/DasboardComponents/ProfitVeiw";
import DuePayment from "../Component/DasboardComponents/DuePayment";

const Dasboard = () => {
  return (
    <div className="flex w-full">
      <div className=" md:w-[12.2rem] lg:w-[18.8rem] xl:w-[16.8rem] bg-[#fff]"></div>
      <div className="py-[1rem] w-full md:w-[82%] px-[0.5rem]">
        <Record />
        <div className="flex flex-col md:flex-row w-[100%] mt-[3rem]">
          <ProfitVeiw />
          <DuePayment />
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
