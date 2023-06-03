import React from 'react'

const HowWorkIt = () => {
  return (
    <div className='mt-10'>

      <h1 className='text-center text-4xl mb-24 text-[#6F6F6F] '>HOW IT WORKS</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-40'>
      


      <div className='flex flex-col justify-center items-center'>

        <img 
        className='w-1/6'
        src="http://madang.kenzap.com/wp-content/themes/madang/images/meal.svg" alt="" />

        <div className='w-3/5'>
            <h3 className='text-center my-8 text-[#6F6F6F] font-semibold text-2xl '>Choose Your Favorite</h3>
            <p className=' text-center text-[#6F6F6F] ' >Choose your favorite meals and order online or by phone. It's easy to customize your order.</p>
        </div>
      </div>



      <div className='flex flex-col justify-center items-center'>

         <img 
            className='w-1/6'
             src="http://madang.kenzap.com/wp-content/themes/madang/images/delivery.svg" alt="" />

      <div className='w-3/5'>
             <h3 className='text-center my-8 text-[#6F6F6F] font-semibold text-2xl '>We Deliver Your Meals</h3>
              <p className=' text-center text-[#6F6F6F] ' > We prepared and delivered meals arrive at your door. Duis autem vel eum iriure dolor in hendrerit in vulputate.</p>
        </div>
         </div>





          <div className='flex flex-col justify-center items-center'>

           <img 
            className='w-1/6'
            src="http://madang.kenzap.com/wp-content/themes/madang/images/eat-enjoy.svg" alt="" />

        <div className='w-3/5'>
               <h3 className='text-center my-8 text-[#6F6F6F] font-semibold text-2xl '>Eat And Enjoy</h3>
               <p className=' text-center text-[#6F6F6F] ' >No shooping, no cooking, no counting and no cleaning. Enjoy your healthy meals with your family.</p>
              </div>
         </div>


    </div>
    </div>
  )
}

export default HowWorkIt
