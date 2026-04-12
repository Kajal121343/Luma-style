import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CartPage from "./pages/Cart";
import WishlistPage from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import HelpPage from "./pages/Help";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  );
}

export default App;
