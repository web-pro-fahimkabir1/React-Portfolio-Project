import React from 'react';

const tools = [
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '🌬️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'HTML5', icon: '🟧' },
  { name: 'CSS3', icon: '🟦' },
  { name: 'GitHub', icon: '🐙' },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 animate-fade-in-down">
          Web Developer Services
        </h2>
        <p className="text-gray-600 mb-10 animate-fade-in-up">
          I build modern, responsive, and high-performance web applications
          using the latest technologies.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10">
          {tools.map((tool, idx) => (
            <div
              key={tool.name}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
            >
              <span className="text-4xl mb-2 animate-bounce">{tool.icon}</span>
              <span className="text-lg font-semibold text-gray-700">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Animations */}
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          @keyframes fade-in {
            0% { opacity: 0;}
            100% { opacity: 1;}
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.7s both;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.7s both;
          }
          .animate-fade-in {
            animation: fade-in 0.8s both;
          }
        `}
      </style>
    </section>
  );
}
