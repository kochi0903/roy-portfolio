import React from "react";
import StudentJobTrackerIcon from "../assets/JobTracker.png";
import Expenseracker from "../assets/ExpenseTracker.png";
import InventoryIcon from "../assets/InventoryForecast.png";

const ProjectsSection = () => {
  const projects = [
    {
      icon: <img src={StudentJobTrackerIcon} alt="Job Tracker" />,
      title: "Student Job Tracker",
      description: "Full Stack Project",
      technologies: ["React", "Tailwind"],
      links: {
        demo: "https://roy-job-tracker.vercel.app/",
        code: "https://github.com/kochi0903/student-job-tracker",
      },
    },
    {
      icon: <img src={Expenseracker} alt="Expense Tracker" />,
      title: "Tracker Expense",
      description: "User can Track their Day to Day Expenses.",
      technologies: ["React.js", "Redux"],
      links: {
        demo: "https://expense-tracker-one-lac.vercel.app/",
        code: "https://github.com/kochi0903/tracker-expense",
      },
    },
    {
      icon: <img src={InventoryIcon} alt="Inventory Forecasting" />,
      title: "Shop Inventory Forecasting",
      description: "Forecasting the Inventory Amount on Basis of Previous Sale",
      technologies: ["ReactJS", "AI/ML", "Django", "Python"],
      links: {
        demo: "https://github.com/kochi0903/InventoryForecastReact",
        code: "https://github.com/kochi0903/InventoryForecastReact",
      },
    },
  ];

  return (
    <section id="projects" className="bg-base-100 py-20">
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
