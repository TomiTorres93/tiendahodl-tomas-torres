import './Panel.css';

import React, { useEffect, useState, useContext } from 'react';
import { doc, addDoc, setDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId} from 'firebase/firestore';
import Input from './Input';
import Titulo from '../components/texts/Titulo';



export default function Panel() {
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





   const handleSubmit = (event) => {
        event.preventDefault();

    }


//         const nombre = e.target.nombre.value;
//         console.log(nombre)
   

    // handleInputChange = () => {

    // }

     const ingresarProducto = () => {

       setDoc(doc(db, "productos", idPro), {
        categoria:categoria,
        nombre:nombre, 
        descripcion:descripcion,
        img:imgdis,
        imgpro:imgpro,
        stock: [ stockGorra, {"xs":Number(stockXS)}, {"s" : Number(stockS)}, {"m" : Number(stockM)},{ "l" : Number(stockL)},{ "xl" : Number(stockXL)}] ,
        precio: Number(precio)
     })

     
       .then(res => console.log(res))
       .catch(err => console.log(err))
        // .finally((() => console.log(nuevoProducto)))
    }
// } 

  return (

    <> 
    <Titulo texto="Publicá un nuevo producto" />
 
    <form className='formAgregarProducto' action="" onSubmit={handleSubmit}>

        <Input titulo="CATEGORÍA" tipo="text" name="categoria" place="Ingresar categoria" value={categoria} onchange={(e) => setCategoria(e.target.value)}  />


        <Input titulo="ID" tipo="text" name="id" place="Ingresar id" value={idPro} onchange={(e) => setIdPro(e.target.value)}  />

        <Input titulo="NOMBRE" tipo="text" name="nombre" place="Ingresar nombre" value={nombre} onchange={(e) => setNombre(e.target.value)}  />

        <Input titulo="DESCRIPCION" tipo="text" name="descripcion" place="Ingresar descripción" value={descripcion} onchange={(e) => setDescripcion(e.target.value)}  />

        <Input titulo="IMAGEN DISEÑO" tipo="text" name="imgdis" place="Ingresar imgdis" value={imgdis} onchange={(e) => setImgdis(e.target.value)}  />

   
        <Input titulo="IMAGEN DEL PRODUCTO" tipo="text" name="imgpro" place="Ingresar IMGPRO" value={imgpro} onchange={(e) => setImgpro(e.target.value)}  />

        <Input titulo="PRECIO" tipo="text" name="precio" place="Ingresar precio" value={precio} onchange={(e) => setPrecio(e.target.value)}  />

        <Input titulo="STOCK GORRA" tipo="text" name="stockGorra" place="Ingresar stock" value={stockGorra} onchange={(e) => setStockGorra(e.target.value)}  />

        <Input titulo="STOCK XS" tipo="text" name="stockXS" place="Ingresar stock" value={stockXS} onchange={(e) => setStockXS(e.target.value)}  />

        <Input titulo="STOCK S" tipo="text" name="stockS" place="Ingresar stock" value={stockS} onchange={(e) => setStockS(e.target.value)}  />

        <Input titulo="STOCK M" tipo="text" name="stockM" place="Ingresar stock" value={stockM} onchange={(e) => setStockM(e.target.value)}  />

        <Input titulo="STOCK L" tipo="text" name="stockL" place="Ingresar stock" value={stockL} onchange={(e) => setStockL(e.target.value)}  />

        <Input titulo="STOCK XL" tipo="text" name="stockXL" place="Ingresar stock" value={stockXL} onchange={(e) => setStockXL(e.target.value)}  />

    <button className='agregarProducto' type='submit' onClick={ingresarProducto}> Ingresar producto</button>

    </form>
    </>
  )
}
