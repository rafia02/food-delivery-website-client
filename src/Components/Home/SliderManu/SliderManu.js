import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";




const SliderManu = () => {



  return (
    
    <>
    <h1 className="text-3xl my-4 ml-3">RELATED PRODUCTS</h1>

      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide className="ml-3 w-full ">
            <img
            className="w-3/4 h-[230px]" 
            src="http://madang.kenzap.com/wp-content/uploads/2016/11/shutterstock_251690740-290x290.jpeg" alt="" />
            <p className=" mt-2 text-[#6EC070] font-semibold text-xl text-center">TOFU CHEESE</p>
            <p className="text-center text-lg">Naturally Brewed Cheese</p>
        </SwiperSlide>

        <SwiperSlide className="ml-3 w-full ">
            <img
            className="w-3/4 h-[230px]"
             src="http://madang.kenzap.com/wp-content/uploads/2016/11/shutterstock_2735862711-600x401.jpeg" alt="" />
            <p className=" mt-2 text-[#6EC070] font-semibold text-xl text-center">EGGS & VEGETABLES</p>
            <p className="text-center text-lg"> Protein Rich Breakfast</p>
        </SwiperSlide>


        <SwiperSlide className="ml-3 w-3/4">
            <img
            className="w-3/4 h-[230px]" 
            src="http://madang.kenzap.com/wp-content/uploads/2016/11/food-1.jpg" alt="" />
            <p className=" mt-2 text-[#6EC070]  font-semibold text-xl text-center">BAKED SALMON</p>
            <p className="text-center text-lg">Fresh From Atlantic Ocean</p>
        </SwiperSlide>

        <SwiperSlide className="ml-3">
            <img
            className="w-3/4 h-[230px]"
             src="http://madang.kenzap.com/wp-content/uploads/2016/11/menu-img3.jpg" alt="" />
            <p className=" mt-2 text-[#6EC070] font-semibold text-xl text-center">VEGETABLE SALAD</p>
            <p className="text-center text-lg">With Madagascar Paprika</p>
        </SwiperSlide>


        <SwiperSlide className="ml-3">
            <img
            className="w-3/4 h-[230px]" 
            src="http://madang.kenzap.com/wp-content/uploads/2016/11/shutterstock_251208661-600x400.jpeg" alt="" />
            <p className=" mt-2 text-[#6EC070] font-semibold text-xl text-center"> JAPANESE SAUTE</p>
            <p className="text-center text-lg">Oven Baked Oil Free</p>
        </SwiperSlide>







        <SwiperSlide className="ml-3 w-full ">
            <img
            className="w-3/4 h-[230px]" 
            src="http://madang.kenzap.com/wp-content/uploads/2016/11/shutterstock_251690740-290x290.jpeg" alt="" />
            <p className=" mt-2 text-[#6EC070] font-semibold text-xl text-center">TOFU CHEESE</p>
            <p className="text-center text-lg">Naturally Brewed Cheese</p>
        </SwiperSlide>

        <SwiperSlide className="ml-3 w-full ">
            <img
            className="w-3/4 h-[230px]"
             src="http://madang.kenzap.com/wp-content/uploads/2016/11/shutterstock_2735862711-600x401.jpeg" alt="" />
            <p className=" mt-2 text-[#6EC070] font-semibold text-xl text-center">EGGS & VEGETABLES</p>
            <p className="text-center text-lg"> Protein Rich Breakfast</p>
        </SwiperSlide>


        <SwiperSlide className="ml-3 w-3/4">
            <img
            className="w-3/4 h-[230px]" 
            src="http://madang.kenzap.com/wp-content/uploads/2016/11/food-1.jpg" alt="" />
            <p className=" mt-2 text-[#6EC070]  font-semibold text-xl text-center">BAKED SALMON</p>
            <p className="text-center text-lg">Fresh From Atlantic Ocean</p>
        </SwiperSlide>

        <SwiperSlide className="ml-3">
            <img
            className="w-3/4 h-[230px]"
             src="http://madang.kenzap.com/wp-content/uploads/2016/11/menu-img3.jpg" alt="" />
            <p className=" mt-2 text-[#6EC070] font-semibold text-xl text-center">VEGETABLE SALAD</p>
            <p className="text-center text-lg">With Madagascar Paprika</p>
        </SwiperSlide>


        <SwiperSlide className="ml-3">
            <img
            className="w-3/4 h-[230px]" 
            src="http://madang.kenzap.com/wp-content/uploads/2016/11/shutterstock_251208661-600x400.jpeg" alt="" />
            <p className=" mt-2 text-[#6EC070] font-semibold text-xl text-center"> JAPANESE SAUTE</p>
            <p className="text-center text-lg">Oven Baked Oil Free</p>
        </SwiperSlide>





        
      </Swiper>
    </>
  )
}

export default SliderManu
