import React from "react";
import { SportsIconsData } from "@/data";
type Props = {};

const renderSportIcons = SportsIconsData.map((sportIcon, index) => {
  return (
    <div
      key={index}
      className="flex flex-col justify-center items-center gap-4 text-black relative lg:top-6 xl:top-20"
    >
      <img
        src={sportIcon.iconPath}
        className={`w-64 relative z-[1] top-${sportIcon.styles.top} scale-125`}
      />
      <img
        src={sportIcon.brushStrokePath}
        className={`w-64 absolute z-0 scale-125 top-1`}
      />
    </div>
  );
});

const SportsIconsBox = (props: Props) => {
  return (
    <div className="flex justify-center items-center overflow-hidden relative">
      {renderSportIcons}
    </div>
  );
};

export default SportsIconsBox;
