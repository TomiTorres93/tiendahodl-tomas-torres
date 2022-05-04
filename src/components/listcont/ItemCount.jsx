import React, { useState } from 'react';
import './ItemListContainer.css';


export default function ItemCount({stock, initial, onAdd, itemname}) {

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
      alert("Agregaste " + count + " " + itemname + " al carrito")
    }

  return (
    <div>
      <div  className='contador-cont'>
        <button className='AddRemoveButton topleftradius' onClick={Remove}>-</button>
        <div className='contador'>{count}</div>
        <button className='AddRemoveButton toprightradius' onClick={Add}>+</button>
      </div>
      <div className='addCartButtonCont'>
        <button className='addCartButton' onClick={onAddbutton}>Agregar al carrito</button>
        <p className='ultimosDisp'>¡Últimos {stock} disponibles!</p>
      </div>
    </div>
  )
}


