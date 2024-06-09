import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import { getProductByCategory } from '../components/Hooks/getProducts';
=======
import { getProductByCategory } from '../components/Mocks/asyncMock';
>>>>>>> 9f6001387f146354158d1fb86c071679140917e5
import Item from '../components/item';
import CartContext from '../context/CartContext';

function CategoryItemListContainer() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const productsData = await getProductByCategory(id);
      setProducts(productsData);
    };
    fetchProductsByCategory();
  }, [id]);

  return (
    <div className="container-fluid col-sm-9 col-md-7 col-lg-9 my-5 d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
        {products.map(product => (
          <div key={product.id} className='col'>
            <Item item={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryItemListContainer;
