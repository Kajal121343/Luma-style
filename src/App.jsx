import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CartPage from "./pages/Cart";        // make sure this matches your file
import WishlistPage from "./pages/Wishlist"; // make sure this matches your file
import ProductDetails from "./pages/ProductDetails";
import HelpPage from "./pages/Help";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
