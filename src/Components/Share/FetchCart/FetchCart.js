import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Contex } from '../../../Context/AuthProvider';


const FetchCart = () => {
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
    const { user } = useContext(Contex)
    
    const [data, setData] = useState([])

        useEffect(() => {
            fetch(`https://food-delivery-website-server-ruby.vercel.app/showcarts?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    forceUpdate()
                    setData(data)
                })
        }, [user?.email, reducerValue])

        return data 
};

export default FetchCart;