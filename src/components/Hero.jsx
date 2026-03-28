import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center bg-base-100">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]"></div>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1 rounded-full bg-base-200 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8 animate-fadeIn">
            Full Stack System Architect
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-base-content leading-[0.9] tracking-tighter mb-8 animate-fadeIn">
            I build scalable <br />
            <span className="text-primary">full-stack systems</span> <br />
            with precision.
          </h1>

          <p
            className="text-xl md:text-2xl text-base-content/60 max-w-2xl leading-relaxed mb-12 animate-fadeIn"
            style={{ animationDelay: "0.1s" }}
          >
            A Senior Software Engineer with over{" "}
            <span className="text-base-content font-bold">
              4.5 years of industry expertise
            </span>{" "}
            and{" "}
            <span className="text-base-content font-bold">
              1.5 years of freelancing
            </span>{" "}
            experience in the MERN ecosystem.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="#projects"
              className="btn btn-primary btn-lg uppercase tracking-widest font-black"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn btn-outline btn-primary btn-lg uppercase tracking-widest font-black"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
