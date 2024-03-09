import React from "react";
import { SportsIconsData } from "@/data";
type Props = {};

const renderSportIcons = SportsIconsData.map((sportIcon, index) => {
  return (
    <div
      key={index}
      className="flex flex-col justify-center items-center gap-4 text-black relative"
    >
      <img
        src={sportIcon.iconPath}
        className={`w-64 aspect-auto rounded-lg flex flex-col justify-center items-center relative z-[1] top-${sportIcon.styles.top} scale-125 -bottom-16`}
      />
      <img
        src={sportIcon.brushStrokePath}
        className={`w-64 h-[32rem] aspect-auto rounded-lg flex flex-col justify-center items-center absolute z-0 top-0 scale-125`}
      />
    </div>
  );
});

const SportsIconsBox = (props: Props) => {
  return (
    <div className="flex justify-center items-center overflow-hidden">
      {renderSportIcons}
    </div>
  );
};

export default SportsIconsBox;
