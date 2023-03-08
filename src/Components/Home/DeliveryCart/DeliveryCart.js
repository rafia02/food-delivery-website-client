import React from 'react';
import { useQuery } from 'react-query';

const DeliveryCart = () => {

    const {data: carts= [], isLoading, refetch} = useQuery({
        queryKey: ["showcarts"],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/showcarts')
            const data = res.json()
            return data
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default DeliveryCart;