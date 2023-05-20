import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/SingIn/LogIn";
import Register from "../Pages/SingUp/Register";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/Components/AllToys/AllToys";
import MyToys from "../Pages/Components/MyToys/MyToys";
import AddToys from "../Pages/Components/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "my-toys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: 'add-toy',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>,  
      }
    ],
  },
]);

export default router;
