import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router"
import MainLayout from "./Layouts/MainLayout"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<RegisterPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App