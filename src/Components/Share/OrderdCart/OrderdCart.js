import React from 'react';

const OrderdCart = ({lists}) => {
    return (
        <div className=' p-5 rounded-md bg-rose-50 grid grid-cols-1  mb-5'
            key={lists._id}
        >
            <div>
                <div className='w-full flex items-center md:items-start gap-x-8 md:gap-x-10'>
                    <div className='w-32 flex  h-16 '>
                        <img className='w-full h-full' src={lists.picture} alt="" />
                    </div>
                    <div className='w-40 md:w-48'>
                        <h1>{lists.title}</h1>

                    </div>
                    <div className=''>
                        <h1> $ {lists.price}, 00 </h1>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default OrderdCart;