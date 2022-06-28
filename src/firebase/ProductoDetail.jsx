import './Panel.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import InputPanel from './InputPanel';
import { setDoc, doc, db, getFirestore} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";

export default function ProductoDetail({ id, nombre, descripcion, img, imgpro, categoria, precio, stockgorra, stockxs, stocks, stockm, stockl, stockxl }) {
    const db = getFirestore()
    const storage = getStorage();
    const handleSubmit = (event) => {
        event.preventDefault();

    }

    const [newId, setNewId] = useState(id)
    const [newnombre, setNewnombre] = useState(nombre)
    const [newdescripcion, setNewdescripcion] = useState(descripcion)
    const [newcategoria, setNewcategoria] = useState(categoria)
    const [newprecio, setNewprecio] = useState(precio)
    const [newstockgorra, setNewstockgorra] = useState(stockgorra)
    const [newstockxs, setNewstockxs] = useState(stockxs)
    const [newstocks, setNewstocks] = useState(stocks)
    const [setstockm, setNewstockm] = useState(stockm)
    const [newstockl, setNewstockl] = useState(stockl)
    const [newstockxl, setNewstockxl] = useState(stockxl)
    const [newimg, setNewimg] = useState(img)
    const [newimgpro, setNewimgpro] = useState(imgpro)

    
const [image, setImage] = useState(null)



// ESTA FUNCIÓN GUARDA EN EL ESTADO IMAGE A LA IMAGEN ELEGIDA EN EL INPUT
const handleChange =  (e) => {

  if (e.target.files[0]) {
    setImage(e.target.files[0])
  }
}



const handleUploadimgpro = () => {

const storageRef =  categoria === "gorra" ? ref(storage, `gorras/${image.name}`) : ref(storage, `remeras/${image.name}`) 

uploadBytes(storageRef, image);
getDownloadURL(storageRef) 
.then(url => setNewimgpro(`${url}`))
.catch((error) => {console.log(error)}        
 )}

const handleUploadimg = () => {

const storageRef =  ref(storage, `diseños/${image.name}`) 
uploadBytes(storageRef, image);
getDownloadURL(storageRef) 
.then(url => setNewimg(`${url}`))           
.catch((error) => {console.log(error)}
)}

     console.log(newimg)
    // // ESTA FUNCIÓN GUARDA EN LA BASE DE DATOS UN NUEVO PRODUCTO
    const actualizarProducto = () => {


        setDoc(doc(db, "productos", newId), {
            categoria: newcategoria,
            nombre: newnombre,
            descripcion: newdescripcion,
            img: newimg,
            imgpro: newimgpro,
            stock: [Number(newstockgorra), { "xs": Number(newstockxs) }, { "s": Number(newstocks) }, { "m": Number(setstockm) }, { "l": Number(newstockl) }, { "xl": Number(newstockxl) }],
            precio: Number(newprecio)
        })
    }


    return (

        <>
            <div className='productoDetailCont'>

                <form className='productoDetailContColumna' action="" onSubmit={handleSubmit}>

                    <InputPanel confirmar={actualizarProducto} alert="displayNone" place={id} value={id} titulo="ID" tipo="text" name="ID" onchange={(e) => setNewId(e.target.value)} />

                    <InputPanel confirmar={actualizarProducto} alert="displayNone" place={nombre} titulo="nombre" tipo="text" name="nombre" onchange={(e) => setNewnombre(e.target.value)} />

                    <InputPanel confirmar={actualizarProducto} alert="displayNone" place={descripcion} titulo="descripcion" tipo="text" name="descripcion" onchange={(e) => setNewdescripcion(e.target.value)} />

                    <InputPanel confirmar={actualizarProducto} alert="displayNone" place={categoria} titulo="categoria" tipo="text" name="categoria" onchange={(e) => setNewcategoria(e.target.value)} />

                    <InputPanel confirmar={actualizarProducto} alert="displayNone" place={precio} titulo="precio" tipo="text" name="precio" onchange={(e) => setNewprecio(e.target.value)} />


                    {categoria === "gorra" ?
                        <InputPanel confirmar={actualizarProducto} alert="displayNone" place={stockgorra} titulo="stockgorra" tipo="text" name="stockgorra" onchange={(e) => setNewstockgorra(e.target.value)} />
                        :
                        <>

                            <InputPanel confirmar={actualizarProducto} alert="displayNone" place={stockxs} titulo="stockxs" tipo="text" name="stockxs" onchange={(e) => setNewstockxs(e.target.value)} />

                            <InputPanel confirmar={actualizarProducto} alert="displayNone" place={stocks} titulo="stocks" tipo="text" name="stocks" onchange={(e) => setNewstocks(e.target.value)} />

                            <InputPanel confirmar={actualizarProducto} alert="displayNone" place={stockm} titulo="stockm" tipo="text" name="stockm" onchange={(e) => setNewstockm(e.target.value)} />

                            <InputPanel confirmar={actualizarProducto} alert="displayNone" place={stockl} titulo="stockl" tipo="text" name="stockl" onchange={(e) => setNewstockl(e.target.value)} />

                            <InputPanel confirmar={actualizarProducto} alert="displayNone" place={stockxl} titulo="stockxl" tipo="text" name="stockxl" onchange={(e) => setNewstockxl(e.target.value)} />

                        </>
                    }

                    <InputPanel confirmar={actualizarProducto} alert="displayNone" place={imgpro} titulo="imgpro" tipo="file" name="imgpro" onchange={handleChange} subirImg={handleUploadimgpro} 
                    />

                    <InputPanel confirmar={actualizarProducto} alert="displayNone" place={img} titulo="img" tipo="file" name="img" onchange={handleChange} subirImg={handleUploadimg}  />

                    
                    <div className='imagenescont'>
                        <div>
                            <p>IMAGEN PRODUCTO</p>
                            <img className='productoDetailimg' src={newimgpro} alt="" />
                        </div>

                        <div>
                            <p>IMG</p>
                            <img className='productoDetailimg' src={newimg} alt="" />
                        </div>
                    </div>
                </form>

            </div>
            <Link className='link' to={`/panel/productos/listado`}>
                <button className='ordenDataDetailButton'>VOLVER A PRODUCTOS </button>
            </Link>


        </>
    )
}

