import useCount from "./Hooks/useCount";
import ItemCount from "./ItemCount";
import "./Styles/Item.css"

export default function Item({ item }) {
  const { count, increment, decrement } = useCount(0);

  const onAdd = (itemName, quantityToCarry) => {
    console.log("Nombre del Item: ", itemName);
    console.log("Cantidad a llevar: ", quantityToCarry);
  };

  return (
    <div className="col">
      <div className="item card h-100">
        <div className="itemImgContainer">
          <img className="itemImg" src={item.image} alt={item.title} />
        </div>
        <h2 className="itemTitle">{item.title}</h2>
        <p className="itemDescription">{item.description}</p>
        <p className="itemPrice">${item.price}</p>
        <div className="itemCounterContainer">
          <ItemCount 
          stock={item.stock}
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
  )
}