 import logo from './logo.svg';
 import './App.css';
 import './Querys.css';
 import Navbar from './components/header/Navbar';
 import ItemListContainer from './components/listcont/ItemListContainer';
 


 function App() {
   return (
     <div className="App">
         <Navbar />
        <ItemListContainer/>
     </div>
   );
 }

 export default App;
