import { FaPhone } from "react-icons/fa6";
import img from "../assets/image/customerimg.png"

const CustomerSupport = () => {
  return (
    <div className=" bg-[#D5EDFB] flex flex-col md:flex-row mt-[5rem] px-[0.5rem] md:px-[5rem] py-[1rem] justify-between text-center md:text-left">
      <div className="w-full md:w-[30%] flex flex-col gap-2 ">
        <h1 className="font-medium text-[2rem] md:text-[2.5rem]">Customer Suport</h1>
        <p className="text-[1.4rem] font-medium w-[19rem] mx-auto md:mx-0 ">Get instant help, we will try to 100% resolve your quarries</p>
        <p className="text-[1.4rem] font-medium mt-[1rem]" >Click here to reach us via phone</p>
        <button className="bg-[#0094D4] mt-[1rem] flex w-[10rem] items-center justify-center py-[0.5rem] font-medium text-[#fff] text-[1.4rem] rounded-md mx-auto md:mx-0 "><FaPhone className="mr-[0.5rem]"/>  Call Now</button>
        <p className="flex mt-[1rem] items-center w-full text-[1.2rem] gap-2"><hr className="bg-[#000] h-[3px] w-[50%]"/> Or <hr className="bg-[#000] h-[3px] w-[50%]" /></p>
        <p className="font-semibold mt-[1rem] text-[2rem]">+914486820486</p>
      </div>
      <img src={img} alt="" className="w-ful md:w-[65%] " />
    </div>
  );
};

export default CustomerSupport;
