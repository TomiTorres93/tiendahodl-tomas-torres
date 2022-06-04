import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import Loader from './Loader';
import ItemCount from '../listcont/ItemCount';
import AfterCount from '../listcont/AfterCount';
import { useCartContext } from '../../context/CartContext'
import { doc, getDoc, addDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId, DocumentSnapshot} from 'firebase/firestore';

function ItemDetail({id, img, imgpro, nombre, categoria, descripcion, loading, cantidad, precio}) {
    
    const loaders = [1];
    const [stock, setStock] = useState(0)
    const [talle, setTalle] = useState("")
    const [botonTipo, setBotonTipo] = useState('itemcount')
    const [tipo, setTipo] = useState({})
    const [count, setCount] = useState(0)
 
    const itemcountChange = () => {
        if (botonTipo === "itemcount") {
          setBotonTipo("seguir o volver")
        } else {setBotonTipo("itemcount")}
        
       }
    
       // IMPORTACIÓN DEL CARTCONTEXT Y DESTRUCTURING PARA EXTRAER LA FUNCIÓN.
    
       const {addToCart, cartList} = useCartContext()
    
       const onAdd = () => {
            addToCart({ id: id, talle: talle, img: imgpro, nombre, categoria, tipo, cantidad: count, precioU: precio, precio: (precio * count)}) }
    
            console.log(cartList)
    
    ///
       function Add() {
           setCount( count + 1)
           if (count == stock) {setCount( count )} } 
    ///
       function Remove() {
           setCount( count - 1)
            if (count == 0) {setCount( count )} }



    // FUNCIONES PARA ELEGIR TALLE





    async function stockGorra() { if  (categoria === "gorra") {
      const db = getFirestore()
      const queryDoc = doc(db, "productos", id)
      const docSnap = await getDoc(queryDoc);
      return setStock(docSnap.data().stock[0])

     } }
  
  
     stockGorra()
  
    const talleXS = async ()  => {
      const db = getFirestore()
      const queryDoc = doc(db, "productos", id)
      const docSnap = await getDoc(queryDoc);
      return setStock(docSnap.data().stock[1].xs),  setTalle("xs")

    }
  
    
    const talleS = async ()  => {
      const db = getFirestore()
      const queryDoc = doc(db, "productos", id)
      const docSnap = await getDoc(queryDoc);
      return setStock(docSnap.data().stock[2].s),  setTalle("s")
    }
  
  
  
    const talleM = async ()  => {
      const db = getFirestore()
      const queryDoc = doc(db, "productos", id)
      const docSnap = await getDoc(queryDoc);
      return setStock(docSnap.data().stock[3].m),  setTalle("m")
    }
  
    
    const talleL = async ()  => {
      const db = getFirestore()
      const queryDoc = doc(db, "productos", id)
      const docSnap = await getDoc(queryDoc);
      return setStock(docSnap.data().stock[4].l),  setTalle("l")
    }
  
    
    const talleXL = async ()  => {
      const db = getFirestore()
      const queryDoc = doc(db, "productos", id)
      const docSnap = await getDoc(queryDoc);
      return setStock(docSnap.data().stock[5].xl),  setTalle("xl")
    }

    return (

    <div className='ItemDetailListCont'>

    {loading
    ? loaders.map((loader) => <Loader key={loader} />) : 
<div className='column'>
    <div className='itemdetailcont' id={id} >
        <img src={imgpro} className="itemdetailimg" alt={nombre} />
        <div className='itemdetailDerCont'>
            <p className="itemdetailTitulo">{nombre}</p>
            <p className="itemdetailDescripcion">{descripcion}</p>
            <p className="itemdetailPrecio">${precio}</p>
            
  { botonTipo === 'itemcount' ?
      <ItemCount categoria={categoria} id={id} nombre={nombre} precio={precio} cantidad={cantidad} onAdd={onAdd} itemcount={itemcountChange} add={Add} remove={Remove} count={count} talle={talle} talleL={talleL} talleXL={talleXL} talleM={talleM} talleS={talleS} talleXS={talleXS} stock={stock} /> :

      <AfterCount itemcount={itemcountChange} />
    }
        </div>
        
    </div>
  
    </div>
    }

</div>

    ); }

export default ItemDetail;
