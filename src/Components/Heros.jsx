import React, { useEffect, useRef, useState } from 'react';

const titles = ['Web Developer', 'Frontend Engineer', 'React Enthusiast'];

export default function Heros() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTitle(prev => (prev + 1) % titles.length);
        setFade(true);
      }, 400);
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Rainbow background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-red-500 via-yellow-400 green-400 bg-blue-400 to-purple-500 animate-gradient-x" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-16">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Welcome to My Portfolio
          </h1>
          <div className="h-12 mb-4">
            <span
              className={`inline-block text-2xl md:text-3xl font-bold text-white transition-opacity duration-400 ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {titles[currentTitle]}
            </span>
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            I build modern, responsive web applications with React and Tailwind
            CSS. Let's create something amazing together!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Contact Me
          </a>
        </div>
        {/* Hero Image */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&q=80"
            alt="Hero"
            className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl"
          />
        </div>
      </div>
      {/* Rainbow gradient animation */}
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
