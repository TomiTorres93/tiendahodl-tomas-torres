import React, { useState, useEffect, useContext } from 'react';
import './Productos.css';
import Producto from './Producto'
import ItemCount from '../listcont/ItemCount';
import AfterCount from '../listcont/AfterCount';
import { useCartContext } from '../../context/CartContext'
  

const data = [    {"id":"1", "tipo": "BUZO", "stock":"1", "precio":"6500", "img":"https://drive.google.com/uc?id=1_92ZJra32ZIsYuxbBf1CpcXjgn3jmUeg"},
{"id":"2", "tipo": "REMERA", "stock":"2", "precio":"3500", "img":"https://drive.google.com/uc?id=1DiNWCOli3N1mDw9EAAnPVrApjHTo5fI5"},
{"id":"3", "tipo": "SHORTS", "stock":"3", "precio":"2500", "img":"https://drive.google.com/uc?id=1_lO_qnqwEQQ3Yf2npJJqMwihWHLcp572"}
]


function ProductosCont({producto, imgpro}) {
  
   const [botonTipo, setBotonTipo] = useState('itemcount')
   const [stock, setStock] = useState(0)
   const [tipo, setTipo] = useState({})
   const [precio, setPrecio] = useState({})
   const [count, setCount] = useState(0)


   const itemcountChange = () => {
    if (botonTipo === "itemcount") {
      setBotonTipo("seguir o volver")
    } else {setBotonTipo("itemcount")}
    
   }

   // IMPORTACIÓN DEL CARTCONTEXT Y DESTRUCTURING PARA EXTRAER LA FUNCIÓN.

   const {addToCart, cartList} = useCartContext()

   const onAdd = () => {
        addToCart({ id:cartList.length, img: imgpro, producto, tipo, cantidad: count, precioU: precio, precio: (precio * count)}) }


///
   function Add() {
       setCount( count + 1)
       if (count == stock) {setCount( count )} } 
///
   function Remove() {
       setCount( count - 1)
        if (count == 0) {setCount( count )} }

   console.log(cartList)
   
    return (
  
  <div className='productositemsCont'>

      {data.map((data) => (
        
      <Producto stockchange={() => { setStock(data.stock); setTipo(data.tipo); setPrecio(data.precio)}} className="cardprocont" key={data.id} {...data}   />
      ))}

  { botonTipo === 'itemcount' ?
      <ItemCount stock={stock} tipo={tipo} producto={producto} precio={precio} cantidad={stock} onAdd={onAdd} itemcount={itemcountChange} add={Add} remove={Remove} count={count} /> :

      <AfterCount itemcount={itemcountChange} />
    }
  </div>
    ); 
    
}

    
export default ProductosCont;

