import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Contex } from '../../../Context/AuthProvider';

const FetchCart = () => {
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
    const { user } = useContext(Contex)
    const [data, setData] = useState([])

        useEffect(() => {
            fetch(`http://localhost:5000/showcarts?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    forceUpdate()
                    setData(data)
                })
        }, [user?.email, reducerValue])

        return data 
};

export default FetchCart;