import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../Hooks/firebase";

export default function useProducts(categoryName) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  }, [categoryName]);

  return { products, isLoading };
}