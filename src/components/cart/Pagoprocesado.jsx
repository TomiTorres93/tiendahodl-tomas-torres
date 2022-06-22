
import React, { useEffect, useState } from 'react';
import Titulo from '../texts/Titulo'

export default function Pagoprocesado() {

    const [orden, setOrden] = useState([])


    useEffect(() => {
        setOrden(JSON.parse(sessionStorage.getItem('ordenCliente')))
      }, [])


  return (
    <div className='graciasCont'>

        <Titulo texto="¡Gracias por tu compra!" />

        <p className='nroOrden'>Tu código de orden es: <b> {orden.id}</b></p>

      </div>
  )
}
