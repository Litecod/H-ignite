import { Outlet } from "react-router";
import SideBar from "../Component/SideBar";

const ServiceLayout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default ServiceLayout;
