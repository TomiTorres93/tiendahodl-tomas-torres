import React, { useState } from 'react';
import './ItemListContainer.css';
import carritoadd from './img/carritoadd.png';


export default function ItemCount({stock, itemcount, onAdd, add, remove, count}) {




  return (
    <>
      <div  className='contador-cont' >
        <button className='AddRemoveButton topleftradius' onClick={remove}>-</button>
        <div className='contador'>{count}</div>
        <button className='AddRemoveButton toprightradius' onClick={add}>+</button>
      </div>
      <div className='addCartButtonCont' onClick={itemcount}>
        <button className='addCartButton' onClick={onAdd}> <img className='carritoadd' src={carritoadd} alt="" /> </button>
        <p className='ultimosDisp'>¡Últimos {stock} disponibles!</p>
      </div>
    </>
  )
}



