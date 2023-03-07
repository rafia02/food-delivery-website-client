import React from 'react';
import { useContext } from 'react';
import { Contex } from '../../../Context/AuthProvider';
import SingleProduct from './SingleProduct';



const ItemsProduct = () => {
    const {itemsManue} = useContext(Contex)



    



    return (
        <div>
           
            {/* <h1 className='text-3xl font-bold text-center text-orange-500 my-5'> All Manue Items </h1> */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    itemsManue.map(manue =><SingleProduct
                    key={manue._id}
                    manue={manue}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default ItemsProduct;