import './Cart.css';
import React, { useEffect, useState, useContext } from 'react';
import Titulo from '../texts/Titulo';
import { useCartContext } from '../../context/CartContext'
import CartItem from './CartItem';





export default function Cart({  }) {


  const {cartList, vaciarCart} = useCartContext()
  

console.log(cartList)


const initialValue = 0;


function precioFinal() {

  console.log(cartList.length)

  if (cartList.length > 0) {
    return cartList.map(a => a.precio).reduce((a, b) => a + b)
  }}



  const [itemcartcount, setItemcartcount] = useState()

const vaciarCarrito = () => {
  vaciarCart()
}

// ///
// function Add() {
//   setItemcartcount( itemcartcount + 1)}

// ///
// function Remove() {
//   setItemcartcount( itemcartcount - 1)
//    if (itemcartcount == 0) {setItemcartcount( itemcartcount )} }

function AddU() {
    console.log(cartList.map(a => a.cantidad) + 1)
}


  return (
    <>
    <Titulo texto="Carrito de compras" />

  


    <div className='cartcont'>
      <div className='micarritocont'> 
        <p className='micarritotitulo'> Mi Carrito</p>  
        {cartList.map((items) =>  
                <>
                <div className='micarritoitemscont'> 
                <img className='fotocart' src={items.img} alt="" />
       
                <div className='prodtipocont'>  
                <p className='carritoprod'> {items.nombre}</p>
                <p className='carritotipo'> {items.categoria}</p>
                <p className='carritotipo'> ${items.precioU} x u.</p>
                </div>
       
                <div className='cantpreciocont'>
                <div className='carritocantcont'>
                <p className='carritocant'> {items.cantidad}</p>
                <img className='carritocanteliminar'  src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/>
                </div>
                <p className='carritoprecio'> ${items.precio}</p>
       
                </div>
                </div>
                </> )}


      {/* //  producto={items.nombre} tipo={items.categoria} cantidad={items.stock} precio={items.precio} img={items.imgpro}
 */}
    
    <div className='vaciarcarrito' onClick={vaciarCarrito}>
                  VACIAR CARRITO
                </div>
      </div>    

      <div className='resumendelpedidocont'>
        <p className='micarritotitulo'> Resumen del pedido</p> 
        <p> Precio final:  ${precioFinal()} </p>

      </div>
    </div>

    </>
  )
} 
