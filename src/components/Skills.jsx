import React from "react";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Java", "Python"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Oracle SQL"],
    },
    {
      title: "Infrastructure",
      skills: ["AWS", "GitHub Actions", "CI/CD Pipelines", "Nginx"],
    },
  ];

  return (
    <section id="skills" className="bg-base-100 py-24 border-t border-base-300">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Technical Stack
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-base-content">
            Engineered for Performance
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-8 bg-base-200 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all group"
            >
              <h4 className="text-primary font-bold text-lg mb-6 tracking-wide group-hover:translate-x-2 transition-transform block">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center space-x-3 text-base-content/70"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
