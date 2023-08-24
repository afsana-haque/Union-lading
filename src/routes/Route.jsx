import { createBrowserRouter,
} from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/elements/home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Verify_sond from "../pages/Verify_sond";
import ResetPassword from "../pages/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
    },
    {
      path:'login',
      element: <Login></Login>
    },
    {
        path: 'signup',
        element: <SignUp></SignUp>
    },
    {
        path: 'verifySond',
        element: <Verify_sond></Verify_sond>
    },
    {
        path: 'resetPassword',
        element: <ResetPassword></ResetPassword>
    }
    ]
  },
]);