import './Panel.css';
import Titulo from '../components/texts/Titulo';
import OrdenList from './OrdenList';
import { useOrdersContext } from '../context/OrdersContext'
import { Link } from 'react-router-dom';



export default function Ordenes() {

  const { ordenes } = useOrdersContext()

  return (

    <>
      <Titulo texto="Administrá tus órdenes" />
      <OrdenList ordenes={ordenes} />
      <Link className='link' to={`/panel`}>
        <button className='ordenDataDetailButton'>VOLVER AL PANEL</button>
      </Link>
    </>
  )
}
