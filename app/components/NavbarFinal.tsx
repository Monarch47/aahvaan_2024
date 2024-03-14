import React, { useState, useEffect } from "react";

const NavbarFinal = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCirclePosition, setIsCirclePosition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTogglePosition = () => {
    setIsCirclePosition(!isCirclePosition);
  };

  return (
    <div
      className={`flex ${
        isCirclePosition
          ? "rounded-full w-16 h-16 bg-purple-700 py-2 px-4 top-2 left-2"
          : isScrolled
          ? "rounded-full w-16 h-16 bg-purple-700 py-2 px-4"
          : "rounded-lg w-full lg:w-1/2 bg-white py-1"
      } fixed z-10 text-black text-md lg:text-xl items-center justify-evenly transition-all`}
      onClick={handleTogglePosition}
    >
      <img
        src="/assets/logos/aahvaan.svg"
        alt="aahvaan logo"
        className={`w-16 lg:w-20 aspect-square ${
          isScrolled && !isCirclePosition ? "hidden" : "block"
        }`}
      />
      <div
        className={`${
          isScrolled && !isCirclePosition
            ? "hidden"
            : "flex justify-center items-center gap-8"
        }`}
      >
        <h2 className="lg:text-xl">Events</h2>
        <h2 className="lg:text-xl">The Team</h2>
        <h2 className="lg:text-xl">Contact Us</h2>
      </div>
      <img
        src="/assets/logos/sports_council.svg"
        alt="sports council logo"
        className={`w-12 lg:w-14 aspect-square ${
          isScrolled && !isCirclePosition ? "hidden" : "block"
        }`}
      />
    </div>
  );
};

export default NavbarFinal;
