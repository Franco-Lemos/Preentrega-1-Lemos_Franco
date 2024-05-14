import "./Styles/itemCount.css";

export default function ItemCount ( { stock, count, increment, decrement } ) {
  return (
    <div className="itemCountContainer">
      <div className="itemCountCounterContainer">
        <button className="itemCountButton" onClick={decrement} disabled={count <= 0}>
          -
        </button>
        <span>{count}</span>
        <button className="itemCountButton" onClick={increment} disabled={count >= stock}>
          +
        </button>
        </div>
    </div>
  );
}