import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 3.137 1.344a1 1 0 00.788 0l7-3a1 1 0 000-1.838l-7-3z"/>
        </svg>
      ),
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and inventory management.",
      technologies: ["React", "Node.js", "MongoDB"],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
        </svg>
      ),
      title: "Chat Application",
      description: "Real-time chat platform with video calling and file sharing capabilities.",
      technologies: ["Vue.js", "WebSocket", "Firebase"],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/>
        </svg>
      ),
      title: "Task Management System",
      description: "Project management tool with task tracking and team collaboration features.",
      technologies: ["Angular", "Express", "PostgreSQL"],
      links: {
        demo: "#",
        code: "#"
      }
    }
  ];

  return (
    <section className="bg-base-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="card card-bordered bg-base-200 shadow-xl transform transition-transform hover:scale-105"
            >
              <figure className="px-10 pt-10 bg-base-300 h-48 flex items-center justify-center">
                <div className="text-primary">
                  {project.icon}
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-base-content">{project.title}</h3>
                <p className="text-base-content/70">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-4">
                  {project.technologies.map(tech => (
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