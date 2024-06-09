import { useContext } from "react";
import CartContext from "../context/CartContext";
<<<<<<< HEAD
import { doc, getDoc } from "firebase/firestore";
import db from "./Hooks/firebase";
=======
import { getProductById } from '../components/Mocks/asyncMock';
>>>>>>> 9f6001387f146354158d1fb86c071679140917e5
import "./Styles/CartItem.css"

export default function CartItem({ item }) {
  const { removeFromCart, addToCart, removeItem } = useContext(CartContext);

  const handleAddToCart = async () => {
<<<<<<< HEAD
    const productRef = doc(db, "items", item.product.id);
    const productSnap = await getDoc(productRef);
    const productData = productSnap.data();
=======
    const productData = await getProductById(item.product.id);
>>>>>>> 9f6001387f146354158d1fb86c071679140917e5
    const availableStock = productData.stock;
    const currentQuantityInCart = item.quantity;
    if (currentQuantityInCart + 1 <= availableStock) {
      addToCart(item.product, 1);
<<<<<<< HEAD
=======
    } else {
      alert("No hay suficiente stock disponible.");
>>>>>>> 9f6001387f146354158d1fb86c071679140917e5
    }
  };

  return (
    <div key={item.product.id} className="cartProductContainer d-flex align-items-center mx-5 my-3 row">
<<<<<<< HEAD
      <div className="cartInfoProductContainer d-flex flex-column flex-sm-row col mt-3">
        <div className="col-12 col-sm-auto d-flex justify-content-center align-items-center mb-3">
          <img className="cartItemImage" src={item.product.image} alt={item.product.title} />
        </div>
        <div className="cartItemInfo d-flex col-12 col-sm ms-3 mb-3">
          <div>
            <p>{item.product.title}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.product.price}</p>
          </div>
        </div>
        <div className="d-flex col-12 col-sm justify-content-end align-items-center gap-3 mb-3">
=======
      <div className="cartInfoProductContainer d-flex col mt-2">
        <div className="col d-contents">
          <img className="cartItemImage me-3" src={item.product.image} alt={item.product.title} />
        </div>
        <div className="cartItemInfo col">
          <p>{item.product.title}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.product.price}</p>
        </div>
      </div>
      <div className="col d-flex justify-content-end my-2">
        <div className="d-flex gap-3">
>>>>>>> 9f6001387f146354158d1fb86c071679140917e5
          <button
            className="buttonLess"
            onClick={() => removeFromCart(item.product.id, 1)}
          >
            &nbsp;-&nbsp;
          </button>
          <button
            className={`buttonAdd ${item.quantity >= item.product.stock ? 'disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={item.quantity >= item.product.stock}
          >
            +
          </button>
          <button
            className="buttonRemove"
            onClick={() => removeItem(item.product.id)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}