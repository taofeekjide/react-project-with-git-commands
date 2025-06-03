import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetails/productDetails";
import CartPage from "./pages/cartPage/CartPage";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
