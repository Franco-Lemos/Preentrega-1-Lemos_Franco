import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";
import "./Styles/CartContainer.css";
import 'animate.css';
import Swal from 'sweetalert2';
import { collection, addDoc, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import db from "./Hooks/firebase";

export default function CartContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const validateBuyer = () => {
    const { name, phone, email } = buyer;
    if (!name || !phone || !email) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, complete todos los campos de información.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    }
    return true;
  };

  const finalizePurchase = async () => {
    if (!validateBuyer()) {
      return;
    }

    try {
      const itemsRef = collection(db, "items");
      const q = query(itemsRef, where(documentId(), "in", cart.map(item => item.product.id)));
      const querySnapshot = await getDocs(q);

      const batch = writeBatch(db);
      const outOfStock = [];

      querySnapshot.docs.forEach((doc) => {
        const itemInCart = cart.find(item => item.product.id === doc.id);
        if (doc.data().stock >= itemInCart.quantity) {
          batch.update(doc.ref, { stock: doc.data().stock - itemInCart.quantity });
        } else {
          outOfStock.push({ ...doc.data(), id: doc.id });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const order = {
          buyer,
          items: cart.map(item => ({
            id: item.product.id,
            title: item.product.title,
            price: item.product.price,
            quantity: item.quantity,
          })),
          date: new Date().toISOString(),
          total: cartTotal,
        };

        const orderRef = await addDoc(collection(db, "orders"), order);
        clearCart();
        Swal.fire({
          title: 'Compra Finalizada',
          text: `Gracias por tu compra, tu código de comprobante es: ${orderRef.id}`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      } else {
        Swal.fire({
          title: 'Stock insuficiente',
          text: 'Algunos productos no tienen suficiente stock.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    } catch (error) {
      console.error("Error finalizando la compra: ", error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al finalizar la compra. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
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
      {cart.length > 0 && (
        <div className="d-flex justify-content-center">
          <div className="formContainer p-5 mx-5">
            <div className="d-flex  justify-content-center mx-5 mb-5 title">
              <h3 className="fs-1 fw-medium welcome">Datos del comprador</h3>
            </div>
            <form className="form fw-semibold">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" name="name" value={buyer.name} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="text" className="form-control" id="phone" name="phone" value={buyer.phone} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={buyer.email} onChange={handleInputChange} required />
              </div>
            </form>
          </div>
        </div>
      )}
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