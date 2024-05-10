import ErrorPage from "../ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Root from "../Root";
import Profile from "../Profile/Profile";
import AddAssignment from "../Assignment/AddAssignment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/registration",
          element: <Register></Register>,
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        },
        {
          path: '/addassignments',
          element: <AddAssignment></AddAssignment>
        }
      ],
    },
  ]);
  
  export default router;