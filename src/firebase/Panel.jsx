import './Panel.css';

import React, { useEffect, useState, useContext } from 'react';
import { useCartContext } from '../context/CartContext'
import { Link } from "react-router-dom"
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
   const [stock, setStock] = useState(0)
   const [categoria, setCategoria] = useState("")
   const [precio, setPrecio] = useState(0)




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
        stock: Number(stock),
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

        <Input titulo="STOCK" tipo="text" name="stock" place="Ingresar stock" value={stock} onchange={(e) => setStock(e.target.value)}  />

        <Input titulo="PRECIO" tipo="text" name="precio" place="Ingresar precio" value={precio} onchange={(e) => setPrecio(e.target.value)}  />

    <button className='agregarProducto' type='submit' onClick={ingresarProducto}> Ingresar producto</button>

    </form>
    </>
  )
}
