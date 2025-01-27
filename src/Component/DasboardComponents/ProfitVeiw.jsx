import React from "react";

const ProfitVeiw = () => {
  return (
    <div className="w-[100%] md:w-[50%]">
      <h1 className="mb-[3rem]">Profit Veiw</h1>
      <div className="w-full h-[25rem] flex">
        <div className="w-[2.rem] text-right pr-[0.4rem] h-[25rem] flex flex-col justify-between">
          <p>1L</p>
          <p>50K</p>
          <p>10K</p>
          <p>1000</p>
          <p>100</p>
          <p>10</p>
        </div>
        <div className="relative border-[#000] border-l-[5px] border-b-[5px] w-[90%] h-[25rem] px-[0.5rem] gap-[5rem]">
            <div className="absolute bottom-[0] w-[8%] h-[100%] bg-[red] left-[2%]"></div>
            <div className="absolute bottom-[0] w-[8%] h-[100%] bg-[red] left-[11%] "></div>
            <div className="absolute bottom-[0] w-[8%] h-[100%] bg-[red] left-[20%]"></div>
            <div className="absolute bottom-[0] w-[8%] h-[100%] bg-[red] "></div>
            <div className="absolute bottom-[0] w-[8%] h-[100%] bg-[red] "></div>
            <div className="absolute bottom-[0] w-[8%] h-[100%] bg-[red] "></div>
            <div className="absolute bottom-[0] w-[8%] h-[100%] bg-[red] "></div>
            <div className="absolute bottom-[0] w-[8%] h-[100%] bg-[red] "></div>
            <div className="absolute bottom-[0] w-[8%] h-[100%] bg-[red] "></div>
            <div className="absolute bottom-[0] w-[8%] h-[100%] bg-[red] "></div>
        </div>
      </div>
    </div>
  );
};

export default ProfitVeiw;
