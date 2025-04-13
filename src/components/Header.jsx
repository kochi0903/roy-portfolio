import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../main.jsx";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Updated state for modal

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const menuItems = [
    { href: "#overview", label: "Overview" },
    { href: "#skills", label: "Technology" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  const { toggleTheme, currentTheme, themes } = useContext(ThemeContext);

  const handleThemeChange = (theme) => {
    toggleTheme(theme);
    closeModal();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed w-full navbar bg-base-100 z-50 ${
        hasShadow ? "shadow-lg" : ""
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex-1 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-primary">MERN </span>
            <span className="text-secondary">Developer </span>
            {/* <span className="text-primary">.</span> */}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                className="btn btn-ghost btn-circle p-1"
                onClick={openModal}
              >
                 <div className="w-4 h-4 rounded-full bg-primary"></div>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {menuItems.map((item) => (
                <a key={item.href} href={item.href} className="btn btn-ghost">
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden btn btn-ghost btn-square"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-base-100 shadow-lg">
            <div className="flex flex-col space-y-2 p-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="btn btn-ghost justify-start text-sm md:text-base"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Theme Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-base-100 p-4 rounded-lg shadow-lg relative w-11/12 max-w-sm md:max-w-md">
              <button
                className="absolute top-2 right-2 btn btn-ghost btn-circle text-xs md:text-sm"
                onClick={closeModal}
              >
                ✕
              </button>
              <h2 className="text-sm md:text-base font-semibold mb-2">
                Select Theme
              </h2>
              <div className="flex flex-wrap gap-2">
                {themes.map((theme) => (
                  <button
                    key={theme}
                    className="btn btn-ghost text-xs md:text-sm"
                    onClick={() => handleThemeChange(theme)}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
