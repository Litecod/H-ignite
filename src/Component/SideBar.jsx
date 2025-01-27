import { NavLink } from "react-router";
import {
  MdSpaceDashboard,
  MdReportProblem,
  MdSettings,
  MdBookmarkAdd,
} from "react-icons/md";
import { FaCreditCard, FaHandHoldingDollar } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import img from "../assets/image/sideimage.png";

const SideBar = () => {
  const navs = [
    { id: 1, name: "Dashboard", icon: <MdSpaceDashboard />, to: "/dasboard" },
    { id: 2, name: "Card", icon: <FaCreditCard />, to: "/card" },
    { id: 3, name: "Payment", icon: <GiTakeMyMoney />, to: "/payment" },
    {
      id: 4,
      name: "Investment",
      icon: <FaHandHoldingDollar />,
      to: "/investment",
    },
    { id: 5, name: "Report", icon: <MdReportProblem />, to: "/report" },
    {
      id: 6,
      name: "",
      icon: (
        <hr className="md:w-[10rem] md:h-[2px] bg-[#000] md:mt-[2rem] md:mb-[2rem] hidden md:block" />
      ),
      to: "/report",
    },
    { id: 7, name: "Setting", icon: <MdSettings />, to: "/setting" },
    {
      id: 8,
      name: "Terms And Services",
      icon: <MdBookmarkAdd />,
      to: "/terms",
    },
  ];
  return (
    <div className="py-[2rem] md:py-0 bg-[#fff] ">
      <div className="md:h-[100vh] md:fixed md:flex-col md:gap-[2rem] lg:pl-[6rem] md:pt-[3rem] px-[0.5rem] lg:px-0 bg-[#fff] justify-between md:justify-center md:border-r-[5px] md:border-r-[#e8e8e8] md:pb-[1rem]">
        <ul className=" flex flex-row md:flex-col md:gap-[1rem] justify-between md:justify-center">
          {navs.map((nav) => {
            return (
              <NavLink
                className={({isActive}) => isActive ? "flex items-center gap-2 text-[1.5rem] md:text-[1rem] text-[#3B73B5] border-[3px] border-t-[0px] border-[#000] md:border-y-[5px] md:border-r-[5px] md:border-l-[0px]  p-[0.5rem]" : "flex items-center gap-2 text-[1.5rem] md:text-[1rem]"}
                key={nav.id}
                to={nav.to}
              >
                {nav.icon}
                <p className="hidden md:block">{nav.name}</p>
              </NavLink>
            );
          })}
        </ul>
        <img src={img} alt="" className="mt-[4rem] hidden md:block w-[10rem]" />
      </div>
      <h1></h1>
    </div>
  );
};

export default SideBar;
