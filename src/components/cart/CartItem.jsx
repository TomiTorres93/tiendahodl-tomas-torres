import './Cart.css';
import React, { useEffect, useState, useContext } from 'react';
import { useCartContext } from '../../context/CartContext'



export default function CartItem({id, producto, tipo, cantidad, precio, }) {

    const {cartList, vaciarCart} = useCartContext()
    const [itemcartcount, setItemcartcount] = useState({cantidad})

///
function Add() {
    setItemcartcount( cantidad + 1)
 } 
  ///
  function Remove() {
    setItemcartcount( cantidad - 1)
 }
  
  


  return (
    <div className='micarritoitemscont'> 
    <p className='carritoprod'> {producto}</p>
    <p className='carritotipo'> {tipo}</p>
    <p className='carritocant'> {cantidad}</p>
    <p className='carritoprecio'> ${precio}</p>
    <button className='AddRemoveButton topleftradius' onClick={Remove}>-</button>
    <div className='contador'>{itemcartcount}</div>
    <button className='AddRemoveButton toprightradius' onClick={Add}>+</button> 
    </div>

  )
}
