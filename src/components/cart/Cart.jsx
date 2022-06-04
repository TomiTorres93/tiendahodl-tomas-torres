import './Cart.css';
import React, { useEffect, useState, useContext } from 'react';
import Titulo from '../texts/Titulo';
import CartItem from './CartItem';
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"
import { doc, addDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId} from 'firebase/firestore';





export default function Cart({  }) {


  const {cartList, vaciarCart, eliminarItem} = useCartContext()
  const db = getFirestore()


function precioFinal() {
  if (cartList.length > 0) {
    
    return cartList.map(a => (a.precio)).reduce((a, b) => a + b).toLocaleString('de-DE')
  }}



  const [itemcartcount, setItemcartcount] = useState()

const vaciarCarrito = () => {
  vaciarCart()
}


const finalizarCompra = async() => {

    // console.log(cartList.map(carrito => ({cliente:["Pedro", 123213, "pepe@gmail.com"], items:[carrito.id, carrito.nombre, carrito.precio], total: [precioTotal]}))) 

    let order = {}

    order.cliente = {nombre: "Carlos", email: "carlos@gmail.com", telefono: "213213"}
    order.total = precioFinal()


     order.items = cartList.map(carrito => {
      let id = carrito.id
      let categoria = carrito.categoria
      let nombre =  carrito.nombre 
      let precio = carrito.precio
      let cantidad = carrito.cantidad
    
    return  {id, categoria, nombre, precio, cantidad}
  })

  const queryCollection = collection(db, "orders")
  addDoc(queryCollection, order)
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally((() => vaciarCarrito()))


  const queryCollectionStock = collection(db, "productos")
  const queryActualizarStock = await query(
   queryCollectionStock,
   where(documentId(), 'in', cartList.map(carritoid => carritoid.id))
  )

  const batch = writeBatch(db)

  await getDocs(queryActualizarStock)
  .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
    stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
  })))
  .finally(()=> console.log("actualizado"))

  batch.commit()
  }




function AddU() {
    console.log(cartList.map(a => a.cantidad) + 1)
}


  return (
    <>
        { cartList.length === 0 ?
    <Link className='link ' to={"/"}>
            <div className='vaciarcarrito carritovacio'>
            CARRITO VACÍO <br /> <br />
        <img className='backhomeimg' src="https://img.icons8.com/ios/50/000000/home--v1.png"/>
          </div></Link> :
          
    <>
    <Titulo texto="Carrito de compras" />

  


    <div className='cartcont'>
      <div className='micarritocont'> 
        <p className='micarritotitulo'> Mi Carrito</p>  
        {cartList.map((items) =>  
                <>
                 <CartItem items={items} key={items.id} nombre={items.nombre}  tipo={items.tipo} cantidad={items.cantidad} precio={(items.precioU * items.cantidad).toLocaleString('de-DE')} categoria={items.categoria} precioU={items.precioU.toLocaleString('de-DE')} img={items.img} />

                </> )}



      <div className='vaciarcarrito' onClick={vaciarCarrito}>
      VACIAR CARRITO
    </div>
    

      </div>    

      <div className='resumendelpedidocont'>
        <p className='micarritotitulo'> Resumen del pedido</p>
        {cartList.map((items) =>  
                <div className='detallecartrow' >
                 <p className='detallecartrownombre'>{items.nombre} <span className='catDetalle'>{items.categoria.toUpperCase()}</span> </p> 
                 <p className='detallecartrowcant'>{items.cantidad} u.</p>
                 <p className='detallecartrowprecio'>${(items.precioU * items.cantidad).toLocaleString('de-DE')}</p>

                </div >
                  )}
       
          <p className='micarritotitulo'> Envío</p>
          <div className='detallecartrow' >
          <p className='detallecartrownombre'>Normal - Envío Nacional</p>
          <p className='detallecartrowcant'> 5 a 7 días</p>
          <p className='detallecartrowprecio'>$750</p>
          </div>

          <div className='detallecartrow' >
          <p className='detallecartrownombre'>Express - Envío Nacional</p>
          <p className='detallecartrowcant'> 2 a 3 días</p>
          <p className='detallecartrowprecio'>$1150</p>
          </div>
        

        <div className='carritoTotalCont'>          
          <p className=''> <span className='carritopreciototaltit'>TOTAL</span> <span className='carritoprecio2'>${precioFinal()}</span> </p>         
        </div>


        <p className='vaciarcarrito' onClick={finalizarCompra}>FINALIZAR COMPRA</p>
      </div>
    </div>
</>
    } </>
  ) 
} 
