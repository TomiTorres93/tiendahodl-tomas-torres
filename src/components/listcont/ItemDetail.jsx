import React, { useState } from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount';
import ProductosCont from '../productos/ProductosCont'
import Loader from './Loader';


function ItemDetail({img, nombre, descripcion, stock, loading}) {
    
    const loaders = [1];

    return (


        
    <div className='ItemDetailListCont'>

    {loading
    ? loaders.map((loader) => <Loader key={loader} />) : 
    <div className='itemdetailcont' >

    <img src={img} className="itemdetailimg" alt={nombre} />
    <div className='itemdetailDerCont'>
        <p className="itemdetailTitulo">{nombre}</p>
        <p className="itemdetailDescripcion">{descripcion}</p>
        <ProductosCont />
        <ItemCount stock={stock}/>
    </div>

</div>}

</div>



    ); }

export default ItemDetail;
