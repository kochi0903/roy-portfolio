import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 3.137 1.344a1 1 0 00.788 0l7-3a1 1 0 000-1.838l-7-3z" />
        </svg>
      ),
      title: "Email Template Builder",
      description: "Baby App of Template Builder",
      technologies: ["React", "Tailwind"],
      links: {
        demo: "https://email-template-builder-seven.vercel.app/",
        code: "https://github.com/kochi0903/email-template-builder",
      },
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 3.137 1.344a1 1 0 00.788 0l7-3a1 1 0 000-1.838l-7-3z" />
        </svg>
      ),
      title: "Tracker Expense",
      description: "User can Track their Day to Day Expenses.",
      technologies: ["React.js", "Redux"],
      links: {
        demo: "https://expense-tracker-one-lac.vercel.app/",
        code: "https://github.com/kochi0903/tracker-expense",
      },
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 3.137 1.344a1 1 0 00.788 0l7-3a1 1 0 000-1.838l-7-3z" />
        </svg>
      ),
      title: "IP Tracker System",
      description:
        "Giving any IP on the search bar will provide the location details of the address",
      technologies: ["ReactJS"],
      links: {
        demo: "https://ip-tracker-two-bice.vercel.app/",
        code: "https://github.com/kochi0903/ipTracker",
      },
    },
  ];

  return (
    <section className="bg-base-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card card-bordered bg-base-200 shadow-xl transform transition-transform hover:scale-105"
            >
              <figure className="px-10 pt-10 bg-base-300 h-48 flex items-center justify-center">
                <div className="text-primary">{project.icon}</div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-base-content">
                  {project.title}
                </h3>
                <p className="text-base-content/70">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="badge badge-primary badge-outline"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-start">
                  <a
                    href={project.links.demo}
                    className="btn btn-primary btn-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.links.code}
                    className="btn btn-outline btn-primary btn-sm"
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

export default ProjectsSection;
