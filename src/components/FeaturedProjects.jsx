import React from "react";

const projects = [
  {
    title: "Student Job Tracker",
    problem:
      "Manual tracking of student job applications leading to missed opportunities and disorganized data.",
    solution:
      "A centralized dashboard for students and admins to track applications, interviews, and offer statuses in real-time.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    demo: "#",
    github: "https://github.com/kochi0903/student-job-tracker",
  },
  {
    title: "Tracker Expense",
    problem:
      "Difficulty in managing personal finances and visualizing spending habits across different categories.",
    solution:
      "An intuitive expense management system with dynamic charting and automated categorization for financial insight.",
    tech: ["Next.js", "Chart.js", "PostgreSQL", "Prisma"],
    demo: "#",
    github: "https://github.com/kochi0903/expense-tracker",
  },
  {
    title: "Shop Inventory Forecasting",
    problem:
      "Retailers struggling with overstocking or stockouts due to lack of predictive analytics.",
    solution:
      "A data-driven inventory management tool that forecasts demand based on historical sales patterns.",
    tech: ["Python", "Flask", "React", "MySQL"],
    demo: "#",
    github: "https://github.com/kochi0903/inventory-forecasting",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="bg-base-100 py-24 border-t border-base-300">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Production Artifacts
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-base-content">
            Technical Problem Solving
          </h3>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row bg-base-200 rounded-3xl overflow-hidden border border-primary/5 hover:border-primary/20 transition-all group"
            >
              {/* Text Side */}
              <div className="lg:w-2/3 p-10 md:p-14 border-r border-primary/5">
                <h4 className="text-3xl font-black text-base-content mb-8">
                  {project.title}
                </h4>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="text-primary font-bold text-xs uppercase tracking-widest">
                      The Problem
                    </div>
                    <p className="text-base-content/50 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-primary font-bold text-xs uppercase tracking-widest">
                      The Solution
                    </div>
                    <p className="text-base-content/50 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Side */}
              <div className="lg:w-1/3 p-10 md:p-14 bg-base-300/30 flex flex-col justify-between">
                <div>
                  <div className="text-primary font-bold text-xs uppercase tracking-widest mb-6">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="badge badge-outline badge-primary font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href={project.github}
                    className="btn btn-outline btn-primary btn-sm uppercase tracking-widest"
                  >
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    className="btn btn-primary btn-sm uppercase tracking-widest"
                  >
                    Live Demo
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

export default FeaturedProjects;
