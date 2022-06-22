import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './Querys.css';
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
import NuevoProducto from './firebase/NuevoProducto';
import Miorden from './firebase/Miorden';
import Correos from './firebase/Correos';
import OrdenDetailCont from './firebase/OrdenDetailCont';
import OrdersContextProvider from './context/OrdersContext';
import Pagoprocesado from './components/cart/Pagoprocesado';



function App() {


  return (
    <BrowserRouter>
      <OrdersContextProvider>
        <CartContextProvider>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/detalle/:detalleID' element={<ItemDetailContainer />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/nosotrxs' element={<Nosotros />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/categoria/:id' element={<ItemListContainer />} />
              <Route path='/*' element={<Navigate to='/' replace />}></Route>
              <Route path='/panel' element={<Panel />} />
              <Route path='/panel/productos' element={<NuevoProducto />} />
              <Route path='/panel/ordenes' element={<Ordenes />} />
              <Route path='/finalizar-compra' element={<Pagar />} />
              <Route path='/panel/ordenes/detalle/:detalleID' element={<OrdenDetailCont />} />
              <Route path='/mi-orden' element={<Miorden />} />
              <Route path='/panel/correos' element={<Correos />} />
              <Route path='/checkout' element={<Pagoprocesado />} />


            </Routes>
          </div>
        </CartContextProvider>
      </OrdersContextProvider>
    </BrowserRouter>
  );

}

export default App;
