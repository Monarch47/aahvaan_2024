"use client";
// components/SwiperCarousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { SportsCarouselImages } from "../../data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import SwiperPrevButton from "./SwiperPrevButton";
import SwiperNextButton from "./SwiperNextButton";

const SportsCarousel = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      loop={true}
      modules={[Navigation]}
      className="w-full relative flex"
    >
      <SwiperPrevButton />
      {SportsCarouselImages.map((sportImage, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col justify-center items-center gap-4 text-black">
            <img
              src={sportImage.path}
              className={`w-64 aspect-auto rounded-lg flex flex-col justify-center items-center shadow-lg`}
              style={{ backgroundColor: sportImage.bgcolor }}
              alt={sportImage.text}
            />
            <h2 className="text-md lg:text-xl font-semibold text-center">
              {sportImage.text}
            </h2>
          </div>
        </SwiperSlide>
      ))}
      <SwiperNextButton />
    </Swiper>
  );
};

export default SportsCarousel;
