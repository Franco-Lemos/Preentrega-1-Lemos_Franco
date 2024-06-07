import { useEffect, useState } from "react";
import { getProducts, getProductByCategory } from "../Mocks/asyncMock";

export default function useProducts(categoryName) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  }, [categoryName]);

  return { products, isLoading };
}