import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full py-8 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-slate-200 text-center relative">
    {/* Footer Text */}
    <p className="mb-4 font-medium">
      &copy; 2025{" "}
      <span className="font-bold text-cyan-500">Tahonik Kyum Kokok</span>. All
      Rights Reserved.
    </p>

    {/* Social Icons */}
    <div className="flex justify-center gap-6 mb-2">
      <a
        href="https://www.facebook.com/tahonik.kaumkonok"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200/30 dark:bg-gray-700/30 text-gray-900 dark:text-white hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-lg"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200/30 dark:bg-gray-700/30 text-gray-900 dark:text-white hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg"
      >
        <FaInstagram />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200/30 dark:bg-gray-700/30 text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
      >
        <FaLinkedinIn />
      </a>
    </div>
  </footer>
);

export default Footer;
