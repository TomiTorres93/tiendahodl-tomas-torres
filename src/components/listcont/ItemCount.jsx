import React from 'react';
import './ItemListContainer.css';
import carritoadd from './img/carritoadd.png';

export default function ItemCount({ itemcount, onAdd, add, remove, count, categoria, talleL, talleM, talleS, talleXS, talleXL, stock }) {

  return (
    <>
      {categoria === "gorra" ? categoria === "remera" : <div className='tallesCont'>
        <button className='tallesButton' onClick={talleXS}> XS </button>
        <button className='tallesButton' onClick={talleS}> S </button>
        <button className='tallesButton' onClick={talleM}> M </button>
        <button className='tallesButton' onClick={talleL}> L </button>
        <button className='tallesButton' onClick={talleXL}> XL </button>
      </div>}

      <div className='contador-cont' >
        <button className='AddRemoveButton topleftradius' onClick={remove}>-</button>
        <div className='contador'>{count}</div>
        <button className='AddRemoveButton toprightradius' onClick={add}>+</button>
      </div>

      <div className='addCartButtonCont'>
        <button className='addCartButton' onClick={onAdd}> <img className='carritoadd' onClick={itemcount} src={carritoadd} alt="" /> </button>
        {stock > 0 ? <p className='ultimosDisp'>¡Últimos {stock} disponibles!</p> : <p className='ultimosDispNo'>No hay más stock. Elige otro talle o modelo.</p>}

      </div>
    </>
  )
}



