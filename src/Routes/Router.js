import { createBrowserRouter } from "react-router-dom";
import AllFoodLayout from "../Components/AllFoods/AllFoodLayout";
import AllFoods from "../Components/AllFoods/AllFoods";
import CatagoryFoods from "../Components/AllFoods/FoodCatagory/CatagoryFoods";
import ItemsProduct from "../Components/Home/Catagory/ItemsProduct";
import Choose from "../Components/Home/Choose/Choose";
import CartCheckOut from "../Components/Home/DeliveryCart/CartCheckOut";
import DeliveryCart from "../Components/Home/DeliveryCart/DeliveryCart";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Share/User/Login";
import Register from "../Components/Share/User/Register";
import CheckOut from "../Components/Wishlists/CheckOut";
import Wishlists from "../Components/Wishlists/Wishlists";
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
            path: "/cart",
            element: <DeliveryCart></DeliveryCart>
        },
        {
            path: '/allfood',
            loader:async()=> fetch('https://food-delivery-website-server-ruby.vercel.app/allfood'),
            element: <AllFoods></AllFoods>
        },
        {
            path:'/wishlists',
            element: <Wishlists></Wishlists>
        },
        {
            path: "/wishlistsCheckOut",
            element: <CheckOut></CheckOut>
        },
        {
            path: "/cartCheckOut",
            element: <CartCheckOut></CartCheckOut>
        },
        {
            path:"/foods",
            element: <AllFoodLayout></AllFoodLayout>,
            children: [
                {
                    path: '/foods',
                    loader:async()=> fetch('https://food-delivery-website-server-ruby.vercel.app/allfood'),
                    element: <AllFoods></AllFoods>
                },
                {
                    path: "/foods/food/:title",
                    element: <CatagoryFoods></CatagoryFoods>,
                    loader: async ({params}) => {
                        return fetch(`https://food-delivery-website-server-ruby.vercel.app/itemsProducts/${params.title}`)
                    }
                }
            ]
        }
         
    ]}
])