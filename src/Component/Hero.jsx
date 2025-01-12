import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="ml-[2rem]">
      <div className="w-[30%] flex flex-col gap-6 mt-[5rem]">
        <h2 className="text-[3rem] font-semibold text-[#3D73B3]">
          Manage your cash <br /> flow more efficiently
        </h2>
        <p className="text-[1.5rem] text-[#000000B2]">
          With the free Business Blueprint dashboard, view your select business
          products and accounts all in one place with one login.
        </p>
        <button className=""><Link to={"/login"}>Get Started</Link></button>
      </div>
    </section>
  );
};

export default Hero;
