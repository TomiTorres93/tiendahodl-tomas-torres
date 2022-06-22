import './Panel.css';
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Titulo from '../components/texts/Titulo';
import Input from './Input';
import Miordenitem from './Miordenitem';



export default function Miorden() {

  const [ordenes, setOrdenes] = useState([])
  const [nroOrden, setNroOrden] = useState("")
  const [busqueda, setBusqueda] = useState("")
  const [existe, setExiste] = useState(true)
  const [productosorden, setProductosorden] = useState("")


  // TOMA LA LISTA DE ORDENES Y LAS GUARDA EN EL STATE ORDENES
  useEffect(() => {
    const db = getFirestore()
    const QueryCollection = collection(db, "orders")
    getDocs(QueryCollection)
      .then(resp => setOrdenes(resp.docs.map(order => ({ id: order.id, ...order.data() }))))
      .catch((err) => console.log(err))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  //CONSULTA LA ORDEN: SI EXISTE MUESTRA LOS DATOS DE LA MISMA (SIN INFO PERSONAL). SI NO EXISTE, MUESTRA UN MENSAJE DE ERROR EN LUGAR DE LA ORDEN.

  const buscarOrden = () => {
    setBusqueda(nroOrden)
    const ordenCheck = ordenes.find(order => order.id == nroOrden)
    if (ordenCheck === undefined) { return setExiste(false) }

    if (ordenCheck !== undefined) {
      return setProductosorden(ordenCheck), setExiste(true)
    }
  }

  return (

    <>
      <Titulo texto="Buscá tu orden" />
      <form className='formAgregarProducto' action="" onSubmit={handleSubmit}>

        <Input alert="displayNone" titulo="CÓDIGO DE ORDEN" tipo="text" name="nroOrden" onchange={(e) => setNroOrden(e.target.value)} />
        <button className='agregarProducto' type='submit'
          onClick={() => { buscarOrden() }}
        > BUSCAR </button>

      </form>

      {existe === true ? <>  {busqueda !== "" ? <>

        <div className='ordenesCont' >
          <p className='ordenDataTit'> ORDEN {busqueda} </p>
          {productosorden.items.map(item =>


            <Miordenitem key={item.id} {...item} />)}

          <div className='estadoCont'>
            <p className='ordenDataTit3'>ESTADO:  <span></span>
              {productosorden.estado}</p>
            <p className='ordenDataTit2'> ${productosorden.total} </p>
          </div>

        </div>
      </>
        : <p className='ordenDataTit2'>Ingresa el número de orden</p>} </> : <span className="ordenDataTit"> ¡NO EXISTE! <br /> REVISE EL NÚMERO DE ORDEN.</span>
      }
    </>
  )
}

