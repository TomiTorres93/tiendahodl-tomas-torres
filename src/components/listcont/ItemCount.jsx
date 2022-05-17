import React, { useState } from 'react';
import './ItemListContainer.css';
import carritoadd from './img/carritoadd.png';
import Cart from '../cart/Cart';
import { getFetch } from '../../cart';

export default function ItemCount({stock, precio, producto, cantidad, tipo, itemcount}) {

const carrito = []

console.log(carrito)

    const [count, setCount] = useState(0)

    function Add() {
        setCount( count + 1)

        if (count == stock) {
          setCount( count )
        }
    } 

    function Remove() {
        setCount( count - 1)

         if (count == 0) {
            setCount( count )
        }
    }

    function onAddbutton () {
      if (count <= stock) {
        alert("Agregaste " + count + " " + tipo + " " + producto + " al carrito")

        let addToCart = {tipo:{tipo}, producto:{producto}, precio:"$"+{precio}}

        carrito.push(addToCart)

      } else {
        alert("No tenemos suficiente stock")
      }   
    }

  
  return (
    <>
      <div  className='contador-cont' >
        <button className='AddRemoveButton topleftradius' onClick={Remove}>-</button>
        <div className='contador'>{count}</div>
        <button className='AddRemoveButton toprightradius' onClick={Add}>+</button>
      </div>
      <div className='addCartButtonCont' onClick={itemcount}>
        <button className='addCartButton' onClick={onAddbutton}> <img className='carritoadd' src={carritoadd} alt="" /> </button>
        <p className='ultimosDisp'>¡Últimos {stock} disponibles!</p>
      </div>
    </>
  )
}



