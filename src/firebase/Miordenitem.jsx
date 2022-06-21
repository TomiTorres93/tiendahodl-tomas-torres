import './Panel.css';
import React from 'react';



export default function Miordenitem({ categoria, nombre, talle, cantidad, precio }) {
  return (

    <>
      <div className='ordenCont'>
        <p className='ordenData'> {categoria.toUpperCase()}</p>
        <p className='ordenData'> {nombre.toUpperCase()}</p>
        <p className='ordenData'> <span className='detalle'>TALLE</span> {talle.toUpperCase()}</p>
        <p className='ordenData'>{cantidad} u.</p>
        <p className='ordenData'> ${precio}</p>
      </div>

    </>
  )
}
