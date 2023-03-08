import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from './Food';

const AllFoods = () => {
    const allFoods = useLoaderData()



    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mt-12'>
            {
                allFoods?.map(food => <Food
                    key={food._id}
                    food={food}

                ></Food>)
            }
                  
        </div>
    );
};

export default AllFoods;