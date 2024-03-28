import React from "react";
import { TeamGridData } from "@/data";

const renderTeamGridData = TeamGridData.map((teamMember, index) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4"
      key={index}
    >
      <img
        src={teamMember.path}
        className="w-40 aspect-auto rounded-full h-40 bg-cover"
      />
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-semibold text-lg lg:text-xl truncate">
          {teamMember.name}
        </h2>
        <h3 className="lg:text-lg">{teamMember.role}</h3>
      </div>
    </div>
  );
});

const TeamGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 w-4/5 gap-y-24 gap-x-10">
      {renderTeamGridData}
    </div>
  );
};

export default TeamGrid;
