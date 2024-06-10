import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useCount from "./Hooks/useCount";
import CartContext from '../context/CartContext';
import "./Styles/Item.css";

export default function Item({ item }) {
  const { count} = useCount(0);
  const {cart } = useContext(CartContext);
  const currentCartItem = cart.find(cartItem => cartItem.product.id === item.id);
  const currentStock = currentCartItem ? item.stock - currentCartItem.quantity : item.stock;

  return (
    <div className="col">
      <div className="item card h-100">
        <Link to={`/item/${item.id}`}>
          <div className="itemImgContainer">
            <img className="itemImg" src={item.image} alt={item.title} />
          </div>
          <h2 className="itemTitle">{item.title}</h2>
        </Link>
        <p className="itemDescription">{item.description}</p>
        <div className="buyContainer">
          <p className="itemPrice d-flex justify-content-center p-3">Precio ${item.price}</p>
        </div>
        <div className='d-flex justify-content-center'>
          <p className='remainingStock my-3'>
            Unidades disponibles: <strong>{currentStock - count}</strong>
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <Link to={`/item/${item.id}`}>
            <button className="buttonMoreInfo">
              Más info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}