import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryItems from './CatagoryItems';

const CatagoryFoods = () => {
      const catagoris= useLoaderData()
      console.log(catagoris)




    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mt-12'>
            



             {
                catagoris.map( (catagori)=> <CatagoryItems
                 key={catagori._id}
                 catagori={catagori}
                ></CatagoryItems> )
             }



        </div>
    );
};

export default CatagoryFoods;