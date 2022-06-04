import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import carritoadd from './img/carritoadd.png';
import { doc, getDoc, addDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId, DocumentSnapshot} from 'firebase/firestore';


export default function ItemCount({itemcount, onAdd, add, remove, count, id, categoria, talleL, talleM, talleS, talleXS, talleXL, stock}) {


  const cargarProducto = async ()  => {
    const db = getFirestore()
    const queryDoc = doc(db, "productos", id)
    const docSnap = await getDoc(queryDoc);
    const categoriaProducto = docSnap.data().categoria

  
  }
  
  return (
    <>

      { categoria === "gorra" ?  categoria === "remera"    :  <div className='tallesCont'>
        <button className='tallesButton' onClick={talleXS}> XS </button>  
        <button className='tallesButton' onClick={talleS}> S </button>  
        <button className='tallesButton' onClick={talleM}> M </button>  
        <button className='tallesButton' onClick={talleL}> L </button>  
        <button className='tallesButton' onClick={talleXL}> XL </button>  
      </div> }



      <div  className='contador-cont' >
        <button className='AddRemoveButton topleftradius' onClick={remove}>-</button>
        <div className='contador'>{count}</div>
        <button className='AddRemoveButton toprightradius' onClick={add}>+</button>
      </div>


      <div className='addCartButtonCont' onClick={itemcount}>
        <button className='addCartButton' onClick={onAdd}> <img className='carritoadd' src={carritoadd} alt="" /> </button>
        <p className='ultimosDisp'>¡Últimos {stock} disponibles!</p>
      </div>
    </>
  )
}



