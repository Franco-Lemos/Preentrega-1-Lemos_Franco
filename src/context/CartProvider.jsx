import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { doc, getDoc } from "firebase/firestore";
import db from "../components/Hooks/firebase";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const addToCart = async (product, quantity) => {
    const itemInCart = cart.find((item) => item.product.id === product.id);

    const productRef = doc(db, "items", product.id);
    const productSnap = await getDoc(productRef);
    const productData = productSnap.data();
    const availableStock = productData.stock;

    const currentQuantityInCart = itemInCart ? itemInCart.quantity : 0;
    const newQuantity = currentQuantityInCart + quantity;

    if (newQuantity <= availableStock) {
      if (itemInCart) {
        const updatedCart = cart.map((item) => {
          if (item.product.id === product.id) {
            return { product, quantity: item.quantity + quantity };
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        setCart([...cart, { product, quantity }]);
      }
    } else {
      alert("No hay suficiente stock disponible.");
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (productId, quantity) => {
    const itemInCart = cart.find((item) => item.product.id === productId);
    if (itemInCart) {
      const updatedCart = cart.map((item) => {
        if (item.product.id === productId) {
          return { product: item.product, quantity: item.quantity - quantity };
        }
        return item;
      });

      const filteredCart = updatedCart.filter((item) => item.quantity > 0);

      setCart(filteredCart);
    }
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart
    .reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0)
    .toFixed(2);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeItem, clearCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}