import './App.css'
import Brand from "./components/Brand";
import Navbar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div>
      <div className='headerWrapper'>
      <Brand />
      <Navbar />
      </div>
      <ItemListContainer say="¡Bienvenidos a Tamriel &quot;Artilujios & Baratijas&quot;!"/>
    </div>
  );
}

export default App;
