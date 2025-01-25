import React, { useEffect } from "react";

const experienceData = [
  {
    role: "Senior Software Engineer",
    company: "Tech Corp International",
    period: "2021 - Present",
    details: [
      "Led development of enterprise-scale applications",
      "Managed team of 5 developers",
      "Implemented microservices architecture",
    ],
    animation: "animate__fadeInLeft",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2019 - 2021",
    details: [
      "Developed responsive web applications",
      "Optimized application performance",
      "Implemented CI/CD pipelines",
    ],
    animation: "animate__fadeInRight",
  },
  {
    role: "Frontend Developer",
    company: "WebTech Startups",
    period: "2018 - 2019",
    details: [
      "Built interactive user interfaces",
      "Collaborated with UI/UX designers",
      "Implemented responsive designs",
    ],
    animation: "animate__fadeInLeft",
  },
];

const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", entry.target.dataset.animation);
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate__animated").forEach((el) => {
      el.style.opacity = 0;
      observer.observe(el);
    });
  }, []);

  return (
    <section id="experience" className="bg-base-100 py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-base-300"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`relative flex md:justify-between items-center flex-col md:flex-row`}
                data-animation={exp.animation}
              >
                <div
                  className={`md:w-5/12 mb-8 md:mb-0 ${
                    index % 2 === 0 ? "md:text-right" : "md:order-2"
                  }`}
                >
                  <div className="card bg-base-200 shadow-xl p-6">
                    <h3 className="card-title text-base-content">{exp.role}</h3>
                    <p className="text-base-content/80">{exp.company}</p>
                    <p className="text-base-content/60">{exp.period}</p>
                    <ul className="list-disc list-inside mt-4 text-base-content/70">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-12 h-12 absolute left-1/2 transform -translate-x-1/2 bg-primary rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
