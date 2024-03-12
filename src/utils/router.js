import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AboutPage from "../pages/about";

export const useRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);
