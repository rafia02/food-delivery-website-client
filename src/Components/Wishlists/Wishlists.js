import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Contex } from '../../Context/AuthProvider';
import Button from '../Share/Button/Button';
import Spinner from '../Share/Spinner/Spinner';
import WishlistSingle from './WishlistSingle';

const Wishlists = () => {
    const { user, loading } = useContext(Contex)


    const { data: wishlists = [], isLoading, refetch } = useQuery({
        queryKey: ["wishlists", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlistsProducts?email=${user?.email}`);
            const data = res.json()
            return data;
        }
    })

    console.log(wishlists)
    // if (isLoading) {
    //     return <Spinner></Spinner>
    // }


    return (
        <div>


            {
                wishlists.map((lists) => <WishlistSingle
                    key={lists._id}
                    lists={lists}
                    refetch={refetch}
                ></WishlistSingle>)
            }

            <div className="w-3/6 mx-auto md:w-2/6 my-20">
                <Link to="/wishlistsCheckOut">
                    <Button text="Process To Checkout"></Button>
                </Link>
            </div>
        </div>
    );
};

export default Wishlists;