import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

export const ThemeContext = React.createContext();

const Main = () => {
  const themes = [
    "forest",
    "cupcake",
    "lemonade",
    "aqua",
    "pastel",
    "luxury",
    "dark",
  ];
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

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
  </React.StrictMode>
);
