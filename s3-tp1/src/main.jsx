import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx"; 
import { ThemeProvider } from "./context/ThemeContext.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider> 
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CartProvider>
  </React.StrictMode>
);
