import { NavLink } from "react-router";
import logo from "../assets/image/hlogo.png";
import NotLogOrSginIn from "./NotLogOrSignIn";

const Navbar = () => {
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
    <nav className="flex items-center justify-between px-[2rem] py-[0.5rem] border-b-[#000000B2] border-b-[5px]">
      <img className="w-[15rem]" src={logo} alt="" />
      <div className="flex gap-[2rem] items-center">
        <ul className="flex flex-col  md:flex-row gap-[5rem] text-[1.2rem]">
          {navs.map((nav) => {
            return (
              <NavLink
                key={nav.id}
                to={nav.link}
                className={({ isActive }) =>
                  !isActive
                    ? "hover:text-[#3B73B5] no-underline"
                    : "hover:text-[#3B73B5] after:content-[''] after:block after:rounded-md after:w-[100%] after:h-[5px] after:bg-[#3B73B5]"
                }
              >
                {nav.name}
              </NavLink>
            );
          })}
        </ul>
        <NotLogOrSginIn />
      </div>
    </nav>
  );
};

export default Navbar;
