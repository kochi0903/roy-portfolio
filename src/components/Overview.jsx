import React from "react";

const Overview = () => {
  const metrics = [
    { label: "Years Experience", value: "4.5+", suffix: "Industry" },
    { label: "Freelancing", value: "1.5", suffix: "Years" },
    { label: "Projects Completed", value: "10+", suffix: "Production" },
    { label: "Client Satisfaction", value: "100%", suffix: "Score" },
  ];

  return (
    <section id="overview" className="bg-base-100 py-24 border-t border-base-300">
      <div className="container mx-auto px-4">
        {/* Meaningful Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl md:text-7xl font-black text-primary mb-2 group-hover:scale-110 transition-transform block">
                {metric.value}
              </div>
              <div className="text-base-content font-bold text-sm tracking-widest uppercase mb-1">
                {metric.label}
              </div>
              <div className="text-base-content/40 text-xs font-medium uppercase tracking-[0.2em]">
                {metric.suffix}
              </div>
            </div>
          ))}
        </div>

        {/* Bio Section */}
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="md:w-1/2">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-6">
              Who I Am
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-base-content leading-tight mb-8">
              Bridging the gap between <br />
              <span className="text-base-content/40">code and commerce.</span>
            </h3>
          </div>
          <div className="md:w-1/2 space-y-6">
            <p className="text-xl text-base-content/70 leading-relaxed">
              I am a results-driven MERN Stack Developer with a passion for
              building robust, scalable, and user-centric applications. With 4.5
              years of industry experience and 1.5 years of independent
              freelancing, I have honed my skills in architecting
              production-grade systems.
            </p>
            <p className="text-lg text-base-content/50 leading-relaxed">
              My expertise lies in full-stack development, with a deep focus on
              performance optimization, secure API design, and intuitive user
              experiences. I thrive on solving complex technical challenges that
              drive real business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
