import React, { useContext, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Contex } from '../../../Context/AuthProvider';
import Spinner from '../../Share/Spinner/Spinner';
import Cart from './Cart';

const DeliveryCart = () => {
    const {user, loading} = useContext(Contex)
    console.log(user)



    // useEffect(()=>{
    //     fetch(`http://localhost:5000/showcarts?email=${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data =>{
    //         console.log(data)
    //     })
    // },[user?.email])

    


    

    const {data: carts= [], isLoading, refetch} = useQuery({
        queryKey: ["showcarts", user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/showcarts?email=${user?.email}`)
            const data = res.json()
            return data
        }
    })

    console.log(carts)

    if(loading){
        return <Spinner></Spinner>
    }


    return (
        <div>
            <div>
                {
                    carts.map(crt =><Cart
                    key={crt._id}
                    crt={crt}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default DeliveryCart;