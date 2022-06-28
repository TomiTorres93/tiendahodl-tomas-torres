import React, { useEffect, useState } from 'react';
import './Panel.css';

export default function EditBoton({confirmar, inputType }) {

    const [editar, setEditar] = useState(false)
    const [editado, setEditado] = useState(false)

    const editando = () => {
      if (editar === false) {
        setEditar(true)
      }  else {
        setEditar(false)
        setEditado(true)

        setTimeout(() => {
        setEditado(false)
        }, 1000);
      }
    }
    


  return (

      <div className='inputPanelCont'>
{editar === false ?         <button className='editBoton' onClick={editando}> EDITAR </button> :         

<button className='editBoton'  type='submit' onClick={() => {confirmar(); editando()}}> CONFIRMAR </button>
}

{editado === false ? <span></span> : <span className='editadoListo'>¡LISTO!</span> }
      </div>

  )
}
