import './Cart.css';
import React, { useEffect, useState } from 'react';
import Titulo from '../texts/Titulo';
import ItemCount from '../listcont/ItemCount';
import { getFetch } from '../../cart';






export default function Cart({ }) {


  const [carrito, setCarrito]= useState([]);

  useEffect(() => {

    getFetch()
    .then(respuesta=> setCarrito(respuesta))
    .catch((err)=>console.log(err))

},  []);



  return (
    <>
    <Titulo texto="Carrito de compras" />
    <div className='cartcont'>
      <div className='micarritocont'> 
        <p className='micarritotitulo'> Mi Carrito</p>  

    
      </div>    

      <div className='resumendelpedidocont'>
        <p className='micarritotitulo'> Resumen del pedido</p> 
      </div>
  
    </div>

    </>
  )
}
