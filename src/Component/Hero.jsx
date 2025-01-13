import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";
import backgroundImage from "../assets/image/bg1.png"

const Hero = () => {
  return (
    <section className="pl-[2rem] lg:pl-[6rem] relative">
      <div className="w-[35%] flex flex-col gap-2 sm:gap-6 mt-[2rem] md:mt-[5rem]">
        <h2 className="text-[0.6rem] sm:text-[1rem] md:text-[1.7rem] xl:text-[3rem] font-semibold text-[#3D73B3]">
          Manage your cash <br /> flow more efficiently
        </h2>
        <p className="text-[0.4rem] sm:text-[0.5rem] md:text-[0.8rem] lg:text-[1.5rem] text-[#000000B2]">
          With the free Business Blueprint <br /> dashboard, view your select business <br />
          products and accounts all in one place <br /> with one login.
        </p>
        <button className="w-[5rem] sm:w-[10rem] text-[#fff] px-[0.5rem] sm:px-[1.3rem] py-[0.5rem] sm:py-[1rem] bg-[#3CD75D] rounded-xl items-center text-[0.5rem] sm:text-[1.2rem]"><Link to={"/login"} className="flex items-center px-auto">Get Started <MdArrowOutward className="text-[#fff]" /></Link></button>
      </div>
      <img src={backgroundImage} alt="background image" className="absolute right-0 top-[-2rem] md:top-[-5rem] w-[65%]" />
    </section>
  );
};

export default Hero;
