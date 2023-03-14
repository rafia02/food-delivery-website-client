import React from 'react';

const TotalPrice = ({grandTotal, shipping, store}) => {
    return (
        <div>
            <div className='grid grid-cols-2 pl-16 mt-8 border-t-2'>
                        <h1>Subtotal : </h1>
                        <h2> ${store}.00</h2>
                    </div>

                    <div className='grid grid-cols-2 pl-16 mt-8 border-b-2 pb-6'>
                        <h1>Shipping :</h1>
                        <h2>${shipping}</h2>
                    </div>

                    <div className='grid font-bold grid-cols-2 pl-16 mt-8 pb-6'>
                        <h1>Grand Total :</h1>
                        <h2> USD ${grandTotal} </h2>
                    </div>
        </div>
    );
};

export default TotalPrice;