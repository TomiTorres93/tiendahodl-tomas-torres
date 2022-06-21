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

        {/* ESTE IF  MODIFICA EL BOTÓN DE SUMAR CANTIDAD DEL PRODUCTO DE DOS FORMAS: TRANSFORMA 
          EL "+" EN UNA "X" (CON ROTACIÓN, QUE SE PUEDE VER EN LA REMERA INFINITE II AL CAMBIAR 
          DE UN TALLE CON STOCK A UNO SIN STOCK (TALLE S)) Y NO PERMITE SEGUIR SUMANDO UNIDADES */}
        {stock === 0 ? <button className='AddRemoveButton toprightradius addCartButtoncero'>+</button> : <button className='AddRemoveButton toprightradius' onClick={add}>+</button>}

      </div>

      <div className='addCartButtonCont'>

        {stock === 0 ? <button className='addCartButton opacidad'> <img className='carritoadd' src={carritoadd} alt="" /> </button> : <button className='addCartButton' onClick={() => {
          itemcount(); onAdd()
        }} > <img className='carritoadd' src={carritoadd} alt="" /> </button>}

        {stock > 0 ? <p className='ultimosDisp'>¡Últimos {stock} disponibles!</p> : <p className='ultimosDispNo'>No hay más stock. Elige otro talle o modelo.</p>}

      </div>
    </>
  )
}



