import "./Styles/itemCount.css";

export default function ItemCount({ stock, count, increment, decrement }) {
  return (
    <div className="itemCountContainer">
      <div className="d-flex justify-content-between gap-2">
        <button 
          className={`buttonLessC ${count <= 0 ? 'disabled' : ''}`} 
          onClick={decrement} 
          disabled={count <= 0}
        >
          -
        </button>
        <span className="numCount">{count}</span>
        <button 
          className={`buttonAdd ${count >= stock ? 'disabled' : ''}`} 
          onClick={increment} 
          disabled={count >= stock}
        >
          +
        </button>
      </div>
    </div>
  );
}