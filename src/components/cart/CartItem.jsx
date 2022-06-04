import './Cart.css';
import React, { useEffect, useState, useContext } from 'react';
import { useCartContext } from '../../context/CartContext'
import { getDoc, doc, addDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId} from 'firebase/firestore';


export default function CartItem({precioU, cantidad, precio, img, categoria, nombre, items, id, talle}) {

    const {cartList, vaciarCart, eliminarItem} = useCartContext()
    const [itemcartcount, setItemcartcount] = useState({cantidad})

///
function Add() {
    setItemcartcount( itemcartcount + 1)
 } 
  ///
  function Remove() {
    setItemcartcount( itemcartcount - 1)
 }

 
const elimItem = () => {
  eliminarItem(items.id)
}






  return (
<div className='micarritoitemscont'> 
                <img className='fotocart' src={img} alt="" />
       
                <div className='prodtipocont'>  
                <p className='carritoprod'> {nombre}</p>
                <p className='carritotipo'> {categoria.toUpperCase()}</p>
                <p className='carritotipo'> TALLE {talle.toUpperCase()}</p>
                <p className='carritotipo'> ${precioU} x u.</p>
                </div>
       
                <div className='cantpreciocont'>

                  <div className='carritocantcont'>
                    <p className='carritocant'> {cantidad}</p>
                    <img className='carritocanteliminar' onClick={elimItem}  src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/>
                  </div>
                  
                  <p className='carritoprecio'> ${precio}</p>
       
                </div>
                </div>
  )
}


