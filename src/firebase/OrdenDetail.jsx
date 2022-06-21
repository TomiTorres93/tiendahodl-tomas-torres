import './Panel.css';
import { Link } from 'react-router-dom';

export default function OrdenDetail({ fecha, id, nombre, email, telefono, total, estado, productos }) {


  return (

    <>
      <div className='ordenDetailCont'>
        <p className='ordenDetailData'><span className='destDetail'>ORDEN:</span>#{id}</p>
        <p className='ordenDetailData'><span className='destDetail'>NOMBRE:</span> {nombre}</p>
        <p className='ordenDetailData'><span className='destDetail'>EMAIL:</span>{email}</p>
        <p className='ordenDetailData'><span className='destDetail'>TELÉFONO:</span> {telefono}</p>
        <p className='ordenDetailData'> <span className='destDetail'>PRODUCTOS:</span>{productos}</p>
        <p className='ordenDetailData'><span className='destDetail'>FECHA:</span>{fecha}</p>
        <p className='ordenDetailData'><span className='destDetail'>TOTAL:</span> ${total}</p>
        <p className='ordenDetailData'><span className='destDetail'>ESTADO:</span>{estado}</p>
        <Link className='link' to={`/panel/ordenes`}>
          <button className='ordenDataDetailButton'>VOLVER A ORDENES</button>
        </Link>
      </div>



    </>
  )
}

