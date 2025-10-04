import React from "react";
const About = () => (
  <section
    id="about"
    className="relative bg-cyan-400 text-white py-24 px-6 overflow-hidden rounded-3xl"
  >
    {/* Curved background using clip-path */}
    <div className="absolute inset-0 rounded-3xl">
      <div className="w-full h-full bg-cyan-900 clip-path-s-shape rounded-3xl"></div>
    </div>
    <div className="relative max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg leading-relaxed">
        I am <span className="text-cyan-500">Tahonik Kyum Kokok</span>, a
        passionate Mechanical Engineer from RUET. I teach students from Class 10
        to 12 for Medical and Engineering admissions. I offer both paid and free
        classes with structured lessons, practical tips, and personalized
        guidance. My mission is to create futuristic learning interfaces and
        share knowledge through videos and tutorials, making complex topics
        easier to understand and helping students excel in exams and real-life
        applications.
      </p>
    </div>
  </section>
);
export default About;
