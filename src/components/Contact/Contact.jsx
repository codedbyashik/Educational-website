import React from "react";

const Contact = () => (
  <section
    id="contact"
    className="relative w-full py-28 bg-gradient-to-br from-gray-900/60 to-gray-800/40 overflow-hidden"
  >
    <div className="max-w-5xl mx-auto px-6 rounded-xl bg-white/10 backdrop-blur-xl border border-gray-400/20 shadow-2xl relative z-10">
      {/* Decorative blurred circles */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-400/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

      {/* Title */}
      <h2 className="text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-text">
        Contact Me
      </h2>

      {/* Form */}
      <form className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-5 rounded-xl border border-gray-300/20 bg-white/20 placeholder-gray-200 text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 transition-all duration-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-5 rounded-xl border border-gray-300/20 bg-white/20 placeholder-gray-200 text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-300"
        />
        <textarea
          placeholder="Your Message"
          className="p-5 rounded-xl border border-gray-300/20 bg-white/20 placeholder-gray-200 text-white h-36 resize-none backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition-all duration-300"
        ></textarea>
        <button
          type="submit"
          className="px-10 py-5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-white font-bold rounded-full hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Custom animations */}
    <style jsx>{`
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -20px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      .animate-blob {
        animation: blob 8s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      @keyframes gradient-text {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      .animate-gradient-text {
        background-size: 200% 200%;
        animation: gradient-text 6s ease infinite;
      }
    `}</style>
  </section>
);

export default Contact;
