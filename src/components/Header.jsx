import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png"; // your logo

function Header({ onSearch }) {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const { cart, wishlist } = useContext(CartContext); 

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b relative bg-white">
      
      <img
        src={logo}
        alt="LumaStyle Logo"
        className="h-16 cursor-pointer"
        onClick={() => navigate("/home")}
      />

      
      <div className="flex w-1/2">
        <input
          type="text"
          placeholder="Search product..."
          className="border w-full p-2 rounded-l"
          value={searchText}
          onChange={handleSearchChange}
        />
        <button
          type="button"
          className="bg-orange-500 text-white px-4 rounded-r"
          onClick={() => onSearch(searchText)}
        >
          <FaSearch />
        </button>
      </div>

      
      <div className="flex gap-6 items-center text-gray-700">
        {/* Wishlist */}
        <div className="relative cursor-pointer" onClick={() => navigate("/wishlist")}>
          <FaHeart size={22} className="hover:text-red-500" />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </div>

       
        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <FaShoppingCart size={22} className="hover:text-orange-500" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
