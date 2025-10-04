import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import CourseVideos from "./components/Course/CourseVideos.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-900 transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <CourseVideos />
      <Contact />
      <Footer />
    </main>
  );
}
