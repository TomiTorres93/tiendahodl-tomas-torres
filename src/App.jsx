 import './App.css';
 import './Querys.css';
 import './funciones/effects/Animaciones.jsx';
 import Navbar from './components/header/Navbar';
 import ItemListContainer from './components/listcont/ItemListContainer';
 import ItemDetailContainer from './components/listcont/ItemDetailContainer';



 function App() {

  

   return (
     <div className="App">
        <Navbar />
        <ItemListContainer/>
        <ItemDetailContainer/>
     </div>
   );


    
 }

 export default App;
