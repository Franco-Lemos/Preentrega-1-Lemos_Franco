import { doc, getDoc } from "firebase/firestore";
import db from "./firebase";

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 600)
  });
};

export const getProductById = async (id) => {
  const productRef = doc(db, "items", id.toString());
  const productSnap = await getDoc(productRef);
  
  if (productSnap.exists()) {
    return productSnap.data();
  } else {
    throw new Error("Producto no encontrado");
  }
};

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    },600);
  });
}