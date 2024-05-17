import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCount from "./Hooks/useCount";
import ItemCount from "./ItemCount";
import "./Styles/Item.css"

export default function Costume() {
  const { costumeId } = useParams();
  const [costume, setCostume] = useState(null);
  const { count, increment, decrement } = useCount(0);


  useEffect(() =>{
    fetch(`https://dummyjson.com/products/${costumeId}`)
    .then(res => res.json())
    .then(data => setCostume(data))
  }, []);

  return (

    <div className="container-fluid col-sm-9  col-md-7 col-lg-9 mt-5">
      <div className="item card h-100">
        <div className="itemImgContainer">
          <img className="itemImg" src={costume?.images[0]} alt={costume?.title} />
        </div>
        <h2 className="itemTitle">{costume?.title}</h2>
        <p className="itemDescription">{costume?.description}</p>
        <div className="buyContainer">
          <p className="itemPrice">${costume?.price}</p>
          <div>
            <div className="itemCounterContainer">
              <ItemCount 
              stock={costume?.stock}
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
  )
}