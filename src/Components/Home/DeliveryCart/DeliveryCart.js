import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Contex } from '../../../Context/AuthProvider';

const DeliveryCart = () => {
    const {user} = useContext(Contex)

    useEffect(()=>{
        fetch(`http://localhost:5000/showcarts?email=${user?.email}`)
    },[])

    // const {data: carts= [], isLoading, refetch} = useQuery({
    //     queryKey: ["showcarts", user?.email],
    //     queryFn: async()=>{
    //         const res = await fetch(`http://localhost:5000/showcarts?email=${user?.email}`)
    //         const data = res.json()
    //         return data
    //     }
    // })

    // console.log(carts)
    return (
        <div>
            
        </div>
    );
};

export default DeliveryCart;