import ProductCard from "./ProductCard";
import productos from '../db/products.json'


const ProductList = () => {

  return (
    <div className="mx-auto transition-all duration-300">
      <h2 className={`text-3xl font-serif font-bold mb-8 hover:scale-95 cursor-default text-green-800 dark:text-green-200 }`}>
        🪑 Nuestra Colección
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productos.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;