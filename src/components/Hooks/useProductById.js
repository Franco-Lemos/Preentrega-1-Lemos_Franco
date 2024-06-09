import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from "./firebase";

const useProductById = (id) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const docRef = doc(db, "items", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  return { loading, product };
};

export default useProductById;
