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
import PendingPage from "../Assignment/PendingPage";
import MarkingPage from "../Assignment/MarkingPage";
import Private from "../Private/Private"
import Motion from "../Motion";
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
          element: <Private><AddAssignment></AddAssignment></Private>
        },
        {
          path: '/assignments',
          element: <Assignments></Assignments>,
        },
        {
          path: '/assignment/:id',
          element: <Private><DetailAssignments></DetailAssignments></Private>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`)
        },
        {
          path: '/myattemptedassignments',
          element: <Private><MyAttempted></MyAttempted></Private>,
          loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/assignments`)
        },
        {
          path: '/update_assignment/:id',
          element: <UpdateAssignments></UpdateAssignments>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/update_assignment/${params.id}`)
        },
        {
          path: '/pendingassignments',
          element: <Private><PendingPage></PendingPage></Private>
        },
        {
          path: '/marking/:id',
          element: <MarkingPage></MarkingPage>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/marking/${params.id}`)
        },
        {
          path:'/motion',
          element:  <Motion></Motion>
        }
      ],
    },
  ]);
  
  export default router;