import React from "react";
import { SportsMarqueeData } from "@/data";
import Marquee from "react-fast-marquee";

const renderSportsMarqueeData = SportsMarqueeData.map((sportMarquee, index) => {
  return (
    <div
      key={index}
      className="flex justify-center items-center text-center gap-10"
    >
      <h2>{sportMarquee}</h2>
      <h2 className="font-black text-2xl flex items-center justify-center relative top-1/2">
        ·
      </h2>
    </div>
  );
});

type Props = {
  className: string;
  marqueeProps: {
    gradient: boolean;
    gradientColor: string;
    gradientWidth: number;
    autoFill: boolean;
    direction: "left" | "right" | "up" | "down";
  };
};

const SportsMarquee = (props: Props) => {
  return (
    <Marquee
      gradient={props.marqueeProps.gradient}
      gradientColor={props.marqueeProps.gradientColor}
      gradientWidth={props.marqueeProps.gradientWidth}
      autoFill={props.marqueeProps.autoFill}
      direction={props.marqueeProps.direction}
      speed={20}
      pauseOnClick={true}
      pauseOnHover={true}
    >
      <div
        className={`${props.className} flex justify-evenly items-center py-0 md:py-2 text-md md:text-xl w-full z-[1] overflow-x-hidden gap-10 md:gap-10`}
      >
        {renderSportsMarqueeData}
      </div>
    </Marquee>
  );
};

export default SportsMarquee;
