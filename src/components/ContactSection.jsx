import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "animate.css"; // Ensure you have this installed: npm install animate.css

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6 text-primary-content" />,
      title: "Email",
      value: "kroy8900391997@gmail.com",
      link: "mailto:kroy8900391997@gmail.com",
      linkLabel: "Send Email",
    },
    {
      icon: <FaPhone className="w-6 h-6 text-primary-content" />,
      title: "Phone",
      value: "+91 9474113837",
      link: "tel:+919474113837",
      linkLabel: "Call Now",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-primary-content" />,
      title: "Location",
      value: "West Bengal, India",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/kisholoy-roy-4a0b30b2/",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/kochi0903/",
    },
  ];

  return (
    <section id="contact" className="bg-base-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contact Information
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-base-content/80">
            Here are the best ways to get in touch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            {contactInfo.map((item, index) => (
              <div className="card bg-base-200 shadow-lg" key={index}>
                <div className="card-body">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary p-3 rounded-lg">{item.icon}</div>
                    <div>
                      <h3 className="text-base-content font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-base-content/70">{item.value}</p>
                      {item.link && (
                        <a
                          href={item.link}
                          className="text-sm text-primary hover:underline"
                        >
                          {item.linkLabel}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Static Contact Message */}
          <div className="animate__animated animate__fadeInRight">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-xl text-primary">
                  Send Us a Message
                </h2>
                <p className="text-base-content/80 mb-4">
                  Thank you for your interest! While the contact form is
                  currently unavailable, you can reach out to us directly using
                  the contact information provided on the left. We will get back
                  to you as soon as possible.
                </p>
                <p className="text-sm text-base-content/60">
                  We appreciate your understanding.
                </p>
                <div className="flex justify-start space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="btn btn-primary btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
