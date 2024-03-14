import React, { useState, useEffect } from "react";

const Navbar = () => {
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

  useEffect(() => {
    const handleScrollTop = () => {
      if (isCirclePosition && window.scrollY === 0) {
        setIsCirclePosition(false);
      }
    };

    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [isCirclePosition]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`flex ${
        isScrolled && !isCirclePosition
          ? "rounded-full w-10 h-10 lg:w-16 lg:h-16 aspect-square bg-white border-2 border-[#160C28] cursor-pointer shadow-lg top-2 left-2"
          : isScrolled
          ? "rounded-full w-10 h-10 lg:w-16 lg:h-16 bg-white shadow-xl py-2 px-4 top-2 left-2"
          : "rounded-lg w-full lg:w-1/2 bg-white py-1"
      } fixed z-10 text-black text-md lg:text-xl items-center justify-evenly transition-all`}
      onClick={scrollToTop}
    >
      <div
        className={`${
          isScrolled && !isCirclePosition
            ? "hidden"
            : "flex justify-center items-center gap-8"
        }`}
      >
        <a href="#">
          <img
            src="/assets/logos/aahvaan.svg"
            alt="aahvaan logo"
            className={`w-16 lg:w-20 aspect-square ${
              isScrolled && !isCirclePosition ? "hidden" : "block"
            }`}
          />
        </a>
        <a href="#events" className="text-md lg:text-xl font-semibold">
          Events
        </a>
        <a href="#team" className="text-md lg:text-xl font-semibold">
          The Team
        </a>
        <a href="#contact" className="text-md lg:text-xl font-semibold">
          Contact Us
        </a>
        <img
          src="/assets/logos/sports_council.svg"
          alt="sports council logo"
          className={`w-12 lg:w-14 aspect-square ${
            isScrolled && !isCirclePosition ? "hidden" : "block"
          }`}
        />
      </div>
    </div>
  );
};

export default Navbar;
