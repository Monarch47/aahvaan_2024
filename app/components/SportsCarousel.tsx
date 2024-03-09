"use client";
// components/SwiperCarousel.tsx
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SportsCarouselImages } from "../../data";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const SportsCarousel = () => {
  return (
    <Swiper
      slidesPerView={4}
      navigation
      pagination
      spaceBetween={10}
      modules={[Navigation]}
      className="w-full relative"
    >
      {SportsCarouselImages.map((sportImage, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col justify-center items-center gap-4 text-black">
            <img
              src={sportImage.path}
              className={`w-64 aspect-auto rounded-lg flex flex-col justify-center items-center`}
              style={{ backgroundColor: sportImage.bgcolor }}
            />
            <h2>{sportImage.text}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SportsCarousel;
