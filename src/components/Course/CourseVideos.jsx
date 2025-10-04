import React from "react";

const CourseVideos = () => {
  const courses = [
    {
      id: 1,
      title:
        "সূচক ও লগারিদম (Exponents & Logarithm) Basic Class | গণিত | নবম-দশম শ্রেণী |",
      teacher: "Tahonik Kyum Kokok",
      embed: "https://www.youtube.com/embed/FgnJ7bQ_iRk",
    },
    {
      id: 2,
      title: "আংশিক ভগ্নাংশ | ডিপ্লোমা ইঞ্জিনিয়ারিং |",
      teacher: "Tahonik Kyum Kokok",
      embed: "https://www.youtube.com/embed/FMuiRqWN38o",
    },
    {
      id: 3,
      title: "নবম-দশম ত্রিকোণমিতিক অনুপাত",
      teacher: "Tahonik Kyum Kokok",
      embed: "https://www.youtube.com/embed/u8w9GX-tFwk",
    },
  ];

  return (
    <section id="course" className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 rounded-3xl">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
          Course Videos
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((c) => (
            <div
              key={c.id}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border border-white/20 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500"
            >
              {/* Floating Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tl from-pink-400/10 via-purple-400/10 to-cyan-400/10 pointer-events-none"></div>

              {/* Video Embed */}
              <iframe
                className="w-full aspect-video rounded-t-3xl"
                src={c.embed}
                title={c.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>

              {/* Video Info */}
              <div className="p-5 relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-2">
                  {c.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Teacher: {c.teacher}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseVideos;
