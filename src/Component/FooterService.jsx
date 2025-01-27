import footerLogo from "../assets/image/footerimage.png";

const FooterService = () => {
  return (
    <div className="flex w-full">
      <div className=" md:w-[11.8rem] lg:w-[16.8rem] bg-[#000]"></div>
      <div className="h-[60vh] bg-[#1B76C7] mt-[5rem] py-[1rem] w-full md:w-full ">
        <div className="flex items-center gap-4 justify-center mt-[4rem]">
          <img src={footerLogo} alt="logo" className="" />
          <h1 className="text-[#9DBDE3] text-[2.5rem] font-semibold">
            H Ignite
          </h1>
        </div>
        <p className="text-center text-[#fff] text-[1.5rem] font-semibold mt-[2rem]">
          H- ignite copyright All rights reserved
        </p>
      </div>
    </div>
  );
};

export default FooterService;
