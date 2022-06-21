import './Panel.css';
import React, { useState } from 'react';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import Input from './Input';
import Titulo from '../components/texts/Titulo';
import { Link } from 'react-router-dom';



export default function NuevoProducto() {
  const db = getFirestore()
  const [nombre, setNombre] = useState("")
  const [imgdis, setImgdis] = useState("")
  const [imgpro, setImgpro] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [idPro, setIdPro] = useState("")
  const [categoria, setCategoria] = useState("")
  const [precio, setPrecio] = useState(0)
  const [stockGorra, setStockGorra] = useState(0)
  const [stockXS, setStockXS] = useState(0)
  const [stockS, setStockS] = useState(0)
  const [stockM, setStockM] = useState(0)
  const [stockL, setStockL] = useState(0)
  const [stockXL, setStockXL] = useState(0)
  const [ingresado, setIngresado] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();

  }


  // ESTA FUNCIÓN GUARDA EN LA BASE DE DATOS UN NUEVO PRODUCTO
  const ingresarProducto = () => {

    setDoc(doc(db, "productos", idPro), {
      categoria: categoria,
      nombre: nombre,
      descripcion: descripcion,
      img: imgdis,
      imgpro: imgpro,
      stock: [stockGorra, { "xs": Number(stockXS) }, { "s": Number(stockS) }, { "m": Number(stockM) }, { "l": Number(stockL) }, { "xl": Number(stockXL) }],
      precio: Number(precio)
    })

  }

  // ESTA FUNCIÓN MODIFICA EL ESTADO DEL BOTÓN, PARA VOLVER A MOSTRAR EL BOTÓN DE AGREGAR PRODUCTO
  const agregarOtro = () => {
    setIngresado(false)
  }

  return (

    <>
      <Titulo texto="Publicá un nuevo producto" />
      <Link className='link' to={`/panel`}>
        <button className='ordenDataDetailButton'>VOLVER AL PANEL</button>
      </Link>

      <form className='formAgregarProducto' action="" onSubmit={handleSubmit}>

        <Input alert="displayNone" titulo="CATEGORÍA" tipo="text" name="categoria" place="Ingresar categoria" value={categoria} onchange={(e) => setCategoria(e.target.value)} />
        <Input alert="displayNone" titulo="ID" tipo="text" name="id" place="Ingresar id" value={idPro} onchange={(e) => setIdPro(e.target.value)} />
        <Input alert="displayNone" titulo="NOMBRE" tipo="text" name="nombre" place="Ingresar nombre" value={nombre} onchange={(e) => setNombre(e.target.value)} />
        <Input alert="displayNone" titulo="DESCRIPCION" tipo="text" name="descripcion" place="Ingresar descripción" value={descripcion} onchange={(e) => setDescripcion(e.target.value)} />
        <Input alert="displayNone" titulo="IMAGEN DISEÑO" tipo="text" name="imgdis" place="Ingresar imgdis" value={imgdis} onchange={(e) => setImgdis(e.target.value)} />
        <Input alert="displayNone" titulo="IMAGEN DEL PRODUCTO" tipo="text" name="imgpro" place="Ingresar IMGPRO" value={imgpro} onchange={(e) => setImgpro(e.target.value)} />
        <Input alert="displayNone" titulo="PRECIO" tipo="text" name="precio" place="Ingresar precio" value={precio} onchange={(e) => setPrecio(e.target.value)} />
        <Input alert="displayNone" titulo="STOCK GORRA" tipo="text" name="stockGorra" place="Ingresar stock" value={stockGorra} onchange={(e) => setStockGorra(e.target.value)} />
        <Input alert="displayNone" titulo="STOCK XS" tipo="text" name="stockXS" place="Ingresar stock" value={stockXS} onchange={(e) => setStockXS(e.target.value)} />
        <Input alert="displayNone" titulo="STOCK S" tipo="text" name="stockS" place="Ingresar stock" value={stockS} onchange={(e) => setStockS(e.target.value)} />
        <Input alert="displayNone" titulo="STOCK M" tipo="text" name="stockM" place="Ingresar stock" value={stockM} onchange={(e) => setStockM(e.target.value)} />
        <Input alert="displayNone" titulo="STOCK L" tipo="text" name="stockL" place="Ingresar stock" value={stockL} onchange={(e) => setStockL(e.target.value)} />
        <Input alert="displayNone" titulo="STOCK XL" tipo="text" name="stockXL" place="Ingresar stock" value={stockXL} onchange={(e) => setStockXL(e.target.value)} />

        {ingresado === false ? <button className='agregarProducto' type='submit' onClick={() => {
          setIngresado(true); ingresarProducto()
        }
        }> Ingresar producto</button> : <button className='agregarProducto' type='submit' onClick={agregarOtro
        }> ¡Ingresado! Agregar otro</button>}


      </form>
    </>
  )
}
