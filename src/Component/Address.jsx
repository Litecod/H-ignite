import { FaLocationDot } from "react-icons/fa6";
import img from "../assets/image/map.png";

const Address = () => {
  return (
    <div className="flex flex-col md:flex-row mt-[5rem] px-[0.5rem] md:px-[5rem] py-[1rem] justify-between">
      <div className="w-full md:w-[30%] flex flex-col gap-2 text-center md:text-left">
        <h1 className="font-medium text-[2rem] md:text-[1.5rem] xl:text-[2.5rem]">
          Our registered Addressmer Suport
        </h1>
        <p className="text-[1.4rem] md:text-[1rem] xl:text-[1.5rem] font-medium mt-[1rem]">
          Office-2, Floor 12, Wing A, Block A, Salarpuria Softzone, Service
          Road, Green Glen Layout, Bellandur, Bangalore South, Bangalore,
          Karnataka - 560103, India CIN: U82404KA2019PTC18765
        </p>
        <button className="border-[#0094D4] border-[2px] mt-[1rem] flex w-[10rem] items-center justify-center py-[0.5rem] font-medium text-[#0094D4] text-[1.4rem] rounded-md mx-auto md:mx-0">
          <FaLocationDot /> Veiw Map
        </button>
      </div>
      <div className=" relative text-right w-[100%] md:w-[60%] h-[300px] sm:h-[430px] mt-[3rem] md:mt-0">
        <div className="overflow-hidden bg-none w-[100%] h-[300px] sm:h-[430px]">
          <iframe
            className="h-[300px] sm:h-[430px]"
            width="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=430&amp;hl=en&amp;q=277 Bedford Ave, Brooklyn, NY 11211, USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://embed-googlemap.com">embed google map</a>
        </div>
      </div>
    </div>
  );
};

export default Address;
