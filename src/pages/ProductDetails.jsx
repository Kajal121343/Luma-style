import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProducts } from "../services/api";
import { CartContext } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";


function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { cart, wishlist, addToCart, addToWishlist } = useContext(CartContext);

  const productId = parseInt(id);
  const inCart = cart.some((p) => p.id === productId);
  const inWishlist = wishlist.some((p) => p.id === productId);

  useEffect(() => {
    fetchProducts().then((data) => {
      const prod = data.find((p) => p.id === productId);
      setProduct(prod);
    });
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-10 flex flex-col md:flex-row gap-10">
      <img src={product.image} alt={product.title} className="h-96 object-contain" />

      <div className="flex-1">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-green-600 font-bold mt-2 text-xl">₹ {product.price}</p>
        <p className="text-gray-600 mt-2">{product.description}</p>

      
        <FaHeart
          className={`mt-2 cursor-pointer ${
            inWishlist ? "text-red-500" : "text-gray-400"
          }`}
          onClick={() => addToWishlist(product)}
        />

       
        <button
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={() => (inCart ? navigate("/cart") : addToCart(product))}
        >
          {inCart ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
