// // En CategoryItemListContainer.jsx
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getProductByCategory } from '../components/Mocks/asyncMock';
// import ItemCount from '../components/ItemCount';

// function CategoryItemListContainer() {
//   const { id } = useParams();
//   const [products, setProducts] = useState([]);
//   const { count, increment, decrement } = useCount(0);

//   useEffect(() => {
//     const fetchProductsByCategory = async () => {
//       const productsData = await getProductByCategory(id);
//       setProducts(productsData);
//     };
//     fetchProductsByCategory();
//   }, [id]);

//   return (
//     <div className="container-fluid col-sm-9 col-md-7 col-lg-9 my-5 d-flex justify-content-center">
//       {products.map(product => (
//         <div key={product.id} className="col col-lg-6 col-xl-5 item card h-100">
//           <div className="itemImgContainer">
//             <img className="itemImg" src={product.image} alt={product.title} />
//           </div>
//           <h2 className="itemTitle">{product.title}</h2>
//           <p className="itemDescription">{product.description}</p>
//           <div className="buyContainer">
//             <p className="itemPrice">${product.price}</p>
//             <div>
//               <div className="itemCounterContainer">
//                 <ItemCount 
//                   stock={product?.stock}
//                   count={count}
//                   increment={increment}
//                   decrement={decrement}
//                 />
//               </div>
//               <div className="itemCartContainer">
//                 <button className="itemCartButton" onClick={() => onAdd(item, count)}>
//                   Añadir al carrito
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CategoryItemListContainer;
//========================================================================================================================
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getProductByCategory } from '../components/Mocks/asyncMock';
// import useCount from "./Hooks/useCount";
// import ItemCount from '../components/ItemCount';

// function CategoryItemListContainer() {
//   const { id } = useParams();
//   const [products, setProducts] = useState([]);
//   const { count, increment, decrement } = useCount(0);

//   useEffect(() => {
//     const fetchProductsByCategory = async () => {
//       const productsData = await getProductByCategory("indumentaria"); // Modificación aquí
//       setProducts(productsData);
//     };
//     fetchProductsByCategory();
//   }, []);

//   return (
//     <div className="container-fluid col-sm-9 col-md-7 col-lg-9 my-5 d-flex justify-content-center">
//       <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
//         {products.map(product => (
//           <div key={product.id} className='col'>
//             <div className="item card h-100">
//             <div className="itemImgContainer">
//               <img className="itemImg" src={product.image} alt={product.title} />
//             </div>
//             <h2 className="itemTitle">{product.title}</h2>
//             <p className="itemDescription">{product.description}</p>
//             <div className="buyContainer">
//               <p className="itemPrice">${product.price}</p>
//               <div>
//                 <div className="itemCounterContainer">
//                 <ItemCount 
//                   stock={product?.stock}
//                   count={count}
//                   increment={increment}
//                   decrement={decrement}
//                 />
//                 </div>
//                 <div className="itemCartContainer">
//                 <button className="itemCartButton" onClick={() => onAdd(item, count)}>
//                   Añadir al carrito
//                 </button>
//                 </div>
//               </div>
//             </div>
//             </div>
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryItemListContainer;

//================================================================================================================================

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getProductByCategory } from '../components/Mocks/asyncMock';
// import useCount from "./Hooks/useCount";
// import ItemCount from '../components/ItemCount';

// function CategoryItemListContainer() {
//   const { id } = useParams();
//   const [products, setProducts] = useState([]);
//   const { count, increment, decrement } = useCount(0);

//   useEffect(() => {
//     const fetchProductsByCategory = async () => {
//       const productsData = await getProductByCategory("indumentaria"); // Modificación aquí
//       setProducts(productsData);
//     };
//     fetchProductsByCategory();
//   }, []);

//   return (
//     <div className="container-fluid col-sm-9 col-md-7 col-lg-9 my-5 d-flex justify-content-center">
//       <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
//         {products.map(product => (
//           <div key={product.id} className='col'>
//             <div className="item card h-100">
//             <div className="itemImgContainer">
//               <img className="itemImg" src={product.image} alt={product.title} />
//             </div>
//             <h2 className="itemTitle">{product.title}</h2>
//             <p className="itemDescription">{product.description}</p>
//             <div className="buyContainer">
//               <p className="itemPrice">${product.price}</p>
//               <div>
//                 <div className="itemCounterContainer">
//                 <ItemCount 
//                   stock={product?.stock}
//                   count={count}
//                   increment={increment}
//                   decrement={decrement}
//                 />
//                 </div>
//                 <div className="itemCartContainer">
//                 <button className="itemCartButton" onClick={() => onAdd(item, count)}>
//                   Añadir al carrito
//                 </button>
//                 </div>
//               </div>
//             </div>
//             </div>
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryItemListContainer;

//==============================================================================================================================

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getProductByCategory } from '../components/Mocks/asyncMock';
// import ItemCount from '../components/ItemCount';

// function CategoryItemListContainer() {
//   const { id } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProductsByCategory = async () => {
//       const productsData = await getProductByCategory("indumentaria");
//       setProducts(productsData);
//     };
//     fetchProductsByCategory();
//   }, []);

//   return (
//     <div className="container-fluid col-sm-9 col-md-7 col-lg-9 my-5 d-flex justify-content-center">
//       <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
//         {products.map(product => (
//           <div key={product.id} className='col'>
//             <div className="item card h-100">
//               <div className="itemImgContainer">
//                 <img className="itemImg" src={product.image} alt={product.title} />
//               </div>
//               <h2 className="itemTitle">{product.title}</h2>
//               <p className="itemDescription">{product.description}</p>
//               <div className="buyContainer">
//                 <p className="itemPrice">${product.price}</p>
//                 <div>
//                   <div className="itemCounterContainer">
//                     <ItemCount 
//                       stock={product?.stock}
//                       // Usa un estado individual para cada producto
//                       count={product.count}
//                       // Incrementa solo el conteo del producto actual
//                       increment={() => {
//                         const updatedProducts = [...products];
//                         updatedProducts.forEach(p => {
//                           if (p.id === product.id && p.count < product.stock) {
//                             p.count += 1;
//                           }
//                         });
//                         setProducts(updatedProducts);
//                       }}
//                       // Decrementa solo el conteo del producto actual
//                       decrement={() => {
//                         const updatedProducts = [...products];
//                         updatedProducts.forEach(p => {
//                           if (p.id === product.id && p.count > 0) {
//                             p.count -= 1;
//                           }
//                         });
//                         setProducts(updatedProducts);
//                       }}
//                     />
//                   </div>
//                   <div className="itemCartContainer">
//                     <button className="itemCartButton" onClick={() => onAdd(item, product.count)}>
//                       Añadir al carrito
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryItemListContainer;

//==============================================================================================================================

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../components/Mocks/asyncMock';
import ItemCount from '../components/ItemCount';

function CategoryItemListContainer() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const productsData = await getProductByCategory(id);
      setProducts(productsData.map(product => ({ ...product, count: 0 }))); // Agrega un conteo inicial de 0 a cada producto
    };
    fetchProductsByCategory();
  }, [id]);

  const handleIncrement = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const handleDecrement = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, count: Math.max(product.count - 1, 0) } : product
      )
    );
  };

  return (
    <div className="container-fluid col-sm-9 col-md-7 col-lg-9 my-5 d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
        {products.map(product => (
          <div key={product.id} className='col'>
            <div className="item card h-100">
              <div className="itemImgContainer">
                <img className="itemImg" src={product.image} alt={product.title} />
              </div>
              <h2 className="itemTitle">{product.title}</h2>
              <p className="itemDescription">{product.description}</p>
              <div className="buyContainer">
                <p className="itemPrice">${product.price}</p>
                <div>
                  <div className="itemCounterContainer">
                    <ItemCount 
                      stock={product.stock}
                      count={product.count}
                      increment={() => handleIncrement(product.id)} // Usa una función de incremento que pasa el ID del producto
                      decrement={() => handleDecrement(product.id)} // Usa una función de decremento que pasa el ID del producto
                    />
                  </div>
                  <div className="itemCartContainer">
                    <button className="itemCartButton" onClick={() => onAdd(item, product.count)}>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryItemListContainer;
