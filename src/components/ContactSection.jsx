import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-base-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-content"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base-content font-semibold">Email</h3>
                    <p className="text-base-content/70">
                      kroy8900391997@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-content"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base-content font-semibold">Phone</h3>
                    <p className="text-base-content/70">+91 9474113837</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-content"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base-content font-semibold">
                      Location
                    </h3>
                    <p className="text-base-content/70">West Bengal, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/kisholoy-roy-4a0b30b2/"
                className="btn btn-primary btn-square"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/kochi0903/"
                className="btn btn-primary btn-square"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 animate__animated animate__fadeInRight">
            <div className="form-control">
              <label className="label" for="name">
                <span className="label-text text-base-content">Name</span>
              </label>
              <input
                type="text"
                id="name"
                className="input input-bordered input-primary w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" for="email">
                <span className="label-text text-base-content">Email</span>
              </label>
              <input
                type="email"
                id="email"
                className="input input-bordered input-primary w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" for="subject">
                <span className="label-text text-base-content">Subject</span>
              </label>
              <input
                type="text"
                id="subject"
                className="input input-bordered input-primary w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" for="message">
                <span className="label-text text-base-content">Message</span>
              </label>
              <textarea
                id="message"
                className="textarea textarea-bordered textarea-primary w-full"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
