import ErrorPage from "../ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Root from "../Root";
import Profile from "../Profile/Profile";
import AddAssignment from "../Assignment/AddAssignment";
import Assignments from "../Assignment/Assignments";
import DetailAssignments from "../Assignment/DetailAssignments";
import MyAttempted from "../Assignment/MyAttempted";
import UpdateAssignments from "../Assignment/UpdateAssignments";

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
        },
        {
          path: '/assignments',
          element: <Assignments></Assignments>,
          loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/assignments`)
        },
        {
          path: '/assignment/:id',
          element: <DetailAssignments></DetailAssignments>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`)
        },
        {
          path: '/myattemptedassignments',
          element: <MyAttempted></MyAttempted>,
          loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/assignments`)
        },
        {
          path: '/update_assignment/:id',
          element: <UpdateAssignments></UpdateAssignments>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/update_assignment/${params.id}`)
        },
      ],
    },
  ]);
  
  export default router;