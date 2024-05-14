import './App.css'
import Layout from "./components/Layout";
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <Layout>
      <ItemListContainer say = {"¡Bienvenidos a Tamriel \"Artilugios & Baratijas\"!"} />
    </Layout>
  );
}

export default App;
