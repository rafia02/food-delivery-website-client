import React from 'react';
import './BestTeam.css'
const BestTeam = () => {
    return (
        <div className='my-20'>
            <div>
                <h1 className='text-center text-lg text-rose-400 italic'>TEAM MEMBERS</h1>
                <h1 className='text-center text-4xl  font-bold tracking-widest' >Meet Our Best Team</h1>
            </div>




               <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-16 ml-6 gap-10'>
                    <div className=' pb-4 custom bg-[#F5F5F5] shadow-sm hover:bg-[#FFFFFF]'>
                        <img className='w-full' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/team1.png" alt="" />
                        <h1 className='text-2xl ml-2 font-semibold text-[#231900] mt-3 mb-3'>Alizeh Anderson</h1>
                        <p className='ml-2'>Senior Chef</p>
                    </div>


                    <div className=' pb-4 custom   shadow-sm hover:bg-[#FFFFFF]'>
                        <img className='w-full' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/team2.png" alt="" />
                        <h1 className='text-2xl font-semibold text-[#231900] mt-3 mb-3 ml-2'>Angelina John</h1>
                        <p className='ml-2'>Master Chef</p>
                    </div>
                       


                    <div className=' pb-4 custom   shadow-sm hover:bg-[#FFFFFF]'>
                        <img className='w-full' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/team3.png" alt="" />
                        <h1 className='text-2xl ml-2 font-semibold text-[#231900] mt-3 mb-3'>Andre Smith</h1>
                        <p className='ml-2'>Professor</p>
                    </div>





                    <div className=' pb-4 custom   shadow-sm hover:bg-[#FFFFFF]'>
                        <img className='w-full' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/team4.png" alt="" />
                        <h1 className='text-2xl font-semibold ml-2 text-[#231900] mt-3 mb-3'>Christina Chi</h1>
                        <p className='ml-2'>Psychologist</p>
                    </div>



                    
               </div>
        </div>
    );
};

export default BestTeam;