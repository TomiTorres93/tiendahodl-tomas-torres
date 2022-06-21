import './Panel.css';
import Orden from './Orden';



export default function OrdenList({ ordenes }) {

  return (

    <>
      <div className='ordenCont ordenesmobile'>
        <p className='ordenData'>ID</p>
        <p className='ordenData'> NOMBRE</p>
        <p className='ordenData'>EMAIL</p>
        <p className='ordenData'>TELEFONO</p>
        <p className='ordenData'>TOTAL</p>
        <p className='ordenData'>ESTADO</p>
        <p className='ordenData'></p>
      </div>

      {ordenes.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      }).map((order) =>

        <Orden key={order.id} estado={order.estado} id={order.id} precio={order.total} nombre={order.cliente.nombre} email={order.cliente.email} telefono={order.cliente.telefono} fecha={order.date} />
      )}


    </>
  )
}

