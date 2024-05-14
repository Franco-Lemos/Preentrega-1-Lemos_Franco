import "./Styles/ItemListContainer.css"
import ItemList from "./itemList";
import useProducts from "./Hooks/useProducts";

function ItemListContainer({say}){
  const {isLoading, products} = useProducts();

  if(isLoading) return <h1>Cargando...</h1>
  
  return (
    <div>
      <div className="title">
        <h2 className="container-fluid welcome text-center col-sm-9 col-md-7 col-lg-9 mt-5">{say}</h2>
      </div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer