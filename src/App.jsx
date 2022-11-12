// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  console.log("app")

  // const mensaje = "Bienvenido a mi app"
  // const estilos = {}
  
  return (
    <div className="container">

      <NavBar/>
      <ItemListContainer/>

    </div>
  ); 
}

export default App;