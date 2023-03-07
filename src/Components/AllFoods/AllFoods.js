import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllFoods = () => {
    const allFoods = useLoaderData()
    console.log(allFoods)
    return (
        <div>
            
        </div>
    );
};

export default AllFoods;