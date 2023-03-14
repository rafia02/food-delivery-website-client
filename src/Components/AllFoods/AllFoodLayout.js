import React from 'react';
import { Link,  Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const AllFoodLayout = () => {

     const {data:catagorisName=[], isLoading}= useQuery({
        queryKey:["catagorisName"],
        queryFn: async ()=> {
            const res = await fetch('https://food-delivery-website-server-ruby.vercel.app/catagorisName')
            const data = await res.json()
            return data;
        }
     })



    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                       
                     {
                        catagorisName.map((name)=><li
                         key={name._id}
                        >
                            <Link to={`/foods/food/${name.title}`}>{name.title}</Link>
                        </li> )
                     }


                    
                </ul>

            </div>
        </div>
    );
};

export default AllFoodLayout;