import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-gyBYCUyUVkrPVuY4o7EuCaemNVR1hno",
  authDomain: "proyecto-final-react-f99e8.firebaseapp.com",
  projectId: "proyecto-final-react-f99e8",
  storageBucket: "proyecto-final-react-f99e8.appspot.com",
  messagingSenderId: "198173915484",
  appId: "1:198173915484:web:997705182ad2a625afa999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;