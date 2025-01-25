import React from "react";

const skills = [
  {
    category: "Frontend",
    delay: "0s",
    skills: [
      { name: "React.js", level: "90%" },
      { name: "Vue.js", level: "85%" },
      { name: "TypeScript", level: "88%" },
    ],
  },
  {
    category: "Backend",
    delay: "0.2s",
    skills: [
      { name: "Node.js", level: "92%" },
      { name: "Python", level: "85%" },
      { name: "Java", level: "80%" },
    ],
  },
  {
    category: "Database",
    delay: "0.4s",
    skills: [
      { name: "MongoDB", level: "90%" },
      { name: "PostgreSQL", level: "85%" },
      { name: "Redis", level: "82%" },
    ],
  },
  {
    category: "DevOps",
    delay: "0.6s",
    skills: [
      { name: "Docker", level: "88%" },
      { name: "AWS", level: "85%" },
      { name: "CI/CD", level: "86%" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-base-100 py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Technology Stack
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map(({ category, delay, skills }) => (
            <div key={category} className="card bg-base-200 shadow-xl p-6">
              <h3 className="card-title text-base-content mb-4">{category}</h3>
              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name} className="skill-bar">
                    <div className="flex justify-between mb-1">
                      <span className="text-base-content/80">{name}</span>
                      <span className="text-base-content/70">{level}</span>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
