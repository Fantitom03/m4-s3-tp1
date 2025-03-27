import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartSidebar = () => {

  const { cart, removeFromCart, clearCart, isCartOpen, toggleCart, totalPrice, updateQuantity } = useContext(CartContext);

  return (

    <aside
      className={`fixed right-0 top-0 h-full w-96 transform transition-all duration-300 ease-in-out shadow-xl border-l z-20
      cursor-pointer bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-600
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
    >

      <div className="h-full flex flex-col">

        {/* Encabezado */}
        <div className={`p-6 border-b flex justify-between items-center border-gray-200 dark:border-gray-600`}>

          <h2 className={`text-2xl flex font-serif text-green-800 dark:text-green-200`}>
            🛋️ Mi Carrito
          </h2>

          <button
            onClick={toggleCart}
            className={`text-gray-500 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-300
            transition-colors duration-200 cursor-pointer`}
          >
            ✕
          </button>
        </div>

        {/* Cuerpo del carrito */}
        <div className="flex-1 overflow-y-auto p-6">

          {/* Sin Productos */}
          {cart.length === 0 ? (

            <p className={`text-center py-8 cursor-default hover:scale-105 text-gray-500 dark:text-gray-400`}>
              Tu carrito está vacío
            </p>

          ) : (
            
            <div className="space-y-4">

              {/* Con Productos */}
              {cart.map((item) => (

                <div
                  key={item.id}
                  className={`p-4 rounded-lg flex items-center justify-between hover:scale-105 
                  bg-green-100 dark:bg-gray-700`}
                >

                  <div>
                    <h3 className={`font-medium text-green-800 dark:text-green-200`} >
                      {item.name}
                    </h3>

                    <p className={`text-sm text-green-600 dark:text-green-400`}>
                      ${item.price.toLocaleString()} c/u
                    </p>
                  </div>

                  {/* Controles de cantidad */}
                  <div className="flex items-center gap-3">

                    <div className={`flex items-center gap-2 rounded-full bg-white dark:bg-gray-600`}>

                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className={`px-3 py-1 transition-colors rounded-l-full
                        text-green-600 hover:bg-green-100 dark:text-green-300 dark:hover:bg-gray-500
                        ${item.quantity <= 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        -
                      </button>

                      <span className={`px-2 text-green-800 dark:text-green-100`}>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className={`px-3 py-1 transition-colors rounded-r-full cursor-pointer
                        text-green-600 hover:bg-green-100 dark:text-green-300 dark:hover:bg-gray-500`}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={`transition-colors hover:shadow-red-700 cursor-pointer
                      text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 `}
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

          

          <div className={`p-6 border-t border-gray-200 dark:border-gray-600`}
          >

                    <button
                      onClick={() => clearCart()}
                      className={`transition-colors hover:shadow-red-700 cursor-pointer
                      text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 `}
                    >
                      Borrar Carrito
                    </button>

            <div className="flex justify-between items-center">

              <span className={`text-lg font-semibold text-green-800 dark:text-green-200`}
              >
                Total:
              </span>

              <span className={`text-xl font-bold text-green-700 dark:text-green-300`}
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