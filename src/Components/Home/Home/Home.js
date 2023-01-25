import React from 'react';
import Banner from '../Banner/Banner';






const Home = () => {



    return (
        <div className='flex flex-col md:flex-row'>


           <div className='border w-full md:w-3/4 border-red-400'>
            <Banner></Banner>
            
           </div>






           <div className='border  w-full md:w-1/4 mt-10 md:mt-0 border-violet-500'>
               <h1>Product images</h1>
               <h1>Product images</h1>
               <h1>Product images</h1>
               <h1>Product images</h1>

                <h1>Manu bar</h1>
           </div>





        </div>
    );
};

export default Home;