import './Cart.css';
import React, { useEffect, useState } from 'react';
import Titulo from '../texts/Titulo';
import { useCartContext } from '../../context/CartContext'
import { useOrdersContext } from '../../context/OrdersContext'

import { addDoc, getFirestore, collection, writeBatch, where, query, getDocs, documentId } from 'firebase/firestore';
import Input from '../../firebase/Input';


export default function Pagar({ }) {
  const { cartList, vaciarCart } = useCartContext()
  const { ordenes } = useOrdersContext()
  const db = getFirestore()
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [emailconf, setEmailconf] = useState("")
  const [alertCheck, setAlertCheck] = useState("displayNone")
  const [mostrarBoton, setMostrarBoton] = useState(false)
  const [gracias, setGracias] = useState("nopago")


  const handleSubmit = (event) => {
    event.preventDefault();

  }


  const graciasPorSuCompra = () => {
    setGracias("pago")
  }

  function precioFinal() {
    if (cartList.length > 0) {

      return cartList.map(a => (a.precio)).reduce((a, b) => a + b)
    }
  }



// MERCADOPAGO

const [ordenmp, setOrdenmp] = useState([]);

const data = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization:

      "Bearer TEST-5672995470466620-060619-d42c23c5a3305e0b70f1f217b315ea94-169291933"
  },
  body: JSON.stringify({
    items: [
      {
        title: "Tienda Hodl",
        description: "¡Gracias por su compra!",
        picture_url:
          "https://firebasestorage.googleapis.com/v0/b/hodltienda-reactcoderhouse.appspot.com/o/gif%2Ffavicon.ico?alt=media&token=1516813f-c9d4-4275-9e07-646f93a29b1a",
        category_id: "cat123",
        quantity: 1,
        currency_id: "ARS",
        unit_price: precioFinal()
      }
    ],
    auto_return: "approved",
    back_urls: { success: "https://tiendahodl.netlify.app/" }
  })
};



useEffect(() => {
  //getFetch();
  fetch("https://api.mercadopago.com/checkout/preferences", data)
    .then(function (resp) {
      return resp.json();
    })
    .then((resp) => setOrdenmp(resp));

}, []);



  const finalizarCompra = async () => {


    // AL FINALIZAR LA COMPRA SE GENERA UN OBJETO CON LOS DATOS DE LA COMPRA

    let order = {}

    order.id = nombre + parseInt((Math.random()*100000));
    order.cliente = { nombre, email, telefono }
    order.total = precioFinal()
    order.date = Date().substring(0, 24)
    order.estado = "EN PREPARACIÓN"

    order.items = cartList.map(carrito => {
      let id = carrito.id
      let categoria = carrito.categoria
      let nombre = carrito.nombre
      let precio = carrito.precio
      let cantidad = carrito.cantidad
      let talle = carrito.talle
      return { id, categoria, nombre, precio, cantidad, talle }
    })


    sessionStorage.setItem('ordenCliente', JSON.stringify(order));
 

    const queryCollection = collection(db, "orders")
  addDoc(queryCollection, order)
  .then(res => console.log(res))
  .catch(err => console.log(err))



    // ESTA FUNCIÓN ACTUALIZA EL STOCK DE LOS PRODUCTOS EN LA 
    // BASE DE DATOS TENIENDO EN CUENTA EL TALLE DEL PRODUCTO, 
    //EN ESTE CASO, SI ES QUE COMPRA REMERA.  

    const queryCollectionStock = collection(db, "productos")
    const queryActualizarStock = await query(
      queryCollectionStock,
      where(documentId(), 'in', cartList.map((carritoid) => carritoid.id)))

    const batch = writeBatch(db)


    await getDocs(queryActualizarStock)
      .then(resp => resp.docs.forEach(((res) => {
        if (res.data().categoria === "gorra") { return batch.update(res.ref, { stock: [res.data().stock[0] - cartList.find(item => item.id === res.id).cantidad, res.data().stock[1], res.data().stock[2], res.data().stock[3], res.data().stock[4], res.data().stock[5]] }) }

        if (res.data().categoria === "remera" && cartList.find(item => item.id === res.id).talle === "xs") {
          return batch.update(res.ref, { stock: [res.data().stock[0], { "xs": res.data().stock[1].xs - cartList.find(item => item.id === res.id).cantidad }, res.data().stock[2], res.data().stock[3], res.data().stock[4], res.data().stock[5]] })
        }

        if (res.data().categoria === "remera" && cartList.find(item => item.id === res.id).talle === "s") {
          return batch.update(res.ref, { stock: [res.data().stock[0], res.data().stock[1], { "s": res.data().stock[2].s - cartList.find(item => item.id === res.id).cantidad }, res.data().stock[3], res.data().stock[4], res.data().stock[5]] })
        }

        if (res.data().categoria === "remera" && cartList.find(item => item.id === res.id).talle === "m") { return batch.update(res.ref, { stock: [res.data().stock[0], res.data().stock[1], res.data().stock[2], { "m": res.data().stock[3].m - cartList.find(item => item.id === res.id).cantidad }, res.data().stock[4], res.data().stock[5]] }) }

        if (res.data().categoria === "remera" && cartList.find(item => item.id === res.id).talle === "l") { return batch.update(res.ref, { stock: [res.data().stock[0], res.data().stock[1], res.data().stock[2], res.data().stock[3], { "l": res.data().stock[4].l - cartList.find(item => item.id === res.id).cantidad }, res.data().stock[5]] }) }

        if (res.data().categoria === "remera" && cartList.find(item => item.id === res.id).talle === "xl") { return batch.update(res.ref, { stock: [res.data().stock[0], res.data().stock[1], res.data().stock[2], res.data().stock[3], res.data().stock[4], { "xl": res.data().stock[5].xl - cartList.find(item => item.id === res.id).cantidad }] }) }

      }

      )))

      // CUANDO SE APRETA EL BOTÓN DE PAGAR, SE VACÍA EL CARRITO

      .finally(() =>  vaciarCart())


    batch.commit()
  }



  // VALIDACIONES DEL FORM
  // ESTA FUNCIÓN VALIDA QUE EL MAIL CONTENGA "@" Y QUE LA CONFIRMACIÓN 
  // DEL EMAIL SEA IGUAL AL EMAIL PROVISTO
  // EN CASO DE QUE NO SEA CORRECTA ALGUNA VALIDACIÓN, SE MUESTRA UN ! DE ERROR
  // Y SE OCULTA EL BOTÓN DE PAGAR
  

  useEffect(() => {

    let emailSplit = [...email]
    let emailconfSplit = [...emailconf]

    let emailCheck = emailSplit.some((e) => e === "@")
    let emailCheck2 = emailconfSplit.some((e) => e === "@")


    if (emailCheck === false || emailCheck2 === false || email !== emailconf) {
      setAlertCheck("alertInput")
      setMostrarBoton(false)
    }
    else {
      setAlertCheck("displayNone")
      setMostrarBoton(true)
    }

  }, [email, emailconf])


  return (
    
    <>

           <Titulo texto="Ingresá tus datos y aboná" />

        <form className='formAgregarProducto' action="" onSubmit={handleSubmit}>

          <Input alert="displayNone" titulo="NOMBRE Y APELLIDO" tipo="text" name="nombre" onchange={(e) => setNombre(e.target.value)} />
          <Input alert="displayNone" titulo="TELÉFONO" tipo="text" name="telefono" onchange={(e) => setTelefono(e.target.value)} />
          <Input alert={alertCheck} titulo="EMAIL" tipo="text" name="email" onchange={(e) => setEmail(e.target.value)} />
          <Input alert={alertCheck} titulo="REINGRESÁ TU EMAIL" tipo="text" name="emailconf" onchange={(e) => setEmailconf(e.target.value)} />

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
          <button className={mostrarBoton === false ? "displaynone" : 'pagarOrden'} type='submit'
            onClick={() => { finalizarCompra(); graciasPorSuCompra() }}> <a className='pagarOrden' href={ordenmp.sandbox_init_point}>Pagar</a></button>

      
        </form>
       

      </> 
     

  )
}
