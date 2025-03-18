import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { totalItems, toggleCart } = useContext(CartContext);

  return (

    <header className={`${theme === "dark" ? "bg-gray-800" : "bg-green-500"} shadow-sm z-30 relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          
          <img 
            src="/logos/logo.png" 
            alt="Muebles Hogar" 
            className="h-12 w-12 hover:scale-110 shadow-sd hover:shadow-xl"
          />

          <h1 className={`text-2xl font-serif font-bold cursor-default hover:scale-110
          ${theme === "dark" ? "text-green-200" : "text-green-100"}`}
          >
            Muebles del Hogar
          </h1>

        </div>
        
        <div className="flex items-center gap-6">

          <ThemeToggle />

          <button
            onClick={toggleCart}
            className={`flex items-center gap-2 px-6 py-2 text-white rounded-full transition-colors duration-300
            ${theme === "dark" ? "bg-green-700 hover:bg-green-600" : "bg-green-600 hover:bg-green-700"}`}
          >

            <span>🛒</span>
            <span>Carrito ({totalItems})</span>

          </button>

        </div>
      </div>
    </header>

  );
};

export default Header;