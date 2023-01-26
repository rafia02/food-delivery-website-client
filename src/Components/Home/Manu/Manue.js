import React from 'react';
import burger from '../../../ManuImage/Burger.jpeg';
import burger2 from '../../../ManuImage/buger2-removebg-preview.png';
import { IconName, FaAngleRight } from "react-icons/fa";

const Manue = () => {

    const imgs=[
        {name:'Burger', image:burger2, icon:FaAngleRight},
        {name:'Pizza', image:burger2, icon:FaAngleRight},
        {name:'Ice crem', image:burger2, icon:FaAngleRight},
        {name:'photato', image:burger2, icon:FaAngleRight},
        {name:'Burger', image:burger2, icon:FaAngleRight},
        {name:'Burger', image:burger2, icon:FaAngleRight},
    ]



//  <img className='w-44 hover:bg-violet-400'  src={im} key={i} alt="" />

    return (
        <div className=' w-full  flex flex-row overflow-y-auto  lg:overflow-hidden'>                 
             {
                imgs.map((item, i)=> <img className='w-44' src={item.image} alt="" /> )
             } 
        </div>
    );
};

export default Manue;