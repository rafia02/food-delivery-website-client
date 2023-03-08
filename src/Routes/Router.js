import { createBrowserRouter } from "react-router-dom";
import AllFoodLayout from "../Components/AllFoods/AllFoodLayout";
import AllFoods from "../Components/AllFoods/AllFoods";
import CatagoryFoods from "../Components/AllFoods/FoodCatagory/CatagoryFoods";
import ItemsProduct from "../Components/Home/Catagory/ItemsProduct";
import Choose from "../Components/Home/Choose/Choose";
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
            path: '/',
            element: <Choose></Choose> 
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/singup",
            element: <Register></Register>
        },
        {
            path: '/allfood',
            loader:async()=> fetch('http://localhost:5000/allfood'),
            element: <AllFoods></AllFoods>
        },
        {
            path:"/allfoodlayout",
            element: <AllFoodLayout></AllFoodLayout>,
            children: [
                {
                    path: '/allfoodlayout',
                    loader:async()=> fetch('http://localhost:5000/allfood'),
                    element: <AllFoods></AllFoods>
                },
                {
                    path: "/allfoodlayout/food/:title",
                    element: <CatagoryFoods></CatagoryFoods>,
                    loader: async ({params}) => {
                        return fetch(`http://localhost:5000/itemsProducts/${params.title}`)
                    }
                }
            ]
        }
         
    ]}
])