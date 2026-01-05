import { FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { cart, wishlist, addToCart, addToWishlist } =
    useContext(CartContext);

  const inCart = cart.some((p) => p.id === product.id);
  const inWishlist = wishlist.some((p) => p.id === product.id);

  return (
    <div className="border p-4 rounded hover:shadow-lg relative">
     
      <FaHeart
        className={`absolute top-2 right-2 cursor-pointer ${
          inWishlist ? "text-red-500" : "text-gray-400"
        }`}
        onClick={() => addToWishlist(product)}
      />

      
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      />

     
      <h3 className="mt-2 font-semibold text-sm line-clamp-2">
        {product.title}
      </h3>

      
      <div className="flex gap-2 items-center mt-1">
        <p className="text-green-600 font-bold">₹ {product.price}</p>
        <p className="text-gray-400 line-through text-sm">
          ₹ {(product.price * 1.2).toFixed(2)}
        </p>
      </div>

     
      <div className="flex items-center mt-1 text-yellow-400">
        {Array(Math.round(product.rating.rate))
          .fill()
          .map((_, i) => (
            <FaStar key={i} />
          ))}
        <span className="text-gray-600 ml-2 text-sm">
          ({product.rating.count})
        </span>
      </div>

      
      <button
        className="mt-2 w-full bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600"
        onClick={() => {
          if (inCart) {
            navigate("/cart"); 
          } else {
            addToCart(product); 
          }
        }}
      >
        {inCart ? "Go to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
