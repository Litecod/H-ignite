import background from "../assets/image/bg2.png";
import phone from "../assets/image/phone.png";
import logoSmall from "../assets/image/logo2.png";

const HeroCon = () => {
  return (
    <div
      className="bg-cover bg-center flex flex-col md:flex-row mt-[2rem] md:mt-[8rem] w-[100%] bg-[../assets/image/bg2.png] px-[0.3rem] md:px-[2rem] justify-between"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="relative w-[100%] md:w-[50%] mx-auto md:mx-0">
        <img src={phone} alt="Phone" className="sm:ml-[4rem] md:ml-[5rem] xl:ml-[10rem] h-[20rem] md:h-[20rem] lg:h-[30rem] xl:h-[full] " />
        <div className="absolute flex flex-col top-[5rem] sm:top-[7rem] md:top-[5rem] lg:top-[7.5rem] left-[2rem] sm:left-[9rem] md:left-[7.5rem] lg:left-[10rem] xl:left-[15rem] gap-6 items-center">
          <img src={logoSmall} alt="" className="w-[2rem] sm:w-[3rem] lg:w-[5rem]" />
          <h2 className="text-[#000] text-[1.5rem] font-semibold">H Ignite</h2>
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] flex flex-col gap-6 mt-[2rem] md:mt-[5rem] text-center md:text-left">
        <h2 className="text-[2rem] sm:text-[4rem] md:text-[1.7rem] xl:text-[3rem] font-semibold text-[#3D73B3]">
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
