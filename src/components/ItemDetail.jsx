import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import useCount from './Hooks/useCount';
import ItemCount from './ItemCount';
import './Styles/Item.css';
import CartContext from '../context/CartContext';
import db from './Hooks/firebase';

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { count, increment, decrement, reset } = useCount(0);
  const { addToCart, cart } = useContext(CartContext);
  const [showItemCount, setShowItemCount] = useState(true);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(item, count);
    reset();
  };

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "items", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };
    fetchItem();
  }, [id]);

  const currentCartItem = cart.find(cartItem => cartItem.product.id === item?.id);
  const currentStock = currentCartItem ? item?.stock - currentCartItem.quantity : item?.stock;

  return (
    <div className="container-fluid col-sm-9 col-md-7 col-lg-9 my-5 d-flex justify-content-center">
      <div className="col col-lg-6 col-xl-5 item card h-100">
        <div className="itemImgContainer">
          <img className="itemImg" src={item?.image} alt={item?.title} />
        </div>
        <h2 className="itemTitle">{item?.title}</h2>
        <p className="itemDescription">{item?.description}</p>
        <div className="buyContainer">
          <p className="itemPrice">${item?.price}</p>
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
            <div className="itemCartContainer">
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
        <p className='remainingStock d-flex justify-content-center my-3'>
          Unidades disponibles: <strong>{currentStock - count}</strong>
        </p>
      </div>
    </div>
  );
}

export default ItemDetail;
