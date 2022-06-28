import './Panel.css';
import React, { useEffect, useState } from 'react';
import OrdenDetail from './OrdenDetail';
import { useParams } from 'react-router-dom';
import Titulo from '../components/texts/Titulo';
import { useProductosContext } from '../context/ProductosContext';
import LoaderDetail from '../components/listcont/LoaderDetail';
import ProductoDetail from './ProductoDetail';



export default function ProductoDetailCont() {

const { productos } = useProductosContext()
  const { detalleID } = useParams()
  const [existe, setExiste] = useState("existe");
  const [id, setId] = useState()
  const [nombre, setNombre] = useState()
  const [descripcion, setDescripcion] = useState()
  const [img, setImg] = useState()
  const [imgpro, setImgpro] = useState()
  const [categoria, setCategoria] = useState()
  const [precio, setPrecio] = useState()
  const [stockgorra, setStockgorra] = useState()
  const [stockxs, setStockxs] = useState()
  const [stocks, setStocks] = useState()
  const [stockm, setStockm] = useState()
  const [stockl, setStockl] = useState()
  const [stockxl, setStockxl] = useState()




  //TOMA EL ID DE LA ORDEN Y GUARDA UN ESTADO QUE CONTIENE SOLO LA ORDEN CORRESPONDIENTE AL ID y SUS ITEMS

  useEffect(() => {
    let productofind = productos.find(producto => producto.id == detalleID)
    let productomap = productos.map((item) => item.id)

    console.log(productofind)


    if (productofind === undefined) {
      return setExiste("no existe")
    } else {
      return setExiste("existe"), setNombre(productofind.nombre), setId(productofind.id), setDescripcion(productofind.descripcion), setImg(productofind.img), setImgpro(productofind.imgpro), setCategoria(productofind.categoria), setPrecio(productofind.precio), setStockgorra(productofind.stock[0]), setStockxs(productofind.stock[1].xs), setStocks(productofind.stock[2].s), setStockm(productofind.stock[3].m), setStockl(productofind.stock[4].l), setStockxl(productofind.stock[5].xl)
    }
  }, [productos])



  return (
    <>
      {existe === "no existe" ? <LoaderDetail /> : <>

        <Titulo texto="Detalle de orden" />
        <ProductoDetail key={id} id={id} nombre={nombre} precio={precio} descripcion={descripcion} categoria={categoria} img={img} imgpro={imgpro} stockgorra={stockgorra} stockxs={stockxs} stocks={stocks} stockm={stockm} stockl={stockl} stockxl={stockxl} />
      </>}


    </>

  )
}
