import { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
 import './Querys.css';
 import './funciones/effects/Animaciones.jsx';

 import Navbar from './components/header/Navbar';
 import ItemListContainer from './components/listcont/ItemListContainer';
 import ItemDetailContainer from './components/listcont/ItemDetailContainer';
 import Contacto from './components/contacto/Contacto';
 import Nosotros from './components/nosotros/Nosotros';
 import Cart from './components/cart/Cart';
import CartContextProvider from './context/CartContext';
import Panel from './firebase/Panel';
import Pagar from './components/cart/Pagar';
import Ordenes from './firebase/Ordenes';



 function App() {


   return (
     <BrowserRouter>
      <CartContextProvider>
        <div className="App">

          <Navbar />
            <Routes>
              <Route path='/' element = { <ItemListContainer/> } />
              <Route path='/detalle/:detalleID' element = { <ItemDetailContainer/> } />
              <Route path='/contacto' element = { <Contacto/> } />
              <Route path='/nosotrxs' element = { <Nosotros/> } />
              <Route path='/cart' element = { <Cart/> } />
              <Route path='/categoria/:id' element = { <ItemListContainer/> } />
              <Route path='/*' element ={ <Navigate to ='/' replace /> }></Route>
              <Route path='/panel' element = { <Panel/> } />
              <Route path='/finalizar-compra' element = { <Pagar/> } />
              <Route path='/ordenes' element = { <Ordenes/> } />
            </Routes>

        </div>
      </CartContextProvider>
     </BrowserRouter>
   );


    
 }

 export default App;
