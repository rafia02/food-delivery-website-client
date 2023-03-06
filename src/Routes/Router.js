import { createBrowserRouter } from "react-router-dom";
import ItemsProduct from "../Components/Home/Catagory/ItemsProduct";
import Home from "../Components/Home/Home/Home";
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
            element: <ItemsProduct></ItemsProduct>,
            loader: async ( {params} ) =>{
                return fetch(`http://localhost:5000/itemsProducts/${params.title}`)
            }
        }
         
    ]}
])