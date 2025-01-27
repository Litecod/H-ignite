import Footer from "../Pages/FooterPage";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
