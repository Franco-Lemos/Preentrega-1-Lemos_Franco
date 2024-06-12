import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./Styles/CartContainer.css";
import 'animate.css';

export default function CartContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Carrito vacío',
        text: 'No hay productos seleccionados.',
      });
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="pt-3">
      <div className="d-flex justify-content-center m-5 title">
        <h2 className="fs-1 fw-medium welcome">Mi Carrito</h2>
      </div>
      <div className={`pt-3 ${cart.length === 0 || cart.length === 1 ? 'vh-40' : 'h-auto'}`}>
        {cart.length === 0 ? (
          <h1 className="d-flex justify-content-center m-5 animate__animated animate__flash animate__slower animate__infinite text-danger">Carrito vacío</h1>
        ) : (
          cart.map((item) => {
            return <CartItem key={item.product.id} item={item} />;
          })
        )}
      </div>
      <hr className="m-5" />
      <h3 className="d-flex justify-content-end mx-5 mt-5 totalText fw-semibold">Total: ${cartTotal}</h3>
      <div className="d-flex justify-content-end mx-5 gap-3">
        <button
          className="buttonClear mt-2"
          onClick={clearCart}
        >
          Limpiar carrito
        </button>
        <button className="buttonFinalize mt-2" onClick={handleCheckout}>Comprar</button>
      </div>
    </div>
  );
}