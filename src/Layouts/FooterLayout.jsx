import Footer from "../Pages/FooterPage";
import { Outlet } from "react-router";

const FooterLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default FooterLayout;
