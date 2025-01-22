import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router"
import MainLayout from "./Layouts/MainLayout"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import Contact from "./Pages/Contact"
import AboutUsPage from "./Pages/AboutUsPage"
import ServicePage from "./Pages/ServicePage"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<RegisterPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App