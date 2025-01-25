import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

export const ThemeContext = React.createContext();

const Main = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const toggleTheme = () => {
    const themes = [
      "dark",
      "cupcake",
      "forest",
      "aqua",
      "pastel",
      "lemonade",
    ];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <App />
    </ThemeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
