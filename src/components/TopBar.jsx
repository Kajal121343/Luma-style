import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function TopBar() {
  const navigate = useNavigate();
  const { cart, wishlist } = useContext(CartContext);

  
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="bg-gray-100 text-sm px-6 py-2 flex justify-between items-center">
      
      <div>
        {user && (
          <span className="flex items-center gap-2 font-semibold text-gray-700">
            <FaUser /> {user.name}
          </span>
        )}
      </div>

      
      <div className="flex gap-6 items-center">
        {user ? (
          <>
           
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/wishlist")}
            >
              <FaHeart size={18} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </div>

            
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart size={18} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>

            
          </>
        ) : (
          <span
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => navigate("/")}
          >
            Sign In / Sign Up
          </span>
        )}

        
        <span
          className="cursor-pointer text-blue-600 hover:underline"
          onClick={() => navigate("/help")}
        >
          Help
        </span>
      </div>
    </div>
  );
}

export default TopBar;
