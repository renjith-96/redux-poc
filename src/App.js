import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./modules/common/components/navbar";
import Products from "./modules/products";
import ProductDetail from "./modules/productdetails";
import Cart from "./modules/cart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="details/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
