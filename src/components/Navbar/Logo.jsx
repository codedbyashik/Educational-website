import React from "react";
import { animateScroll as scroll } from "react-scroll";

const Logo = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <div
      onClick={scrollToTop}
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-500 cursor-pointer select-none"
    >
      The Learning Compass
    </div>
  );
};

export default Logo;
