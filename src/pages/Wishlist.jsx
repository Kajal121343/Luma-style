import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function WishlistPage() {
  const { wishlist = [], removeFromWishlist } = useContext(CartContext);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((p) => (
            <div key={p.id} className="border p-4 rounded">
              <img
                src={p.image}
                alt={p.title}
                className="h-40 mx-auto object-contain"
              />
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="text-green-600 font-bold">₹ {p.price}</p>

              <button
                onClick={() => removeFromWishlist(p.id)}
                className="mt-2 w-full bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
