import React from "react";

const Hero = () => (
  <section
    id="home"
    className="relative w-full min-h-screen flex items-center justify-center"
  >
    {/* Background Image with subtle blur */}
    <img
      src="/pic.jpg"
      alt="Tahonik Kyum Kokok"
      className="absolute inset-0 w-full h-full object-cover object-top filter blur-sm brightness-50"
    />

    {/* Overlay Text */}
    <div className="relative z-10 text-center text-white px-6 max-w-4xl">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold animate-fade-in">
        Tahonik Kyum <span className="underline text-cyan-500">Konok</span>
      </h1>
      <p className="mt-4 text-lg sm:text-2xl md:text-3xl animate-slide-in-left">
        Mechanical Engineer | <span className="text-cyan-500">RUET</span>{" "}
        <span className="text-amber-500">
          (Rajshahi University of Engineering & Technology)
        </span>
      </p>
      <a
        href="#contact"
        className="mt-6 inline-block px-6 py-3 bg-cyan-400 text-black rounded-lg hover:scale-105 transform transition duration-300"
      >
        Contact Me
      </a>
    </div>
  </section>
);

export default Hero;
