// components/SwiperCarousel.tsx
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SportsCarouselImages } from "../../data";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

interface SwiperCarouselProps {
  images: string[];
}

const SportsCarousel: React.FC<SwiperCarouselProps> = () => {
  return (
    <Swiper
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={10}
      modules={[Navigation]}
    >
      {SportsCarouselImages.map((sportImage, index) => (
        <SwiperSlide key={index}>
          <img src={sportImage.path} className="w-full h-full object-cover" />
          <h2>{sportImage.text}</h2>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SportsCarousel;
