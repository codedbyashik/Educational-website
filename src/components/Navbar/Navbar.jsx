import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll effect for shadow & active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);

      const sections = ["home", "course", "about", "contact"];
      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element) {
          const top = element.offsetTop - 80;
          const bottom = top + element.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["home", "course", "about", "contact"];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md bg-gray-900/90 flex items-center justify-between w-full px-6 py-4 transition-all duration-500 ${
        scrolled ? "shadow-2xl" : "shadow-lg"
      }`}
    >
      <Logo />

      {/* Desktop Menu */}
      <nav className="hidden sm:flex gap-6 text-gray-200 font-semibold">
        {menuItems.map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className={`relative cursor-pointer transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:text-indigo-500 hover:after:w-full ${
              activeSection === section
                ? "text-indigo-400 after:w-full"
                : "text-gray-200"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-200 text-3xl focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-gray-900/95 flex flex-col items-center gap-6 py-6 sm:hidden shadow-xl transition-all duration-300">
          {menuItems.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)} // close menu on click
              className={`text-xl cursor-pointer transition-colors duration-300 ${
                activeSection === section ? "text-indigo-400" : "text-gray-200"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
