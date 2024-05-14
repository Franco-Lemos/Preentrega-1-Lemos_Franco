import { useEffect, useState } from "react";
import { getProducts } from "../Mocks/asyncMock";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  return { products, isLoading };
}