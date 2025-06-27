import React from 'react';

const skills = [
  { name: 'HTML', level: 90, color: 'bg-orange-500' },
  { name: 'CSS', level: 85, color: 'bg-blue-500' },
  { name: 'JavaScript', level: 80, color: 'bg-yellow-400' },
  { name: 'React', level: 75, color: 'bg-cyan-500' },
  { name: 'Tailwind CSS', level: 70, color: 'bg-teal-400' },
  { name: 'Node.js', level: 65, color: 'bg-green-500' },
];

const Skill = () => {
  return (
    <section className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        My Web Developer Skills
      </h2>
      <div className="space-y-6">
        {skills.map((skill, idx) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className={`h-4 rounded-full ${skill.color} transition-all duration-1000`}
                style={{
                  width: 0,
                  animation: `growBar${idx} 1.2s forwards`,
                }}
              />
            </div>
            <style>
              {`
                @keyframes growBar${idx} {
                  to { width: ${skill.level}%; }
                }
              `}
            </style>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
