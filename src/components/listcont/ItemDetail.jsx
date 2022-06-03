import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import Loader from './Loader';
import ItemCount from '../listcont/ItemCount';
import AfterCount from '../listcont/AfterCount';
import { useCartContext } from '../../context/CartContext'

function ItemDetail({id, img, imgpro, nombre, categoria, descripcion, loading, cantidad, precio}) {
    
    const loaders = [1];
    
    const [botonTipo, setBotonTipo] = useState('itemcount')
    const [stock, setStock] = useState()
    const [tipo, setTipo] = useState({})
    const [count, setCount] = useState(0)
 
    const itemcountChange = () => {
        if (botonTipo === "itemcount") {
          setBotonTipo("seguir o volver")
        } else {setBotonTipo("itemcount")}
        
       }
    
       // IMPORTACIÓN DEL CARTCONTEXT Y DESTRUCTURING PARA EXTRAER LA FUNCIÓN.
    
       const {addToCart, cartList} = useCartContext()
    
       const onAdd = () => {
            addToCart({ id: id, img: imgpro, nombre, categoria, tipo, cantidad: count, precioU: precio, precio: (precio * count)}) }
    
            console.log(cartList)
    
    ///
       function Add() {
           setCount( count + 1)
           if (count == cantidad) {setCount( count )} } 
    ///
       function Remove() {
           setCount( count - 1)
            if (count == 0) {setCount( count )} }

         

    return (

    <div className='ItemDetailListCont'>

    {loading
    ? loaders.map((loader) => <Loader key={loader} />) : 
<div className='column'>
    <div className='itemdetailcont' id={id} >
        <img src={imgpro} className="itemdetailimg" alt={nombre} />
        <div className='itemdetailDerCont'>
            <p className="itemdetailTitulo">{nombre}</p>
            <p className="itemdetailDescripcion">{descripcion}</p>
            <p className="itemdetailPrecio">${precio}</p>
            
  { botonTipo === 'itemcount' ?
      <ItemCount stock={cantidad} nombre={nombre} precio={precio} cantidad={cantidad} onAdd={onAdd} itemcount={itemcountChange} add={Add} remove={Remove} count={count} /> :

      <AfterCount itemcount={itemcountChange} />
    }
        </div>
        
    </div>
  
    </div>
    }

</div>

    ); }

export default ItemDetail;
