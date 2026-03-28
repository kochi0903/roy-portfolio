import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

export const ThemeContext = React.createContext();

const Main = () => {
  const themes = [
    "luxury",
    "forest",
    "cupcake",
    "lemonade",
    "aqua",
    "pastel",
    "dark",
  ];
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  // Apply theme on initial mount
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  const toggleTheme = (theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme, themes }}>
      <App />
    </ThemeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
