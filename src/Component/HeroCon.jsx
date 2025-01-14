import background from "../assets/image/bg2.png";
import phone from "../assets/image/phone.png";
import logoSmall from "../assets/image/logo2.png";

const HeroCon = () => {
  return (  
    <div
      className="bg-cover bg-center flex flex-col md:flex-row mt-[2rem] md:mt-[8rem] w-[100%] bg-[../assets/image/bg2.png] px-[0.3rem] md:px-[2rem] justify-between pb-[5rem] md:pb-0"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="relative w-[100%] md:w-[50%] mx-auto md:mx-0">
        <img src={phone} alt="Phone" className="w-[13rem] md:w-auto mx-auto md:mx-0 ml-[auto] md:ml-[10rem] xl:ml-[15rem] h-[20rem] md:h-[20rem] lg:h-[30rem] xl:h-[full] " />
        <div className="relative md:absolute flex flex-col ml-[-2rem] md:ml-0 mt-[-15rem] md:mt-0 md:top-[5rem] lg:top-[7.5rem] md:left-[12.5rem] lg:left-[15rem] xl:left-[20rem] gap-6 items-center">
          <img src={logoSmall} alt="" className="w-[2rem] md:w-[3rem] lg:w-[5rem]" />
          <h2 className="text-[#000] text-[1.5rem] font-semibold">H Ignite</h2>
        </div>
      </div>
      <div className="w-[100%] px-[0.3rem] md:px-0 md:w-[25rem] lg:w-[35rem] flex flex-col gap-6 mt-[12rem] md:mt-[5rem] md:mt-[5rem] text-center md:text-left">
        <h2 className=" text-[2rem] sm:text-[4rem] md:text-[1.7rem] xl:text-[3rem] font-semibold text-[#3D73B3]">
          Aapki sampatti, hamari jimmedari,
        </h2>
        <p className="text-[1rem] sm:text-[2rem] md:text-[0.8rem] lg:text-[1.5rem] text-[#000000B2]">
          Get the convenience of payment, purchase, loans, and insurance all in
          one place. We follow zero hidden charges. Your money is safe with us,
          we using the world's best security module
        </p>
      </div>
    </div>
  );
};

export default HeroCon;
