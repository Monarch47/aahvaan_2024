import React from "react";
import { useSwiper } from "swiper/react";

type Props = {};

const SwiperNextButton = (props: Props) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="z-[1] rounded-full bg-white text-black text-3xl shadow-xl hidden bloack md:w-8 md:h-8 lg:w-16 lg:h-16 md:flex items-center justify-center text-center absolute top-full md:top-1/2 right-4 transform -translate-y-1/2 hover:bg-black hover:text-white transition-all transition-1000ms"
    >{`>`}</button>
  );
};

export default SwiperNextButton;
