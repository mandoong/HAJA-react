import { Outlet, createBrowserRouter } from "react-router-dom";
import LayoutDefault from "../layouts/default";
import AboutId from "../pages/about/[id]";
import ProjectList from "../pages/projectList/index";
import Signup from "../pages/signup/index";
import Home from "../pages/home/index";
import ProjectDetail from "../pages/projectDetail/index";
import ProjectApply from "../pages/projectApply/index";

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
      { path: "/project/detail", element: <ProjectDetail /> },
      { path: "/project/Apply", element: <ProjectApply /> },
      {
        path: "/signup",
        element: <Signup />,
      }, // 네브바와 연결 후 삭제 예정
    ],
  },
]);
