import CartIcon from "./CartIcon";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import "./Styles/CartIcon.css"
import { Link } from "react-router-dom";

function CartWidget() {
  const { cart } = useContext(CartContext);

  const cartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart">
      <div className="Cart">
        <CartIcon width={'45px'} height={'45px'} />
        <span id="CounterCart">{cartItems}</span>
      </div>
    </Link>
  )
}

export default CartWidget;