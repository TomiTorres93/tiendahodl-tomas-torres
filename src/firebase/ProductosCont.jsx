import './Panel.css';
import Titulo from '../components/texts/Titulo';
import ProductosList from './ProductosList';
import { useProductosContext } from '../context/ProductosContext';
import { Link } from 'react-router-dom';



export default function ProductosCont() {

  
    const { productos } = useProductosContext()
  
  return (

    <>
      <Titulo texto="Administrá tus productos" />
      <ProductosList productos={productos} />
      <Link className='link' to={`/panel`}>
        <button className='ordenDataDetailButton'>VOLVER AL PANEL</button>
      </Link>
    </>
  )
}
