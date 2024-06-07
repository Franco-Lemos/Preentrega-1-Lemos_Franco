import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";
import "./Styles/CartContainer.css";
import 'animate.css';
import Swal from 'sweetalert2';

export default function CartContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const finalizePurchase = () => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    Swal.fire({
      title: 'Compra Finalizada',
      text: `Has comprado ${totalItems} productos por un total de $${cartTotal}. ¡Gracias por tu compra!`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      clearCart();
      navigate('/');
    });
  };

  return (
    <div className="pt-3">
      <div className="d-flex justify-content-center m-5 title">
        <h2 className="fs-1 fw-medium welcome">Mi Carrito</h2>
      </div>
      <div className={`pt-3 ${cart.length < 2 ? 'vh-40' : 'h-auto'}`}>
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
        <button
          className="buttonFinalize mt-2"
          onClick={finalizePurchase}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}