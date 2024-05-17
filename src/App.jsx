import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import ItemListContainer from './components/ItemListContainer';
import Costume from './components/Costume';

function App() {

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/inicio" element={<ItemListContainer say = {"¡Bienvenidos a Tamriel \"Artilugios & Baratijas\"!"} />}></Route>
        <Route path="/productos/:costumeId" element={<Costume />}></Route>
        <Route path="/ubicación" element={<ItemListContainer say = {"¡Sección de ubicación!"} />}></Route>
        <Route path="/pedidos" element={<ItemListContainer say = {"¡Sección de pedidos!"} />}></Route>
        <Route path="/contactos" element={<ItemListContainer say = {"¡Sección de contactos!"} />}></Route>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
