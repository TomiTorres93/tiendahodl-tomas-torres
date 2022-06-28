import React from 'react';
import EditBoton from './EditBoton';
import './Panel.css';
import EditImagenBoton from './EditImagenBoton';


export default function InputPanel({ subirImg, tipo, name, place, value, onchange, titulo, alert, confirmar, cargando, finalizado }) {


    
  return (

      <div className='inputCont'>
        <label className='label' htmlFor="nombre">{titulo} <span className={alert}>!</span> </label>
        <input className='input2' type={tipo} name={name} placeholder={place} value={value} onChange=
          {onchange} />

        {tipo === "file" ?  <EditImagenBoton  confirmar={confirmar} subirImg={subirImg} cargando={cargando} finalizado={finalizado} />  : <EditBoton confirmar={confirmar}/> }

      </div>

  )
}
