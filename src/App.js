// import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const mensaje = "Bienvenido a mi app"
  const estilos = {
    backgroundColor:"#888",
    padding: "20px"
  }

  const log = () => { console.log("Hola"); }
  const log2 = () => { console.log("Hi"); }
  
  return (
    <div className="container">

      <NavBar/>
      <ItemListContainer/>

      <h3 style={ estilos }>{ mensaje }</h3>
    </div>
  );
}

export default App;