import React, { useState } from 'react';
import { RaceBy } from '@uiball/loaders'
import './Panel.css';

export default function EditImagenBoton({ confirmar, cargando, subirImg }) {

  const [editado, setEditado] = useState(false)
  const [loader, setLoader] = useState(false)
  const [finalizado, setFinalizado] = useState(false)

const upload = () => {
  setLoader(true)     

  setTimeout(() => {
    setLoader(false)
    setFinalizado(true)
    }, 2000)
}

const editadoBoton = () => {
  setEditado(true)
}


  return (

    <div className='inputPanelCont'>

      {loader === true ? <RaceBy size={40} lineWeight={5} speed={1.4} color="green" /> :

        finalizado === false ? <button className='editBoton' onClick={() => { subirImg(); upload() }}> SUBIR FOTO </button> :

          <button className='editBoton' type='submit' onClick={() => { confirmar(); editadoBoton()}}> CONFIRMAR </button>
      }

      {editado === false ? <span></span> : <span className='editadoListo'>¡LISTO!</span>}
    </div>

  )
}
