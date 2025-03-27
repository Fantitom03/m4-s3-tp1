import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSideBar";

function App() {
  const { isCartOpen} = useContext(CartContext);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300
    bg-green-50 dark:bg-gray-900`}>
      <Header />
      <div className="flex-1 flex">
        <main className={`flex-1 transition-margin duration-300 ${isCartOpen ? "mr-96" : "mr-0"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProductList />
          </div>
        </main>
        <CartSidebar />
      </div>

      <Footer />
    </div>
  );
}

export default App;
