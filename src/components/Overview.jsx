import React from 'react';

const Overview = () => {
  const skills = [
    "Full Stack Development",
    "Cloud Architecture",
    "API Development"
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "99%", label: "Success Rate" },
  ];

  return (
    <section id="overview" className="bg-base-100 py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Overview
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Who I Am</h3>
            <p className="text-base-content/70 leading-relaxed">
              A passionate Software Developer with 5+ years of experience in
              building web applications. I specialize in both frontend and
              backend development, creating seamless user experiences and
              robust server-side solutions.
            </p>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base-content/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card bg-base-200 shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-base-content/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;