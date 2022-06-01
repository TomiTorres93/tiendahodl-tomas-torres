import './Cart.css';
import React, { useEffect, useState, useContext } from 'react';
import Titulo from '../texts/Titulo';
import { useCartContext } from '../../context/CartContext'
import CartItem from './CartItem';
import { Link } from "react-router-dom"





export default function Cart({  }) {


  const {cartList, vaciarCart, eliminarItem} = useCartContext()
  

console.log(cartList)


const initialValue = 0;


function precioFinal() {

  console.log(cartList.length)

  if (cartList.length > 0) {
    return cartList.map(a => a.precio).reduce((a, b) => a + b).toLocaleString('de-DE')
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
        { cartList.length === 0 ?
    <Link className='link ' to={"/"}>
            <div className='vaciarcarrito carritovacio'>
            CARRITO VACÍO <br /> <br />
        <img className='backhomeimg' src="https://img.icons8.com/ios/50/000000/home--v1.png"/>
          </div></Link> :
          
    <>
    <Titulo texto="Carrito de compras" />

  


    <div className='cartcont'>
      <div className='micarritocont'> 
        <p className='micarritotitulo'> Mi Carrito</p>  
        {cartList.map((items) =>  
                <>
                 <CartItem items={items} key={items.id} nombre={items.nombre}  tipo={items.tipo} cantidad={items.cantidad} precio={(items.precioU * items.cantidad).toLocaleString('de-DE')} categoria={items.categoria} precioU={items.precioU.toLocaleString('de-DE')} img={items.img} />

                </> )}



      <div className='vaciarcarrito' onClick={vaciarCarrito}>
      VACIAR CARRITO
    </div>
    

      </div>    

      <div className='resumendelpedidocont'>
        <p className='micarritotitulo'> Resumen del pedido</p>
        {cartList.map((items) =>  
                <div className='detallecartrow' >
                 <p className='detallecartrownombre'>{items.nombre}</p> 
                 <p className='detallecartrowcant'>{items.cantidad} u.</p>
                 <p className='detallecartrowprecio'>${items.precio.toLocaleString('de-DE')}</p>

                </div >
                  )}
        <div className='detallecartrow'>          
        <p className='carritopreciototaltit'>TOTAL </p>         
        <p className='carritoprecio2'> ${precioFinal()} </p>
        </div>
      </div>
    </div>
</>
    } </>
  ) 
} 
