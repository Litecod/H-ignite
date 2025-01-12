import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router"
import MainLayout from "./Layouts/MainLayout"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App