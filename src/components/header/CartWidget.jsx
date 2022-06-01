import React, { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import carritopng from './img/carrito.png';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'



function Carrito() {

  const {totalQty} = useCartContext()

  const totalCarrito = totalQty()
  
  console.log(totalCarrito)

    return (
<>
  <Link to='/cart' className='homecart'>
  <p className='cartcant'>{totalCarrito}</p>
  <img src={carritopng} className="logoCarrito" alt="carrito de compras" />

  </Link>
  
</>

    ); }


export default Carrito;
