import React, { useContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Contex } from '../../../Context/AuthProvider';
import Spinner from '../../Share/Spinner/Spinner';
import Cart from './Cart';
import Button from '../../Share/Button/Button'

const DeliveryCart = () => {
    // const [carts, setCarts] = useState()

    const { user, loading } = useContext(Contex)




    // useEffect(()=>{
    //     fetch(`http://localhost:5000/showcarts?email=${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data =>{
    //         console.log(data)
    //         setCarts(data)
    //     })
    // },[user?.email])






    const { data: carts = [], isLoading, refetch } = useQuery({
        queryKey: ["showcarts", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/showcarts?email=${user?.email}`)
            const data = res.json()
            return data
            refetch()
            
            
            
        }
    })



    if (loading) {
        return <Spinner></Spinner>
    }


    return (



        <div className="">
            <h1 className="text-3xl font-bold mt-2 text-center">Your Cart Product</h1>

            {
                carts ?
                    <div>
                        {
                            carts.map(crt => <Cart
                                key={crt._id}
                                crt={crt}
                            ></Cart>)
                        }
                    </div>
                    :
                    <div className='pb-10 px-5'>

                        <h1 className="text-xl mb-5 font-bold text-center">Your cart is curently unavailable</h1>
                        <Button text={"Continue Shopping"}></Button>

                    </div>

            }






        </div>



    );
};

export default DeliveryCart;