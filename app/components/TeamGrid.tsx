import React from "react";
import { TeamGridData } from "@/data";
type Props = {};

const renderTeamGridData = TeamGridData.map((teamMember, index) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4"
      key={index}
    >
      <img src={teamMember.path} className="w-40 aspect-auto rounded-full" />
      <div className="flex flex-col gap-2">
        <h2>{teamMember.name}</h2>
        <h3>{teamMember.role}</h3>
      </div>
    </div>
  );
});

const TeamGrid = (props: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-4/5 gap-y-10 gap-x-10">
      {renderTeamGridData}
    </div>
  );
};

export default TeamGrid;
