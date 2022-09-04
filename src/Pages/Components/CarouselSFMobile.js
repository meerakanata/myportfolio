import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import ViewCaseButton from "./ViewCaseButton";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import ViewButtonMobile from "./ViewButtonMobile";

export default function CarouselSFMobile() {
    let navigate = useNavigate();
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiperMobile"
      >
        <SwiperSlide> <img className="SF_Slide" src=".././Images/SugarFlower/Carousel/Slide1_mobile.png" alt="slide 1"/></SwiperSlide>
        <SwiperSlide> <img className="SF_Slide" src=".././Images/SugarFlower/Carousel/Slide2_mobile.png" alt="slide 2"/></SwiperSlide>
        <SwiperSlide> <img className="SF_Slide" src=".././Images/SugarFlower/Carousel/Slide3_mobile.png" alt="slide 3"/></SwiperSlide>
        <SwiperSlide> <img className="SF_Slide" src=".././Images/SugarFlower/Carousel/Slide4_mobile.png" alt="slide 4"/></SwiperSlide>
      </Swiper>
    </>
  );
}