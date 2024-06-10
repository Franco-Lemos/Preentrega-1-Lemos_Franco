import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import useProductById from "./Hooks/useProductById";
import "./Styles/Item.css";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { loading, product } = useProductById(id);

  if (loading) {
    return <div className="loadingContainer">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }

  if (!product) {
    return <div className="notFoundContainer">
      <h1>PRODUCTO NO ENCONTRADO</h1>
    </div>
  }

  return (
    <div>
      <ItemDetail item={product} />
    </div>
  )
}