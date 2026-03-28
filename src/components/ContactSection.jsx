import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-base-100 py-40 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-5xl md:text-7xl font-black text-base-content mb-8 leading-tight">
            Let's build something{" "}
            <span className="text-primary italic">impactful</span>
            <br />
            together.
          </h3>

          <p className="text-lg text-base-content/50 mb-16 max-w-xl mx-auto">
            Available for full-time roles, architectural consulting, or complex
            full-stack builds.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
            <a
              href="mailto:roykisholoy.edu@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-base-content font-bold text-lg group-hover:text-primary transition-colors">
                roykisholoy.edu@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/kisholoy-roy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </div>
              <span className="text-base-content font-bold text-lg group-hover:text-primary transition-colors">
                LinkedIn Profile
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
    </section>
  );
};

export default ContactSection;
