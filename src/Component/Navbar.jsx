import { useState } from "react";
import { NavLink } from "react-router";
import { CiMenuKebab } from "react-icons/ci";
import logo from "../assets/image/hlogo.png";
import NotLogOrSginIn from "./NotLogOrSignIn";

const Navbar = () => {
  const [active, setActive] = useState(true);
  const navs = [
    { id: 1, name: "Home", value: "hom", link: "/" },
    { id: 2, name: "Service", value: "service", link: "/service" },
    {
      id: 3,
      name: "About Us",
      value: "aboutus",
      link: "/aboutus",
    },
    { id: 4, name: "Contact", value: "contact", link: "/contact" },
  ];
  return (
    <div className="overflow-x-hidden">
      <nav className="flex items-center justify-between px-[0.5rem] md:px-[1rem] lg:px-[2rem] py-[0.5rem] bg-[#f1f1f1] shadow-lg shadow[#000000B2] overflow-x-hidden">
      <img
        className=" ml-[0rem] lg:ml-[4rem] w-[7rem] lg:w-[15rem]"
        src={logo}
        alt=""
      />
      <div className="flex gap-[0.5rem] md:gap-[2rem] items-center">
        <ul
          className={`absolute md:relative duration-5000 shadow-lg shadow[#000] md:shadow-[transparent] rounded-lg flex flex-col w-[12rem] text-center top-[5rem] md:top-0 z-10 bg-[#3B73B5] md:bg-[transparent] md:w-auto md:flex-row md:gap-[2rem] lg:gap-[5rem] md:text-[1rem] lg:text-[1.2rem]  ${!active ? "right-[2rem] md:right-[0]" : "right-[-20rem] md:right-[0]"}`}
        >
          {navs.map((nav) => {
            return (
              <NavLink
                key={nav.id}
                to={nav.link}
                onClick={() => setActive((prev) => !prev)}
                className={({ isActive }) =>
                  !isActive
                    ? "hover:text-[#3B73B5] no-underline py-[2rem]"
                    : "md:hover:text-[#3B73B5]  py-[2rem] bg-[#fff] md:bg-[transparent] text-[#000] md:text-[#000] md:after:content-[''] md:after:block md:after:rounded-md md:after:w-[100%] md:after:h-[5px] md:after:bg-[#3B73B5]"
                }
              >
                {nav.name}
              </NavLink>
            );
          })}
        </ul>
        <NotLogOrSginIn />
        <CiMenuKebab
          className="text-[#3B73B5] text-[1.7rem] md:hidden"
          onClick={() => setActive((prev) => !prev)}
        />
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
