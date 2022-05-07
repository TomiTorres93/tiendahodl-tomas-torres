 import './App.css';
 import './Querys.css';
 import './funciones/effects/Animaciones.jsx';
 import Navbar from './components/header/Navbar';
 import ItemListContainer from './components/listcont/ItemListContainer';
 import ProductosCont from './components/productos/ProductosCont';
 import Nosotros from './components/nosotros/Nosotros';
 import Contacto from './components/contacto/Contacto';
 import ItemCount from './components/listcont/ItemCount';
 import ItemDetail from './components/listcont/ItemDetail';



 function App() {
   return (
     <div className="App">
        <Navbar />
        <ItemListContainer/>
  
     </div>
   );


    
 }

 export default App;
