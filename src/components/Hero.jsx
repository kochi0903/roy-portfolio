import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="bg-base-100 min-h-screen pt-20 relative">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-base-content/80 font-semibold">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-base-content">
              John Developer
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary">
              Full Stack Developer
            </h2>
            <p className="text-base-content/70 text-lg">
              Crafting digital experiences through elegant code and innovative
              solutions. Specialized in building scalable web applications with
              modern technologies.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="btn btn-primary">
                Hire Me
              </a>
              <a href="#projects" className="btn btn-outline btn-primary">
                View Projects
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center">
            <div className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 relative">
              {/* Pulsing Background */}
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-base-100 rounded-full shadow-lg w-full h-full flex items-center justify-center">
                  <div className="text-6xl md:text-9xl font-bold text-primary">
                    JD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-base-100 to-transparent"></div>
    </section>
  );
};

export default Hero;
