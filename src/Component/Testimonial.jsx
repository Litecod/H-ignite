import imageOne from "../assets/image/image1.png"
import imageTwo from "../assets/image/image2.png"

const Testimonial = () => {
  return (
    <div className="mt-[5rem]">
      <h1 className="text-center md:text-[2rem] text-[3rem] overflow-x-hidden text-[#3D73B3] font-bold">
        What our users says
      </h1>
      <div className=" px-[0.5rem] md:px-[5rem] flex">
        <div className="w-[20rem]">
          <img src={imageOne} alt="" className="w-[100%] border-[#000000B2] border-[2px]"/>
          <div className=" border-[#000000B2] border-[2px] text-center px-[0.3rem]">
          <p className="font-bold">- Rahul S</p>
          <p className="w-full ">
            I've been using their services for a while now, and I'm
            impressed with the seamless experience and the top-notch security
            measures they have in place. My financial transactions feel secure,
            and the zero hidden charges policy is truly a breath of fresh air in
            the industry." - Rahul S.
          </p>
          </div>
        </div>
        <div className="w-[20rem]">
          <img src={imageOne} alt="" className="w-[100%] border-[#000000B2] border-[2px]"/>
          <div className=" border-[#000000B2] border-[2px] text-center px-[0.3rem]">
          <p className="font-bold">- Rahul S</p>
          <p className="w-full ">
            I've been using their services for a while now, and I'm
            impressed with the seamless experience and the top-notch security
            measures they have in place. My financial transactions feel secure,
            and the zero hidden charges policy is truly a breath of fresh air in
            the industry." - Rahul S.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
