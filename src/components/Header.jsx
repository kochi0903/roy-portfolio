import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../main";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { currentTheme, toggleTheme, themes } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hero", href: "#hero" },
    { name: "Overview", href: "#overview" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-base-100/80 backdrop-blur-xl border-b border-base-300 shadow-xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-content font-black text-xl group-hover:scale-110 transition-transform">
              KR
            </div>
            <span className="text-base-content font-bold text-xl tracking-tighter">
              Kisholoy <span className="text-primary">Roy</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs font-bold text-base-content/60 hover:text-primary transition-colors tracking-widest uppercase"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-3">
            {/* Theme Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className="btn btn-sm btn-ghost gap-2 border border-primary/20 hover:bg-primary/10"
                aria-label="Change theme"
              >
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider text-base-content hidden sm:inline">
                  {currentTheme}
                </span>
                <svg
                  className={`w-3 h-3 text-base-content/50 transition-transform ${isThemeOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isThemeOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-base-200 border border-base-300 rounded-xl shadow-2xl p-2 z-50 animate-fadeIn">
                  {themes.map((theme) => (
                    <button
                      key={theme}
                      onClick={() => {
                        toggleTheme(theme);
                        setIsThemeOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold capitalize transition-all ${
                        currentTheme === theme
                          ? "bg-primary text-primary-content"
                          : "text-base-content hover:bg-base-300"
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-base-100/95 backdrop-blur-xl border-b border-base-300 p-6 space-y-6 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-center text-lg font-bold text-base-content hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
