import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import useProductById from "./Hooks/useProductById";
import "./Styles/Item.css";

export default function ItemDetailContainer() {
  const { id } = useParams();
<<<<<<< HEAD
  const { loading, product } = useProductById(id);

  if (loading) {
    return <div className="loadingContainer">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
=======
  const { loading, product } = useProductById(parseInt(id));

  if (loading) {
    return <div className="loadingContainer">
      <div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
>>>>>>> 9f6001387f146354158d1fb86c071679140917e5
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