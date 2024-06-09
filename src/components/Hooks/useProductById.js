// import { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import db from "../Hooks/firebase";

// export default function useProductById(productId) {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const productRef = doc(db, "items", productId);
//       const productSnap = await getDoc(productRef);
//       if (productSnap.exists()) {
//         setProduct({ id: productSnap.id, ...productSnap.data() });
//       } else {
//         setProduct(null);
//       }
//       setLoading(false);
//     };

//     fetchProduct();
//   }, [productId]);

//   return {
//     product,
//     loading,
//   };
// }

// src/hooks/useProductById.js
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
