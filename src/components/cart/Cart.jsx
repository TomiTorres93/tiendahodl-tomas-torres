import './Cart.css';
import React, { useEffect, useState, useContext } from 'react';
import Titulo from '../texts/Titulo';
import { useCartContext } from '../../context/CartContext'





export default function Cart({  }) {


  const {cartList, vaciarCart} = useCartContext()
  
 let cartmap = cartList.map((item) => {

  let setcount = item.cantidad;

  console.log(setcount)
} )




  const [itemcartcount, setItemcartcount] = useState(0)

const vaciarCarrito = () => {
  vaciarCart()
}

///
function Add() {
  setItemcartcount( itemcartcount + 1)}

///
function Remove() {
  setItemcartcount( itemcartcount - 1)
   if (itemcartcount == 0) {setItemcartcount( itemcartcount )} }


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
        <p className='carritoprod'> {items.producto}</p>
        <p className='carritotipo'> {items.tipo}</p>
        </div>

        <div className='cantpreciocont'>
        <div className='carritocantcont'>
        <p className='carritocant'>-</p>
        <p className='carritocant'> {items.cantidad}</p>
        <p className='carritocant'>+</p>
        </div>
        <p className='carritoprecio'> ${items.precio}</p>

        </div>
        </div>
 
        </>
        )}

      </div>    

      <div className='resumendelpedidocont'>
        <p className='micarritotitulo'> Resumen del pedido</p> 
        

      </div>
          <div onClick={vaciarCarrito}>
            Vaciar Cart
          </div>
    </div>

    </>
  )
} 
