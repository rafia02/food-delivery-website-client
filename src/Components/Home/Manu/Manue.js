import React from 'react';
import burger from '../../../ManuImage/Burger.jpeg';
import burger2 from '../../../ManuImage/buger2-removebg-preview.png'
const Manue = () => {


    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-6'>
           
           <div>
              <img src={burger2} alt="" />
           </div>

           <div>
              <img src={burger2} alt="" />
           </div>

           <div>
              <img src={burger2} alt="" />
           </div>

           <div>
              <img src={burger2} alt="" />
           </div>

           <div>
              <img src={burger2} alt="" />
           </div>

           <div>
              <img src={burger2} alt="" />
           </div>

        </div>
    );
};

export default Manue;