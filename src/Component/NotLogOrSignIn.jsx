import { NavLink } from "react-router";

const NotLogOrSignIn = () => {
  const navs = [
    { id: 1, name: "Login", link: "/login" },
    { id: 2, name: "Signin", link: "/signin" },
  ];
  return (
    <ul className="flex gap-[2rem] items-center text-[1.2rem]">
      {navs.map((nav) => {
        return (
          <NavLink
            key={nav.id}
            to={nav.link}
            className={({isActive}) => !isActive ? "border-[2px] border-[#3B73B5] rounded-md px-[1rem] py-[0.5rem] text-[#3B73B5]" : "px-[1rem] py-[0.5rem] bg-[#3B73B5] border-[2px] border-[#3B73B5] rounded-md text-[#fff]"}
          >
            {nav.name}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NotLogOrSignIn;
