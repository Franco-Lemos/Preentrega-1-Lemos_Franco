import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import ItemListContainer from './components/ItemListContainer';
// import Costume from './components/Costume';
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoryItemListContainer from './components/CategoryItemListContainer';

function App() {

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/inicio" element={<ItemListContainer say = {"¡Bienvenidos a Tamriel \"Artilugios & Baratijas\"!"} />}/>
        <Route path="/category/:id" element={<CategoryItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
