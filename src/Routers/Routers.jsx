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
import UpdateDetails from "../Pages/Components/MyToys/UpdateDetails";
import ToyDetails from "../Pages/Components/AllToys/ToyDetails";

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
        path: "toys/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "my-toys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: 'add-toy',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>,  
      },
      {
        path: 'update-toy/:id',
        element: <PrivateRoute><UpdateDetails></UpdateDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/updateDetails/${params.id}`),
      }
    ],
  },
]);

export default router;
