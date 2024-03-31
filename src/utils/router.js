import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "../pages/about/index";
import LayoutDefault from "../layouts/default";
import AboutId from "../pages/about/[id]";
import Home from "../pages/projectList/index";

export default createBrowserRouter([
  {
    element: (
      <LayoutDefault>
        <Outlet />
      </LayoutDefault>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about/:id",
        element: <AboutId />,
      },
    ],
  },
]);
