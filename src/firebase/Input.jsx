import React from 'react';
import './Panel.css';

export default function Input({ tipo, name, place, value, onchange, titulo, alert }) {

  return (
    <>
      <div className='inputCont'>
        <label className='label' htmlFor="nombre">{titulo} <span className={alert}>!</span> </label>
        <input className='input2' type={tipo} name={name} placeholder={place} value={value} onChange=
          {onchange} />
      </div>
    </>
  )
}
