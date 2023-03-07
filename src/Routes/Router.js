import { createBrowserRouter } from "react-router-dom";
import ItemsProduct from "../Components/Home/Catagory/ItemsProduct";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Share/User/Login";
import Register from "../Components/Share/User/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {path: '/',
     element: <Main></Main>, 
     children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/singup",
            element: <Register></Register>
        }
         
    ]}
])