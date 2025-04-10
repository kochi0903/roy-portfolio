import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../main.jsx";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
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
    closeDropdown();
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
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <div className="dropdown">
                <button className="btn btn-ghost btn-circle uppercase min-w-[7rem]" onClick={toggleDropdown}>
                  THEME - {currentTheme}
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {themes.map((theme) => (
                      <li key={theme}>
                        <button onClick={() => handleThemeChange(theme)}>{theme}</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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
                  className="btn btn-ghost justify-start"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
