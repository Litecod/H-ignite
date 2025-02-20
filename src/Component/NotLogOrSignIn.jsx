import { NavLink } from "react-router";

const NotLogOrSignIn = () => {
  const navs = [
    { id: 1, name: "Log In", link: "/login" },
    { id: 2, name: "Sign Up", link: "/signin" },
  ];
  return (
    <ul className="flex gap-[1rem] lg:gap-[2rem] items-center text-[1.2rem]">
      {navs.map((nav) => {
        return (
          <NavLink
            key={nav.id}
            to={nav.link}
            className={({isActive}) => !isActive ? "border-[2px] border-[#3B73B5] rounded-md px-[0.5rem] sm:px-[1rem] py-[0.3rem] lg:py-[0.5rem] text-[#3B73B5] text-[0.8rem] sm:text-[1rem]" : "px-[0.5rem] smpx-[1rem] py-[0.3rem] lg:py-[0.5rem] bg-[#3B73B5] border-[2px] border-[#3B73B5] rounded-md text-[#fff] text-[0.8rem] sm:text-[1rem]"}
          >
            {nav.name}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NotLogOrSignIn;
