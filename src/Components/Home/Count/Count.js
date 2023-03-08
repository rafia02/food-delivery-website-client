import React from 'react';



const Count = () => {



    return (
        <div className=' w-full mx-auto mt-16 mb-24' >


           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ' >


           <div className=' flex flex-col  justify-center items-center '>
                 <img className='w-20' src="https://cdn.shopify.com/s/files/1/0267/5979/0615/files/icon-12.png?v=1614334585" alt="" />
                 <h1 className='text-3xl mt-3 font-medium text-[#3a3a3a]'>Menu Types</h1>
                 <h2 className='text-4xl mt-7 font-medium font-sans text-rose-400'>200</h2>    
            </div> 


            <div className=' flex flex-col  justify-center items-center '>
                 <img className='w-20' src="https://cdn.shopify.com/s/files/1/0267/5979/0615/files/icon-13.png?v=1614334585" alt="" />
                 <h1 className='text-3xl mt-3 font-medium text-[#3a3a3a]'>Different Origin</h1>
                 <h2 className='text-4xl mt-7 font-medium font-sans text-rose-400'>200</h2>    
            </div>


            <div className=' flex flex-col  justify-center items-center '>
                 <img className='w-20' src="https://cdn.shopify.com/s/files/1/0267/5979/0615/files/icon-14.png?v=1614334585" alt="" />
                 <h1 className='text-3xl mt-3 font-medium text-[#3a3a3a]'>Pasta & Noodles</h1>
                 <h2 className='text-4xl mt-7 font-medium font-sans text-rose-400'>200</h2>    
            </div> 


            <div className=' flex flex-col  justify-center items-center '>
                 <img className='w-20' src="https://cdn.shopify.com/s/files/1/0267/5979/0615/files/icon-11.png?v=1614334585" alt="" />
                 <h1 className='text-3xl mt-3 font-medium text-[#3a3a3a]'>Meals To Go</h1>
                 <h2 className='text-4xl mt-7 font-medium font-sans text-rose-400'>200</h2>    
            </div> 
           </div>



        </div>
    );
};

export default Count;