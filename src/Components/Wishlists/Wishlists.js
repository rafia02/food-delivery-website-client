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
            const res = await fetch(`https://food-delivery-website-server-ruby.vercel.app/wishlistsProducts?email=${user?.email}`);
            const data = res.json()
            return data;
        }
    })

    console.log(wishlists)
    if (isLoading) {
        return <Spinner></Spinner>
    }


    return (
        <div>


            {
                wishlists.length > 0 ?

                    <div>
                        <h1 className="text-3xl font-bold mt-2 text-center">Your wishlist Product</h1>

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

                    :


                    <div className='pb-10 px-5 shadow-md p-10 my-5 w-3/4 md:w-1/2 mx-auto'>

                        <h1 className="text-xl mb-5 font-bold text-center  ">Your wishlist is curently unavailable</h1>
                        <div className='w-2/3  mx-auto'>
                            <Link className='w-full' to="/foods"><Button text={"Continue Shopping"}></Button></Link>
                        </div>

                    </div>


            }

        </div>
    );
};

export default Wishlists;