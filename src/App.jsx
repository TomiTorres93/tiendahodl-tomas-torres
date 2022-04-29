 import './App.css';
 import './Querys.css';
 import './funciones/effects/Animaciones.jsx';
 import Navbar from './components/header/Navbar';
 import ItemListContainer from './components/listcont/ItemListContainer';
 import ProductosCont from './components/productos/ProductosCont';
 


 function App() {
   return (
     <div className="App">
        <Navbar />
        <ItemListContainer/>
        <ProductosCont/>

     </div>
   );


    
 }

 export default App;
