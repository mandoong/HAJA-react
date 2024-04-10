import { Outlet, createBrowserRouter } from "react-router-dom";
import LayoutDefault from "../layouts/default";
import AboutId from "../pages/about/[id]";
import ProjectList from "../pages/projectList/index";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/index";

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
        path: "/about/:id",
        element: <AboutId />,
      },
      { path: "/project/list", element: <ProjectList /> },
      {
        path: "/signup",
        element: <Signup />,
      }, // 네브바와 연결 후 삭제 예정
    ],
  },
]);
