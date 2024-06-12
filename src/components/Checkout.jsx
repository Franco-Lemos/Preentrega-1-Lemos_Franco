import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import db from './Hooks/firebase';
import "./Styles/CartContainer.css";
import "./Styles/CartItem.css"

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [buyer, setBuyer] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    email: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer({
      ...buyer,
      [name]: value
    });
  };

  const handleCheckout = async () => {
    const { firstName, lastName, phone, address, email } = buyer;
    if (!firstName || !lastName || !phone || !address || !email) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, complete todos los campos de información.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const order = {
      buyer,
      items: cart.map(item => ({
        id: item.product.id,
        title: item.product.title,
        price: item.product.price,
        quantity: item.quantity
      })),
      total: cartTotal,
      date: new Date().toISOString()
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      const generatedOrderId = docRef.id;
      setOrderId(generatedOrderId);
      clearCart();
      
      Swal.fire({
        title: 'Compra realizada con éxito!',
        text: `Gracias por tu compra, ${firstName}. Tu número de orden es: ${generatedOrderId}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        navigate('/');
      });

      const divEste = document.getElementById('form');
      if (divEste) {
        divEste.classList.add('visually-hidden');
      }

      const divContainer = document.getElementById('container');
      if (divContainer) {
        divContainer.classList.add('vh-80');
      }
    } catch (e) {
      console.error("Error adding document: ", e);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al procesar tu orden. Por favor, intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div id='container' className=''>
      <div id='form' className="container my-5">
      <div className='d-flex  justify-content-center mb-5 title'>
        <h1 className='fs-1 fw-medium welcome'>Resumen de Compra</h1>
      </div>
      <div className="card p-3">
        {cart.map(item => (
          <div key={item.product.id}>
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
          </div>
          <hr className='mx-0' />
          </div>
        ))}
        <div className='f-content'>
          <h3 className='mt-3 fw-semibold fs-2 totalText'>Total: ${cartTotal}</h3>
          <hr className='m-0 mb-3' />
        </div>
        <div>
          <div className='d-flex  justify-content-center'>
            <div className="d-flex  justify-content-center mx-5 mb-5 title f-content">
              <h2 className="fs-1 fw-medium welcome">Datos del comprador</h2>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <form className="form fw-semibold col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-12 col-xs-12">
              <div className="form-group">
                <label htmlFor="firstName">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={buyer.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={buyer.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={buyer.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={buyer.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={buyer.email}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='d-flex justify-content-end col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-12 col-xs-12'>
              <button className="buttonFinalize mt-3" onClick={handleCheckout}>Finalizar compra</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}