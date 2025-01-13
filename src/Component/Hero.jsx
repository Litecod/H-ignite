import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";
import backgroundImage from "../assets/image/bg1.png"

const Hero = () => {
  return (
    <section className="pl-[0.3rem] md:pl-[2rem] lg:pl-[6rem] relative flex flex-col md:flex-row  2xl:justify-between">
      <div className="w-[100%] md:w-[35%] flex flex-col gap-6 mt-[2rem] md:mt-[5rem] text-center md:text-left">
        <h2 className="text-[2rem] sm:text-[4rem] md:text-[1.7rem] xl:text-[3rem] font-semibold text-[#3D73B3]">
          Manage your cash <br /> flow more efficiently
        </h2>
        <p className="text-[1rem] sm:text-[2rem] md:text-[0.8rem] lg:text-[1.5rem] text-[#000000B2]">
          With the free Business Blueprint <br /> dashboard, view your select business <br />
          products and accounts all in one place <br /> with one login.
        </p>
        <button className="mx-auto md:mx-0 [10rem] w-[10rem] text-[#fff] px-[1.3rem] py-[1rem] bg-[#3CD75D] rounded-xl items-center text-[1.2rem]"><Link to={"/login"} className="flex items-center px-auto">Get Started <MdArrowOutward className="text-[#fff]" /></Link></button>
      </div>
      <img src={backgroundImage} alt="background image" className="hidden md:block w-[65%] xl:w-[50rem]" />
    </section>
  );
};

export default Hero;
