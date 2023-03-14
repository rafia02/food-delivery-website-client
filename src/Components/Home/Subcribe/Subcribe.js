import React from 'react';

const Subcribe = () => {
    return (
        <div>
             
             <div className='w-1/2 mx-auto my-20'>
                <h1 className='text-center text-3xl my-2 font-serif'>Stay Informed About Special Offers</h1>

                <p className='text-center text-xl mt-1 mb-4 ' >For Exclusive Deals, Coupons, News and More!</p>

                <div>
                <input type="text" placeholder="Email" className="input input-bordered w-3/4" />
                <input type="submit" value="subcribe" className='w-1/4 bg-rose-400 text-white font-bold py-2 rounded-tr-lg rounded-br-lg text-xl' />
                </div>
             </div>
        </div>
    );
};

export default Subcribe;