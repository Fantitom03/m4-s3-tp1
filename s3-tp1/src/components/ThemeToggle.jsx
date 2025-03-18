import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-green-100 dark:bg-gray-700 hover:bg-green-200 dark:hover:bg-gray-600 
      transition-all duration-300"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
    
  );
};

export default ThemeToggle;
