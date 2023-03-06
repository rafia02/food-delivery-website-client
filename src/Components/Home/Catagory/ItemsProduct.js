import React from 'react';
import { useContext } from 'react';
import { Contex } from '../../../Context/AuthProvider';
import SingleProduct from './SingleProduct';



const ItemsProduct = () => {
    const {itemsManue} = useContext(Contex)

    console.log(itemsManue)

    



    return (
        <div>
           
            <h1> items products </h1>
            <div className='grid grid-cols-3 gap-5'>
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