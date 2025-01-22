import { NavLink } from "react-router";
import {
  MdSpaceDashboard,
  MdReportProblem,
  MdSettings,
  MdBookmarkAdd,
} from "react-icons/md";
import { FaCreditCard, FaHandHoldingDollar } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import img from "../assets/image/sideimage.png"

const SideBar = () => {
  const navs = [
    { id: 1, name: "Dashboard", icon: <MdSpaceDashboard />, to: "/" },
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
        <hr className="w-[10rem] h-[2px] bg-[#000] md:mt-[3rem] md:mb-[3rem]" />
      ),
      to: "/repor",
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
    <div className="fixed md:flex-col md:gap-[2rem]  md:pl-[6rem] md:pt-[3rem] bg-[#fff] overflow-y-scroll">
      <ul className=" flex flex-row md:flex-col md:gap-[2rem]">
        {navs.map((nav) => {
          return (
            <NavLink
              className={"flex items-center gap-2 text-[1.5rem]"}
              key={nav.id}
              to={nav.to}
            >
              {nav.icon}
              {nav.name}
            </NavLink>
          );
        })}
      </ul>
      <img src={img} alt="" className="mt-[4rem]" />
    </div>
  );
};

export default SideBar;
