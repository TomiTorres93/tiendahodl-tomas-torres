import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ProductosCont from '../productos/ProductosCont'
import Loader from './Loader';


function ItemDetail({id, img, nombre, descripcion, loading}) {
    
    const loaders = [1];
    
 

    return (

    <div className='ItemDetailListCont'>

    {loading
    ? loaders.map((loader) => <Loader key={loader} />) : 
<div className='column'>
    <div className='itemdetailcont' id={id} >
        <img src={img} className="itemdetailimg" alt={nombre} />
        <div className='itemdetailDerCont'>
            <p className="itemdetailTitulo">{nombre}</p>
            <p className="itemdetailDescripcion">{descripcion}</p>
            <ProductosCont producto={nombre}  imgpro={img}  />
        </div>
        
    </div>
  
    </div>
    }

</div>

    ); }

export default ItemDetail;
