import './Panel.css';
import { Link } from "react-router-dom"


export default function Orden({ id, nombre, precio, email, telefono, estado }) {


  return (
    <>
      <div className='ordenCont'>
        <p className='ordenData'>#{id}</p>
        <p className='ordenData'> {nombre}</p>
        <p className='ordenData'>{email}</p>
        <p className='ordenData'>{telefono}</p>
        <p className='ordenData'>${precio}</p>
        <p className='ordenData'>{estado}</p>
        <Link className='link' to={`/panel/ordenes/detalle/${id}`}>
          <p className='ordenDataDetailButton'>DETALLE</p></Link>
      </div>

    </>
  )
}
