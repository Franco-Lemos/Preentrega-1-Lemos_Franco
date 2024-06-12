import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer'
import CartProvider from './context/CartProvider'; //Visual Studio se bugeó y me da un error en esta línea (Ya comprobé que no hay errores).
import Checkout from './components/Checkout';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer say = {"¡Bienvenidos a Tamriel \"Artilugios & Baratijas\"!"} />}/>
            <Route path="/category/:id" element={<ItemListContainer say = {"Sección {category}"} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer/>} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;