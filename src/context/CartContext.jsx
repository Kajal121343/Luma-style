import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    setCart(storedCart);
    setWishlist(storedWishlist);
  }, []);

  
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) return prev;

      const updatedCart = [...prev, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ⭐ SAVE
      return updatedCart;
    });
  };

  
  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((p) =>
      p.id === id ? { ...p, quantity } : p
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // ⭐ SAVE
  };

  
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((p) => p.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // ⭐ SAVE
  };

 
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;

      const updatedWishlist = [...prev, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // ⭐ SAVE
      return updatedWishlist;
    });
  };

 
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((p) => p.id !== id);

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // ⭐ SAVE
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}