import React, { useState } from 'react';
import './ItemListContainer.css';
import carritoadd from './img/carritoadd.png';


export default function ItemCount({stock, initial, onAdd}) {

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
      alert("Agregaste " + count + " al carrito")
    }

    
     

  return (
    <>
      <div  className='contador-cont'>
        <button className='AddRemoveButton topleftradius' onClick={Remove}>-</button>
        <div className='contador'>{count}</div>
        <button className='AddRemoveButton toprightradius' onClick={Add}>+</button>
      </div>
      <div className='addCartButtonCont'>
        <button className='addCartButton' onClick={onAddbutton}> <img className='carritoadd' src={carritoadd} alt="" /> </button>
        <p className='ultimosDisp'>¡Últimos {stock} disponibles!</p>
      </div>
    </>
  )
}


