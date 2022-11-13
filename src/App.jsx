// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Titulo from './components/Titulo/Titulo';


function App() {
  console.log("app")
  
  return (
    <div className="container">

      <Titulo/>
      <NavBar/>
      <ItemListContainer/>

    </div>
  ); 
}

export default App;