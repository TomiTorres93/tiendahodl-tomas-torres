import React, { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import carritopng from './img/carrito.png';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'



function Carrito() {

  const { totalQty } = useCartContext()

  const totalCarrito = totalQty()

  return (
    <>
      <Link to='/cart' className='homecart'>
        <div>
          <span>  <img src={carritopng} className="logoCarrito" alt="carrito de compras" /></span>
          { totalCarrito === 0 ? <span></span>  : <span className='cartcant'>{totalCarrito}</span>}
          
        </div>

      </Link>

    </>

  );
}


export default Carrito;
