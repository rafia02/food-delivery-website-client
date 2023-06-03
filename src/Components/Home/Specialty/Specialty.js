import React from 'react'

const Specialty = () => {
  return (
    <div className='flex flex-col md:flex-row my-32'>
    

       <div className=' w-full flex justify-center'>
        <img
        className='w-3/4  my-14 md:my-0' 
        src="https://jimmie.qodeinteractive.com/wp-content/uploads/2022/12/h2-img-03.png" alt="" />
       </div>



       <div className='w-full flex justify-center  flex-col items-start'>
          <div className=' w-full md:w-3/5 mt-10 md:mt-0'>
                  <h3 className='text-5xl font-bold text-center md:text-start'>The Specialty Of The House</h3>
                  <p className='my-6 text-center md:text-start '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ea laudantium mollitia alias minima officiis atque hic praesentium dicta illum nesciunt iure reprehenderit, laboriosam libero?</p>
                  <button className='text-white ml-60 md:ml-0 my-10 md:my-0 bg-rose-400 font-bold rounded py-4 px-4'>ORDER NOW</button>
          </div>
       </div>
    </div>
  )
}

export default Specialty
