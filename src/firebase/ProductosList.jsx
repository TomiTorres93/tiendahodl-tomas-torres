import './Panel.css';
import Producto from './Producto';



export default function ProductosList({ productos }) {

  return (

    <>
      <div className='ordenCont ordenesmobile'>
        <p className='ordenData'> NOMBRE</p>
        <p className='ordenData'>PRECIO</p>
        <p className='ordenDataPeq'>STOCK GORRA</p>
        <p className='ordenDataPeq'>XS</p>
        <p className='ordenDataPeq'>S</p>
        <p className='ordenDataPeq'>M</p>
        <p className='ordenDataPeq'>L</p>
        <p className='ordenDataPeq'>XL</p>
        <p className='ordenData'></p>

      </div>

      {productos.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      }).map((productos) =>

        <Producto key={productos.id} id={productos.id}  nombre={productos.nombre} precio={productos.precio} stockgorra={productos.stock[0]} stockxs={productos.stock[1].xs} stocks={productos.stock[2].s} stockm={productos.stock[3].m} stockl={productos.stock[4].l} stockxl={productos.stock[5].xl} />
      )}


    </>
  )
}

