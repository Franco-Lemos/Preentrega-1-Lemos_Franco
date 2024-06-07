import { useContext } from "react";
import CartContext from "../context/CartContext";
import { getProductById } from '../components/Mocks/asyncMock';
import "./Styles/CartItem.css"

export default function CartItem({ item }) {
  const { removeFromCart, addToCart, removeItem } = useContext(CartContext);

  const handleAddToCart = async () => {
    const productData = await getProductById(item.product.id);
    const availableStock = productData.stock;
    const currentQuantityInCart = item.quantity;
    if (currentQuantityInCart + 1 <= availableStock) {
      addToCart(item.product, 1);
    } else {
      alert("No hay suficiente stock disponible.");
    }
  };

  return (
    <div key={item.product.id} className="cartProductContainer d-flex align-items-center mx-5 my-3 row">
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