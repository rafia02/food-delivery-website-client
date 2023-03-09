import React from 'react';
import'./Choose.css'

const Choose = () => {

    return (
        <div className='mt-16'>
           <h1 className='text-4xl font-serif mt-10 text-center '> Choose a Way to Support Food First </h1>


             
             <div className='w-4/5 mx-auto  image py-28  '>

                  <div className='flex justify-between gap-7 '>

                       <div className='bg-[#ffffff] shadow-lg py-10 px-8 rounded-tl-[80px] hover:rounded-tl-none rounded-br-[80px] hover:rounded-br-none ease-linear duration-700  hover:rounded-tr-[80px] hover:rounded-bl-[80px] '>
                           <img className='w-15 h-12 mb-6  ' src="https://foodfirst.org/wp-content/uploads/2022/04/support_icons_1.png" alt="" />
                           <h1 className='text-rose-400 font-bold' >ONE-TIME GIFT</h1>
                           <p className='font-normal mt-2 text-[#667687]' >We'll put your tax deductible gift to work right away to support grassroots movements and organizers.</p>
                       </div>

                       <div className='bg-[#ffffff] shadow-md mt-8 pb-10 py-10 px-8    rounded-tl-[80px] hover:rounded-tl-none rounded-br-[80px] hover:rounded-br-none ease-linear duration-700  hover:rounded-tr-[80px] hover:rounded-bl-[80px] '>
                           <img className='w-15 h-12 mb-6'  src="https://foodfirst.org/wp-content/uploads/2022/04/support_icons_3.png" alt="" />
                           <h1 className='text-rose-400 font-bold'>MONTHLY DONATION</h1>
                           <p className='font-normal mt-2 text-[#667687]' >For as little as $3 a month you can join our Sustainer's Circle. This helps Food First plan ahead and accomplish even more.</p>
                       </div>

                       <div className='bg-[#ffffff] shadow-md py-10 px-8  rounded-tl-[80px] hover:rounded-tl-none rounded-br-[80px] hover:rounded-br-none ease-linear duration-700  hover:rounded-tr-[80px] hover:rounded-bl-[80px] '>
                           <img className='w-15 h-12 mb-6'  src="https://foodfirst.org/wp-content/uploads/2022/04/support_icons_5.png" alt="" />
                           <h1 className='text-rose-400 font-bold'>LIVING LEGACY</h1>
                           <p className='font-normal mt-2 text-[#667687]' >With a legacy donation you can make a much larger donation than you could afford to give during your lifetime.</p>
                       </div>


                  </div>







                  {/* 2 colam 1 row  */}

                  <div className='flex justify-between mt-10 mb-14'>

                  <div className='bg-[#ffffff] shadow-md w-1/3 py-10 px-8  rounded-tl-[80px] hover:rounded-tl-none rounded-br-[80px] hover:rounded-br-none ease-linear duration-700  hover:rounded-tr-[80px] hover:rounded-bl-[80px] '>
                           <img className='w-15 h-12 mb-6'  src="https://foodfirst.org/wp-content/uploads/2022/04/support_icons_4.png" alt="" />
                           <h1 className='text-rose-400 font-bold'> DONATING STOCK </h1>
                           <p className='font-normal mt-2 text-[#667687]' >Donating highly appreciated stock allows you to avoid capital gains tax on it.</p>
                       </div>
                       
                       
                       <div className='bg-[#ffffff] shadow-md  w-1/3 py-10 px-8    rounded-tl-[80px] hover:rounded-tl-none rounded-br-[80px] hover:rounded-br-none ease-linear duration-700  hover:rounded-tr-[80px] hover:rounded-bl-[80px] '>
                           <img className='w-15 h-12 mb-6'  src="https://foodfirst.org/wp-content/uploads/2022/04/support_icons_6.png" alt="" />
                           <h1 className='text-rose-400 font-bold'>FOR YOUR LOVED ONES</h1>
                           <p className='font-normal mt-2 text-[#667687]' >Who do you admire for standing up for what they believe in? Here's your chance to tell them and/or their family members.</p>
                       </div>
                  </div>


             </div>

        </div>
    );
};

export default Choose;