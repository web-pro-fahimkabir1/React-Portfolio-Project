import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    demo: '#',
    code: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    demo: '#',
    code: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    demo: '#',
    code: '#',
  },
];

const Portfolio = () => {
  return (
    <section className="bg-gray-100 py-12" id="portfolio">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Portfolio</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, img, demo, code }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <div className="flex gap-4">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
