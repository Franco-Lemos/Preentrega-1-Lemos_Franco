import "./Styles/Title.css";
import ItemList from "./itemList";
import useProducts from "./Hooks/useProducts";
import { useParams } from "react-router-dom";

function ItemListContainer({ say }) {
  const { id } = useParams();
  const { isLoading, products } = useProducts(id);

  const category = id ? id.charAt(0).toUpperCase() + id.slice(1) : '';
  const dynamicSay = say.replace("{category}", category);

  if (isLoading) return (
    <div className="loadingContainer">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return (
    <div>
      <div className="d-flex justify-content-center m-5">
        <div className="title">
          <h2 className="welcome">{dynamicSay}</h2>
        </div>
      </div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
