import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/SingIn/LogIn";
import Register from "../Pages/SingUp/Register";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: 'login',
            element: <LogIn></LogIn>,
        },
        {
            path: 'register',
            element: <Register></Register>,
        },
        {
            path: 'blog',
            element: <Blog></Blog>,
        }
    ]
  },
]);

export default router;
