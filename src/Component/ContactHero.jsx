import contactBg from "../assets/image/contact.png";

const ContactHero = () => {
  return (
    <div
      className="h-[40vh] md:h-[60vh] w-full bg-cover mt-[5rem] text-center md:text-left px-[0.5rem] md:px-[6rem]"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
        <h1 className="text-[3rem] md:text-[5rem] text-[#008BD3] font-bold ">Contact Us</h1>
        <p className="text-[1.5rem] md:text-[2.5rem]">We are here to help you</p>
    </div>
  );
};

export default ContactHero;
