import './Cart.css';
import React, { useEffect, useState, useContext } from 'react';
import Titulo from '../texts/Titulo';
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"
import { getDoc, doc, addDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId, setDoc} from 'firebase/firestore';
import Input from '../../firebase/Input';


export default function Pagar({}) {
    const {cartList, vaciarCart, ordersId, eliminarItem, ordersCantidad} = useCartContext()
    const db = getFirestore()


    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [gracias, setGracias] = useState("nopago")

    const [ordenes, setOrdenes] = useState([])
 
        useEffect(() => {
            const db = getFirestore()
            const QueryCollection = collection(db, "orders")
                 getDocs(QueryCollection)
                 .then(resp => setOrdenes(resp.docs))  
                 .catch((err)=>console.log(err))
      
         
          }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

    }


const graciasPorSuCompra = () => {
  setGracias("pago")
}

function precioFinal() {
  if (cartList.length > 0) {
    
    return cartList.map(a => (a.precio)).reduce((a, b) => a + b).toLocaleString('de-DE')
  }}

 
  const nroOrden = ordenes.length + 1

const finalizarCompra = async() => {



  const cantidadOrdenes = ordenes.length

  let order = {}

    order.id = cantidadOrdenes + 1
    order.cliente = {nombre, email, telefono}
    order.total = precioFinal()
    order.date = Date().substring(0,24)

    order.items = cartList.map(carrito => {
      let id = carrito.id
      let categoria = carrito.categoria
      let nombre =  carrito.nombre 
      let precio = carrito.precio
      let cantidad = carrito.cantidad
      let talle = carrito.talle
      return  {id, categoria, nombre, precio, cantidad, talle}
    })
  
  
    const queryCollection = collection(db, "orders")
    addDoc(queryCollection, order)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  

       const queryCollectionStock = collection(db, "productos")
       const queryActualizarStock = await query(
       queryCollectionStock,
       where(documentId(), 'in', 
       
       cartList.map((carritoid) => carritoid.id)))
  
      const batch = writeBatch(db)

      await getDocs(queryActualizarStock)
       .then(resp => resp.docs.forEach(((res) =>   
        {  
          if(res.data().categoria === "gorra") {return batch.update(res.ref,{stock: [res.data().stock[0] - cartList.find(item => item.id === res.id).cantidad, res.data().stock[1], res.data().stock[2], res.data().stock[3], res.data().stock[4], res.data().stock[5]]})}  
          
           if(res.data().categoria === "remera" && cartList.find(item => item.id === res.id).talle === "xs") { return batch.update(res.ref,{ stock: [res.data().stock[0], {"xs" : res.data().stock[1].xs - cartList.find(item => item.id === res.id).cantidad} , res.data().stock[2], res.data().stock[3], res.data().stock[4], res.data().stock[5]]})}  

           if(res.data().categoria === "remera" && cartList.find(item => item.id === res.id).talle === "s")  {return batch.update(res.ref,{     stock: [res.data().stock[0], res.data().stock[1] ,  {"s" : res.data().stock[2].s - cartList.find(item => item.id === res.id).cantidad}, res.data().stock[3], res.data().stock[4], res.data().stock[5]]})
 }  

           if(res.data().categoria === "remera" && cartList.find(item => item.id === res.id).talle === "m")  {return batch.update(res.ref,{     stock: [res.data().stock[0], res.data().stock[1] , res.data().stock[2], {"m" : res.data().stock[3].m - cartList.find(item => item.id === res.id).cantidad}, res.data().stock[4], res.data().stock[5]]})}  
          
           if(res.data().categoria === "remera" && cartList.find(item => item.id === res.id).talle === "l")  {return batch.update(res.ref,{stock: [res.data().stock[0], res.data().stock[1] , res.data().stock[2], res.data().stock[3] , {"l" : res.data().stock[4].l - cartList.find(item => item.id === res.id).cantidad}, res.data().stock[5]]})}  

           if(res.data().categoria === "remera" && cartList.find(item => item.id === res.id).talle === "xl")  {return batch.update(res.ref,{  stock: [res.data().stock[0], res.data().stock[1] , res.data().stock[2], res.data().stock[3] , res.data().stock[4] ,{"xl" : res.data().stock[5].xl - cartList.find(item => item.id === res.id).cantidad}] })} 
          
          }
          
          )))
       .finally(()=> console.log("actualizado"))
  
       batch.commit()
     }
  

    const vaciarCarrito = () => {
      vaciarCart()
    }
    

    //MERCADOPAGO

    

    
  return (
    <> 

  { gracias === "nopago" ?   <> 
    <Titulo texto="Ingresá tus datos y aboná" />
 
     <form className='formAgregarProducto' action="" onSubmit={handleSubmit}>

        <Input titulo="NOMBRE Y APELLIDO" tipo="text" name="nombre" onchange={(e) => setNombre(e.target.value)}/>      
        <Input titulo="TELÉFONO" tipo="text" name="telefono"  onchange={(e) => setTelefono(e.target.value)}/>
        <Input titulo="EMAIL" tipo="text" name="email"  onchange={(e) => setEmail(e.target.value)}/>

        <Titulo texto="Detalle del carrito" />

        {cartList.map((items) =>  
                <div className='inputCont' >
                 <p className='detallecartrownombre'>{items.nombre} <span className='catDetalle'>{items.categoria.toUpperCase()}</span> <span className='catDetalle'>{items.talle.toUpperCase()}</span> </p> 
                 <p className='detallecartrowcant'>{items.cantidad} u.</p>
                 <p className='detallecartrowprecio'>${(items.precioU * items.cantidad).toLocaleString('de-DE')}</p>

                </div >
                  )}
    <div className='carritoTotalCont'>          
          <p className=''> <span className='carritopreciototaltit'>TOTAL</span> <span className='carritoprecio2'>${precioFinal()}</span> </p>         
        </div>
    <button className='agregarProducto' type='submit'
     onClick={ () => {finalizarCompra(); vaciarCarrito(); graciasPorSuCompra()} }> Pagar orden </button>


    </form> 
  
    </>  :  <div className='graciasCont'>   
    
    <Titulo texto="¡Gracias por tu compra!" />

        <p className='nroOrden'>Tu número de pedido es <b> #{nroOrden}</b></p>

        </div> 
 }

    </>
  )
}
