import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (

    <div className={`bg-white dark:bg-gray-800
    rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300`}>

      <div className="relative h-64">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">

        <h3 className={`text-xl font-serif font-semibold mb-2 text-gray-800 dark:text-green-100 `}>
          {item.name}
        </h3>

        <p className={`text-2xl font-bold mb-4 text-green-700 dark:text-green-300`}>
          $ {item.price.toLocaleString()}
        </p>

        <button
          onClick={() => addToCart(item)}
          className={`bg-green-600 hover:bg-green-700 dark:bg-green-400 dark:hover:bg-green-300 cursor-pointer
          w-full text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2`}
        >

          <span>🛒 Añadir al Carrito</span>

        </button>
      </div>
    </div>

  );
};

export default ProductCard;