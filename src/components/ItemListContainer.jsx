import "./Styles/Title.css";
import ItemList from "./itemList";
import useProducts from "./Hooks/useProducts";
import { useParams } from "react-router-dom";

function ItemListContainer({ say }) {
  const { id } = useParams();
  const { isLoading, products } = useProducts(id);

<<<<<<< HEAD
  const category = id ? id.charAt(0).toUpperCase() + id.slice(1) : '';
=======
  const category = id ? id.charAt(0).toUpperCase() + id.slice(1) : ''; // Capitaliza la categoría
>>>>>>> 9f6001387f146354158d1fb86c071679140917e5
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
