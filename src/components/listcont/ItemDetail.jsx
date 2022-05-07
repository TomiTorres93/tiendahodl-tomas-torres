import React, { useState } from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount';
import btcmoon from './img/btcmoon.png';
import ProductosCont from '../productos/ProductosCont'



function ItemDetail({img, id, producto, descripcion, stock}) {


  


    return (

  <div className="itemdetailcont" id={id} onClick="" >
        <img src={btcmoon} className="itemdetailimg" alt={producto} />

        <div className='itemdetailDerCont'>
        <p className="itemdetailTitulo">Nombre Producto</p>
        <p className="itemdetailDescripcion">Todos empezamos comprando algunos satoshis.</p>
        <ProductosCont />
        <ItemCount stock={stock}/>
        </div>
  </div>
    ); }

export default ItemDetail;
