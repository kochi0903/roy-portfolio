import React from "react";

const experiences = [
  {
    role: "Associate Trainer",
    company: "IamNeo.ai",
    period: "2025 - Present",
    details: ["Corporate trainer for MERN Stack"],
  },
  {
    role: "Software Engineer",
    company: "Capital Numbers",
    period: "2022 - 2025",
    details: [
      "Full Stack Development with MERN ecosystem",
      "API optimization and system architecture",
    ],
  },
  {
    role: "Jr. Full Stack Developer",
    company: "Yeasitech",
    period: "2021 - 2022",
    details: [
      "Frontend focused React development",
      "Backend integration with Node.js",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-base-100 py-24 border-t border-base-300">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Professional Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-base-content">
            Experience & Mentorship
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative px-4">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--p))]"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-[45%] p-8 bg-base-200 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="text-primary font-black text-sm uppercase tracking-widest mb-2">
                    {exp.period}
                  </div>
                  <h4 className="text-2xl font-black text-base-content mb-1">
                    {exp.role}
                  </h4>
                  <div className="text-base-content/60 font-bold text-lg mb-4">
                    {exp.company}
                  </div>
                  <ul className="space-y-3">
                    {exp.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-base-content/50 text-sm leading-relaxed flex items-start space-x-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
