import React, { useEffect, useRef, useState } from 'react';
import '../../../App.css'

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();

  const featuredProducts = [
    // "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg",
    // "https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/burger-fries.jpg?quality=82&strip=all",
    // "https://www.shutterstock.com/image-photo/variety-ice-cream-scoops-cones-600w-642062308.jpg",
    "https://assets.bonappetit.com/photos/6228c6754fefeeda72129a4f/16:9/w_4191,h_2357,c_limit/BA0422cake01.jpg",
    "https://www.allrecipes.com/thmb/IKNsbRltV8YzbkzKsSWr4_Gt2OM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6665215-e809c5685566417d86ace12860feae06.jpg",
    "https://www.polarbd.com/images/sliders/home/homeslide02.jpg",
    "https://www.polarbd.com/images/sliders/home/homeslide03.jpg",
    "https://www.modernfoods.co.in/wp-content/uploads/2017/12/plum-cake-banner.png",
    "https://www.winni.in/celebrate-relations/wp-content/uploads/2019/03/plum-cake.jpg"

  ];
  
  let count = 0;
  let slideInterval;
  
    const removeAnimation = () => {
      slideRef.current.classList.remove("sliderAnimation");
    };
   
    useEffect(() => {
      slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

      startSlider();
      return () => {
        pauseSlider();
      };
    }, []);



    const pauseSlider = () => {
      clearInterval(slideInterval);
    };
  
    const startSlider = () => {
      slideInterval =  setInterval(() => {
        handleOnNextClick();
      }, 4000);
    };

  
    const handleOnNextClick = () => {
      count = (count + 1) % featuredProducts.length;
      setCurrentIndex(count);
      slideRef.current.classList.add("sliderAnimation");
 
    };
    const handleOnPrevClick = () => {
      const productsLength = featuredProducts.length;
      count = (currentIndex + productsLength - 1) % productsLength;
      setCurrentIndex(count);
      slideRef.current.classList.add("sliderAnimation");

    };
  



  return (
    <div ref={slideRef} className="w-full select-none relative">
    <div className="w-full h-60 ">
      <img className='h-full w-full' src={featuredProducts[currentIndex]} alt="" />
    </div>

    <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
      <button
        className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        onClick={handleOnPrevClick}
      >
   
      </button>
      <button
        className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        onClick={handleOnNextClick}
      >

      </button>
    </div>
  </div>
  );
};

export default Banner;