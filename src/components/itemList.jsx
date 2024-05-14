import Item from "./item";
import "./Styles/Item.css";

export default function ItemList({ products }) {
  return (
    <section className="container-fluid col-sm-9  col-md-7 col-lg-9 mt-5">
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
        {products.map((product) => (
        <Item key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
}