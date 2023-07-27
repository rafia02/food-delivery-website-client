import React from 'react';
import'./Choose.css'

const Choose = () => {

    return (
        <div className='mt-44'>
           <h1 className='text-4xl font-serif mt-10 text-center '> WHY SHOP WITH US? </h1>


             
             <div className='w-4/5 mx-auto  image py-28  '>

                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>

                       <div className='bg-[#ffffff] shadow-lg py-10 px-8 rounded-tl-[80px] hover:rounded-tl-none rounded-br-[80px] hover:rounded-br-none ease-linear duration-700  hover:rounded-tr-[80px] hover:rounded-bl-[80px] '>
                           <img className='w-15 h-12 mb-6  ' src="https://foodfirst.org/wp-content/uploads/2022/04/support_icons_1.png" alt="" />
                           <h1 className='text-rose-400 font-bold' >Healthy Food Habit</h1>
                           <p className='font-normal mt-2 text-[#667687]' >Building a society & community with sound mind, mentality and health by developing healthy food habit</p>
                       </div>

                       <div className='bg-[#ffffff] shadow-md mt-8 pb-10 py-10 px-8    rounded-tl-[80px] hover:rounded-tl-none rounded-br-[80px] hover:rounded-br-none ease-linear duration-700  hover:rounded-tr-[80px] hover:rounded-bl-[80px] '>
                           <img className='w-15 h-12 mb-6'  src="https://foodfirst.org/wp-content/uploads/2022/04/support_icons_3.png" alt="" />
                           <h1 className='text-rose-400 font-bold'>Environmental safety</h1>
                           <p className='font-normal mt-2 text-[#667687]' >We always work on keeping a healthy environment for our employees. We dump and recycle our wastes in proper manner.</p>
                       </div>

                       <div className='bg-[#ffffff] shadow-md py-10 px-8  rounded-tl-[80px] hover:rounded-tl-none rounded-br-[80px] hover:rounded-br-none ease-linear duration-700  hover:rounded-tr-[80px] hover:rounded-bl-[80px] '>
                           <img className='w-15 h-12 mb-6'  src="https://foodfirst.org/wp-content/uploads/2022/04/support_icons_5.png" alt="" />
                           <h1 className='text-rose-400 font-bold'>Honesty & Integrity</h1>
                           <p className='font-normal mt-2 text-[#667687]' >Our aim is to earn halal income for our stakeholders through doing business with integrity & honestly in a fair manner.</p>
                       </div>


                  </div>







                  {/* 2 colam 1 row  */}

                  <div className='flex flex-col md:flex-row justify-between mt-10 mb-14'>

                  <div className='bg-[#ffffff] shadow-md w-full lg:w-1/3 py-10 px-8  rounded-tl-[80px] hover:rounded-tl-none rounded-br-[80px] hover:rounded-br-none ease-linear duration-700  hover:rounded-tr-[80px] hover:rounded-bl-[80px] '>
                           <img className='w-15 h-12 mb-6'  src="https://foodfirst.org/wp-content/uploads/2022/04/support_icons_4.png" alt="" />
                           <h1 className='text-rose-400 font-bold'> Pure and safe Grocery Store </h1>
                           <p className='font-normal mt-2 text-[#667687]' >We focus on ensuring sound health by delivering adulteration, additives & chemical free pure and safe grocery food at consumers’ doorstep.</p>
                       </div>
                       
                       
                       <div className='bg-[#ffffff] shadow-md w-full lg:w-1/3 py-10 px-8    rounded-tl-[80px] hover:rounded-tl-none rounded-br-[80px] hover:rounded-br-none ease-linear duration-700  hover:rounded-tr-[80px] hover:rounded-bl-[80px] '>
                           <img className='w-15 h-12 mb-6'  src="https://foodfirst.org/wp-content/uploads/2022/04/support_icons_6.png" alt="" />
                           <h1 className='text-rose-400 font-bold'>Quality Guaranteed</h1>
                           <p className='font-normal mt-2 text-[#667687]' >Who do you admire for standing up for what they believe in? Here's your chance to tell them and/or their family members.</p>
                       </div>
                  </div>


             </div>

        </div>
    );
};

export default Choose;