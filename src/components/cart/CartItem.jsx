import './Cart.css';
import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"


export default function CartItem({ precioU, cantidad, precio, img, categoria, nombre, items, id, talle}) {

  const { eliminarItem } = useCartContext()

  //ESTA FUNCIÓN LLAMA A LA FUNCIÓN ELIMINARITEM DEL CART CONTEXT
  //QUE ELIMINA EL PRODUCTO DEL CARRITO
  const elimItem = () => {
    eliminarItem(items.orden)
  }

  return (
    <div className='micarritoitemscont'>

      <Link to={`/detalle/${id}`}>
        <img className='fotocart' src={img} alt="" />
      </Link>
      <div className='prodtipocont'>
        <p className='carritoprod'> {nombre}</p>
        <p className='carritotipo'> {categoria.toUpperCase()}</p>
        <p className='carritotipo'> TALLE {talle.toUpperCase()}</p>
        <p className='carritotipo'> ${precioU} x u.</p>
      </div>

      <div className='cantpreciocont'>
        <div className='carritocantcont'>
          <p className='carritocant'> {cantidad}</p>
          <img className='carritocanteliminar' onClick={elimItem} src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png" />
        </div>

        <p className='carritoprecio'> ${precio}</p>

      </div>
    </div>
  )
}


