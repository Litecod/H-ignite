import { Outlet } from "react-router";
import SideBar from "../Component/SideBar";
import FooterService from "../Component/FooterService";

const ServiceLayout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
      <FooterService />
    </>
  );
};

export default ServiceLayout;
