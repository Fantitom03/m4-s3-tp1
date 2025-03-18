import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  
    return (

      <div className={`p-6 rounded-lg shadow-md h-fit ${theme === "dark" ? "bg-gray-700" : "bg-white"}`}>
        
        <h2 className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-green-200" : "text-gray-800"}`}>
          Carrito
        </h2>

        {cart.length === 0 ? (

          <p className="text-gray-600 dark:text-gray-400">El carrito está vacío</p>

        ) : (

          <div className="space-y-4">

            {cart.map((product) => (

              <div key={product.id} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">${product.price} c/u</p>
                </div>
                
                <div className="flex items-center gap-4">
                  
                  <div className="flex items-center gap-2">

                    <button
                      onClick={() => updateQuantity(product.id, product.quantity - 1)}
                      disabled={product.quantity <= 1}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 
                      dark:hover:bg-gray-500 disabled:opacity-50 transition-colors"
                    >
                      -
                    </button>

                    <span className="text-gray-800 dark:text-white">{product.quantity}</span>

                    <button
                      onClick={() => updateQuantity(product.id, product.quantity + 1)}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 
                      dark:hover:bg-gray-500 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-gray-800 dark:text-white">${product.price * product.quantity}</p>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500 transition-colors"
                  >
                    ✕
                  </button>

                </div>
              </div>
            ))}

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">

              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Total:</h3>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">${totalPrice}</p>
              </div>

            </div>
          </div>
        )}
      </div>
      
    );
};

export default Cart;