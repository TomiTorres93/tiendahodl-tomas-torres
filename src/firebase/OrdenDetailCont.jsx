import './Panel.css';
import React, { useEffect, useState } from 'react';
import OrdenDetail from './OrdenDetail';
import { useParams } from 'react-router-dom';
import Titulo from '../components/texts/Titulo';
import { useOrdersContext } from '../context/OrdersContext'
import LoaderDetail from '../components/listcont/LoaderDetail';



export default function OrdenDetailCont() {

  const { ordenes, items } = useOrdersContext()
  const { detalleID } = useParams()
  const [existe, setExiste] = useState("existe");
  const [nombre, setNombre] = useState()
  const [id, setId] = useState()
  const [email, setEmail] = useState()
  const [telefono, setTelefono] = useState()
  const [total, setTotal] = useState()
  const [fecha, setFecha] = useState()
  const [estado, setEstado] = useState()
  const [productos, setProductos] = useState()


  //TOMA EL ID DE LA ORDEN Y GUARDA UN ESTADO QUE CONTIENE SOLO LA ORDEN CORRESPONDIENTE AL ID y SUS ITEMS

  useEffect(() => {
    let ordenesfind = ordenes.find(order => order.id == detalleID)
    let ordenesmap = ordenes.map((item) => item.id)

    if (ordenesmap.includes(2) === false) {
      return setExiste("no existe")
    } else {
      return setExiste("existe"), setNombre(ordenesfind.cliente.nombre), setId(ordenesfind.id), setEmail(ordenesfind.cliente.email), setTelefono(ordenesfind.cliente.telefono), setTotal(ordenesfind.total), setFecha(ordenesfind.fecha), setEstado(ordenesfind.estado)
    }
  }, [ordenes])

  useEffect(() => {
    const ordenItems = items[detalleID - 1]
    const ordenItemsMap = ordenItems.map((item) => item.id + " - " + " talle " + item.talle + " " + " - " + item.cantidad + "u." + " " + " - " + " $" + item.precio + " • ")
    setProductos(ordenItemsMap)

  }, [])


  return (
    <>
      {existe === "no existe" ? <LoaderDetail /> : <>
        <Titulo texto="Detalle de orden" />
        <OrdenDetail nombre={nombre} id={id} email={email} telefono={telefono} fecha={fecha} estado={estado} total={total} productos={productos} />
      </>}

    </>

  )
}
