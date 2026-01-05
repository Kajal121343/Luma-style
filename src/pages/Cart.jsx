import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart = [], removeFromCart, updateQuantity } = useContext(CartContext);

  const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, p) => acc + p.quantity * p.price,
    0
  );

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-4 border p-4 rounded"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-24 object-contain"
                />

                <div className="flex-1">
                  <h2 className="font-semibold">{p.title}</h2>
                  <p>₹ {p.price}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(p.id, Math.max(1, p.quantity - 1))
                      }
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span>{p.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(p.id, p.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(p.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="font-semibold">Total Items: {totalItems}</p>
            <p className="font-semibold">
              Total Price: ₹ {totalPrice.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
