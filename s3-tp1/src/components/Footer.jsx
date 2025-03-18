import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {

  const { theme } = useContext(ThemeContext);

  return (

    <footer className={`${theme === "dark" ? "bg-gray-900" : "bg-green-800"} text-green-100 mt-12`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <div className="text-center">
          <p className="font-serif">
            © {new Date().getFullYear()} Muebles del Hogar - Diseño con amor
          </p>

          <p className="mt-2 text-sm opacity-75">
            Encontrá los mejores muebles para tu hogar
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;