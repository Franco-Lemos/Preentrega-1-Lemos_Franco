import { useEffect, useState } from "react";
<<<<<<< HEAD
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../Hooks/firebase";
=======
import { getProducts, getProductByCategory } from "../Mocks/asyncMock";
>>>>>>> 9f6001387f146354158d1fb86c071679140917e5

export default function useProducts(categoryName) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    const fetchProducts = async () => {
      setIsLoading(true);
      const q = categoryName 
        ? query(collection(db, "items"), where("category", "==", categoryName))
        : collection(db, "items");
      const querySnapshot = await getDocs(q);
      const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsList);
      setIsLoading(false);
    };

    fetchProducts();
=======
    setIsLoading(true);
    if (categoryName) {
      getProductByCategory(categoryName)
        .then((data) => setProducts(data))
        .finally(() => setIsLoading(false));
    } else {
      getProducts()
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false))
    }
>>>>>>> 9f6001387f146354158d1fb86c071679140917e5
  }, [categoryName]);

  return { products, isLoading };
}