import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

const CartSidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { cart, removeFromCart, isCartOpen, toggleCart, totalPrice, updateQuantity } = useContext(CartContext);

  return (

    <aside
      className={`fixed right-0 top-0 h-full w-96 transform transition-all duration-300 ease-in-out shadow-xl border-l z-20
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}
        ${theme === "dark" ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}`}
    >

      <div className="h-full flex flex-col">

        {/* Encabezado */}
        <div className={`p-6 border-b flex justify-between items-center 
        ${theme === "dark" ? "border-gray-600" : "border-gray-200"}`}
        >

          <h2 className={`text-2xl flex font-serif 
          ${theme === "dark" ? "text-green-200" : "text-green-800"}`}
          >
            🛋️ Mi Carrito
          </h2>

          <button
            onClick={toggleCart}
            className={`${theme === "dark" ? "text-gray-300 hover:text-green-300" : "text-gray-500 hover:text-green-600"} 
            transition-colors duration-200`}
          >
            ✕
          </button>
        </div>

        {/* Cuerpo del carrito */}
        <div className="flex-1 overflow-y-auto p-6">

          {/* Sin Productos */}
          {cart.length === 0 ? (

            <p className={`text-center py-8 cursor-default hover:scale-105
            ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
            >
              Tu carrito está vacío
            </p>

          ) : (
            
            <div className="space-y-4">

              {/* Con Productos */}
              {cart.map((item) => (

                <div
                  key={item.id}
                  className={`p-4 rounded-lg flex items-center justify-between hover:scale-105
                  ${theme === "dark" ? "bg-gray-700" : "bg-green-100"}`}
                >

                  <div>
                    <h3 className={`font-medium 
                    ${theme === "dark" ? "text-green-200" : "text-green-800"}`}
                    >
                      {item.name}
                    </h3>

                    <p className={`text-sm 
                    ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                    >
                      ${item.price.toLocaleString()} c/u
                    </p>
                  </div>

                  {/* Controles de cantidad */}
                  <div className="flex items-center gap-3">

                    <div className={`flex items-center gap-2 rounded-full 
                    ${theme === "dark" ? "bg-gray-600" : "bg-white"}`}
                    >

                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className={`px-3 py-1 transition-colors rounded-l-full
                        ${theme === "dark" ? "text-green-300 hover:bg-gray-500" : "text-green-600 hover:bg-green-100"} 
                        ${item.quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        -
                      </button>

                      <span className={`px-2 ${theme === "dark" ? "text-green-100" : "text-green-800"}`}>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className={`px-3 py-1 transition-colors rounded-r-full
                        ${theme === "dark" ? "text-green-300 hover:bg-gray-500" : "text-green-600 hover:bg-green-100"} `}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={`transition-colors hover:shadow-red-700
                      ${theme === "dark" ? "text-red-400 hover:text-red-300" : "text-red-500 hover:text-red-600"} `}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Total */}
        {cart.length > 0 && (

          <div className={`p-6 border-t 
          ${theme === "dark" ? "border-gray-600" : "border-gray-200"}`}
          >

            <div className="flex justify-between items-center">

              <span className={`text-lg font-semibold ${
                theme === "dark" ? "text-green-200" : "text-green-800"}`}
              >
                Total:
              </span>

              <span className={`text-xl font-bold ${
                theme === "dark" ? "text-green-300" : "text-green-700"}`}
              >
                ${totalPrice.toLocaleString()}
              </span>

            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default CartSidebar;