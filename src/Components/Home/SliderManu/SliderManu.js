import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const datas = [
  {
    img: "http://madang.kenzap.com/wp-content/uploads/2016/11/shutterstock_251690740-290x290.jpeg",
    name: "TOFU CHEESE",
    title: "Naturally Brewed Cheese"
  },
  {
    img: "http://madang.kenzap.com/wp-content/uploads/2016/11/shutterstock_2735862711-600x401.jpeg",
    name: "EGGS & VEGETABLES",
    title: "Protein Rich Breakfast"
  },
  {
    img: "http://madang.kenzap.com/wp-content/uploads/2016/11/food-1.jpg",
    name: "BAKED SALMON",
    title: "Fresh From Atlantic Ocean"
  },
  {
    img: "http://madang.kenzap.com/wp-content/uploads/2016/11/menu-img3.jpg",
    name: "VEGETABLE SALAD",
    title: "With Madagascar Paprika"
  },
  {
    img: "http://madang.kenzap.com/wp-content/uploads/2016/11/shutterstock_251208661-600x400.jpeg",
    name: "JAPANESE SAUTE",
    title: "Oven Baked Oil Free"
  },
  {
    img: "http://madang.kenzap.com/wp-content/uploads/2016/11/shutterstock_251690740-290x290.jpeg",
    name: "TOFU CHEESE",
    title: "Naturally Brewed Cheese"
  },
  {
    img: "http://madang.kenzap.com/wp-content/uploads/2016/11/shutterstock_2735862711-600x401.jpeg",
    name: "EGGS & VEGETABLES",
    title: " Protein Rich Breakfast"
  },
  {
    img: "http://madang.kenzap.com/wp-content/uploads/2016/11/food-1.jpg",
    name: "BAKED SALMON",
    title: "Fresh From Atlantic Ocean"
  },
  {
    img: "http://madang.kenzap.com/wp-content/uploads/2016/11/menu-img3.jpg",
    name: "VEGETABLE SALAD",
    title: "With Madagascar Paprika"
  },
  {
    img: "http://madang.kenzap.com/wp-content/uploads/2016/11/shutterstock_251208661-600x400.jpeg",
    name: "JAPANESE SAUTE",
    title: "Oven Baked Oil Free"
  }
]


const SliderManu = () => {



  return (
    <div className="mx-5">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >

        {
          datas.map(d => <SwiperSlide className=" w-full border rounded ">
            <div className="w-full">
              <img
                className="w-full h-[230px]"
                src={d.img} alt="" />
            </div>
            <div className="p-5">
              <p className=" mt-2  text-[#6EC070] font-semibold text-xl text-start">{d.name}</p>
              <p className="text-start text-sm lg:text-lg">{d.title}</p>
            </div>
          </SwiperSlide>)
        }












      </Swiper>
    </div>
  )
}

export default SliderManu
