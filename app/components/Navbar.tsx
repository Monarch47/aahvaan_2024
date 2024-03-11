import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex w-full lg:w-1/2 rounded-lg bg-white items-center justify-evenly py-1 fixed z-10 text-black text-md lg:text-xl">
      <img
        src="/assets/logos/aahvaan.svg"
        alt="aahvaan logo"
        className="w-16 lg:w-20 aspect-square"
      />
      <h2 className="lg:text-xl">Events</h2>
      <h2 className="lg:text-xl">The Team</h2>
      <h2 className="lg:text-xl">Contact Us</h2>
      <img
        src="/assets/logos/sports_council.svg"
        alt="sports council logo"
        className="w-12 lg:w-14 aspect-square"
      />
    </div>
  );
};

export default Navbar;
