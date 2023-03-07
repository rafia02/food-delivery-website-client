import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from './Food';

const AllFoods = () => {
    const allFoods = useLoaderData()
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {
                allFoods.map(food => <Food
                    key={food._id}
                    food={food}

                ></Food>)
            }
        </div>
    );
};

export default AllFoods;