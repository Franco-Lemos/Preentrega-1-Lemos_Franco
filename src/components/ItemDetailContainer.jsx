// En ItemDetailContainer.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../components/Mocks/asyncMock';
import useCount from "./Hooks/useCount";
import ItemCount from "./ItemCount";
import "./Styles/Item.css"

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { count, increment, decrement } = useCount(0);

  useEffect(() => {
    const fetchItem = async () => {
      const itemData = await getProductById(parseInt(id));
      setItem(itemData);
    };
    fetchItem();
  }, [id]);

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
            <div className="itemCounterContainer">
              <ItemCount 
              stock={item?.stock}
              count={count}
              increment={increment}
              decrement={decrement}
              />
            </div>
            <div className="itemCartContainer">
              <button className="itemCartButton" onClick={() => onAdd(item, count)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
