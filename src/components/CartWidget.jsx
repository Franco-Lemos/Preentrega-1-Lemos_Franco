import CartIcon from "./CartIcon";
import { useState } from "react";
import "./Styles/CartIcon.css"

function CartWidget() {

  const [cartItems, setCartItems]=
  useState(5);

  return (
    <div className="Cart">
      <CartIcon width={'45px'} height={'45px'} />
      <span id="CounterCart">{cartItems}</span>
    </div>
  )
}

export default CartWidget;