import React from "react";
import { SportsMarqueeData } from "@/data";

const renderSportsMarqueeData = SportsMarqueeData.map((sportMarquee, index) => {
  return (
    <div
      key={index}
      className="flex justify-center items-center text-center gap-2"
    >
      <h2>{sportMarquee}</h2>
      <h2 className="font-black text-2xl">.</h2>
    </div>
  );
});

type Props = {
  className: string;
};

const SportsMarquee = (props: Props) => {
  return (
    <div
      className={`${props.className} flex justify-evenly items-center py-2 text-xl absolute w-full z-[1]`}
    >
      {renderSportsMarqueeData}
    </div>
  );
};

export default SportsMarquee;
