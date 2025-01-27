import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Contact from "./Pages/ContactPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ServiceLayout from "./Layouts/ServiceLayout";
import Dasboard from "./Pages/DasboardPage";
import FooterLayout from "./Layouts/FooterLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<FooterLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<RegisterPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Route>
        <Route path="/" element={<ServiceLayout />}>
          <Route path="/dasboard" element={<Dasboard />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
