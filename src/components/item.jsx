import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCount from "./Hooks/useCount";
import ItemCount from "./ItemCount";
import CartContext from '../context/CartContext';
import "./Styles/Item.css";

export default function Item({ item }) {
  const { count, increment, decrement } = useCount(0);
  const [showItemCount, setShowItemCount] = useState(true);
  const { addToCart, cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(item, count);
    setShowItemCount(false);
    navigate('/cart');
  };

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
          <p className="itemPrice p-3">${item.price}</p>
          <div>
            {showItemCount && (
              <div className="itemCounterContainer">
                <ItemCount 
                  stock={currentStock}
                  count={count}
                  increment={increment}
                  decrement={decrement}
                />
              </div>
            )}
            <div className="itemCartContainer mt-2">
              <button 
                className={`buttonAddToCart ${count === 0 || count > currentStock ? 'disabled' : ''}`} 
                onClick={handleAddToCart} 
                disabled={count === 0 || count > currentStock}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
        <div id='aqui'>
          <p className='remainingStock d-flex justify-content-center my-3'>
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