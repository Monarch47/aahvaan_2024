import React from "react";
import { SportsMarqueeData } from "@/data";

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
};

const SportsMarquee = (props: Props) => {
  return (
    <div
      className={`${props.className} flex justify-evenly items-center py-0 md:py-2 text-md md:text-xl w-full z-[1] overflow-x-hidden gap-10 md:gap-2`}
    >
      {renderSportsMarqueeData}
    </div>
  );
};

export default SportsMarquee;
