import { useEffect, useState } from 'react';
// import { FaBeer } from 'react-icons/fa';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
 import './Querys.css';
 import './funciones/effects/Animaciones.jsx';

 import Navbar from './components/header/Navbar';
 import ItemListContainer from './components/listcont/ItemListContainer';
 import ItemDetailContainer from './components/listcont/ItemDetailContainer';



 function App() {

  

   return (
     <BrowserRouter>
     
        <div className="App">

          <Navbar />

          <Routes>
            <Route path='/' element = { <ItemListContainer/> } />
            <Route path='/detalle/:detalleID' element = { <ItemDetailContainer/> } />
            <Route path='/*' element ={ <Navigate to ='/' replace /> }></Route>
          </Routes>
        </div>
     </BrowserRouter>
   );


    
 }

 export default App;
