import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Contex } from '../../Context/AuthProvider';
import Spinner from '../Share/Spinner/Spinner';
import WishlistSingle from './WishlistSingle';

const Wishlists = () => {
    const {user, loading}= useContext(Contex)
    

    const {data: wishlists=[], isLoading, refetch }= useQuery({
        queryKey: ["wishlists", user?.email ],
        queryFn: async ()=> {
            const res= await fetch(`http://localhost:5000/wishlistsProducts?email=${user?.email}`);
            const data= res.json()
            return data;
        }
    })

    console.log(wishlists)
    if( isLoading ){
        return <Spinner></Spinner>
    }
   

    return (
        <div>
            <h1>Wishlists products</h1> 

            {
                wishlists.map((lists)=> <WishlistSingle
                key={lists._id}
                ></WishlistSingle> )
            }
        </div>
    );
};

export default Wishlists;