import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AboutPage from "../pages/about";
import Signup from "../pages/signup/Signup";

export const useRouter = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <AboutPage />,
	},
	{
		path: "/signup",
		element: <Signup />,
	}, // 네브바와 연결 후 삭제 예정
]);
