import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";


const OneFood = ({item}) => {
    const {img, title} = item
    return (
        <div>

                <SwiperSlide>Slide 1
                   
                    <img src={img} alt="" />
                    
                </SwiperSlide>

        </div>
    );
};

export default OneFood;