import background from "../assets/image/bg3.png";
import linked from "../assets/image/linked.png";
import linkedbg from "../assets/image/linkedbg.png";

const ServiceCon = () => {
  return (
    <div
      className="mt-[5rem] py-[3rem] px-[0.5rem] md:px-[5rem] bg-cover flex flex-col md:flex-row"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="relative w-[100%] md:w-[50%]  ml-0 md:ml-[5rem] xl:ml-[8rem]">
        <img src={linkedbg} className="w-[15rem] md:w-[auto] mx-auto md:mx-0" />
        <img src={linked} alt="" className="w-[15rem] mx-auto md:mx-0 mt-[-7rem] md:mt-[-8rem] mb-[3rem] md:mb-[5rem] md:ml-[1rem]" />
      </div>
      <div className="w-[100%] md:w-[40%] mt-[4rem] text-center md:text-left">
        <h2 className=" text-[2rem] sm:text-[4rem] md:text-[2rem] xl:text-[3rem] font-semibold text-[#3D73B3]">
          Your Money Stay Safe With Us
        </h2>
        <p className="text-[1rem] sm:text-[2rem] md:text-[1rem] lg:text-[1.5rem] text-[#000000B2] ">
          We protects your money with the best-in-class security systems that
          help minimize frauds.
        </p>
      </div>
    </div>
  );
};

export default ServiceCon;
