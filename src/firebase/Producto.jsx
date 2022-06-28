import './Panel.css';
import { Link } from "react-router-dom"


export default function Producto({ id, nombre, precio, stockgorra, stockxs, stocks, stockm, stockl, stockxl}) {


  return (
    <>
      <div className='ordenCont'>
        <p className='ordenData'>{id}</p>
        <p className='ordenData'>${precio}</p>
        <p className='ordenDataPeq'>{stockgorra}</p>
        <p className='ordenDataPeq'>{stockxs}</p>
        <p className='ordenDataPeq'>{stocks}</p>
        <p className='ordenDataPeq'>{stockm}</p>
        <p className='ordenDataPeq'>{stockl}</p>
        <p className='ordenDataPeq'>{stockxl}</p>
        <Link className='link' to={`/panel/productos/listado/detalle/${id}`}>
          <p className='ordenDataDetailButton'>DETALLE</p></Link>
      </div>

    </>
  )
}
