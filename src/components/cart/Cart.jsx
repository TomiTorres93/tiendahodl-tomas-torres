import './Cart.css';
import Titulo from '../texts/Titulo';
import CartItem from './CartItem';
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"





export default function Cart({ }) {

  const { cartList, vaciarCart } = useCartContext()


  // ESTA FUNCIÓN SUMA EL PRECIO TOTAL DE 
  // TODOS LOS PRODUCTOS DEL CARRITO
  function precioFinal() {
    if (cartList.length > 0) {
      return cartList.map(a => (a.precio)).reduce((a, b) => a + b).toLocaleString('de-DE')
    }
  }


  // ESTA FUNCIÓN LLAMA A LA FUNCIÓN
  // VACIARCART DEL CART CONTEXT

  const vaciarCarrito = () => {
    vaciarCart()
  }


  return (
    <>
      {cartList.length === 0 ?
        <Link className='link ' to={"/"}>
          <div className='vaciarcarrito carritovacio'>
            CARRITO VACÍO <br /> <br />
            <img className='backhomeimg' src="https://img.icons8.com/ios/50/000000/home--v1.png" />
          </div></Link> :

        <>
          <Titulo texto="Carrito de compras" />
          <div className='cartcont'>
            <div className='micarritocont'>
              <p className='micarritotitulo'> Mi Carrito</p>
              {cartList.map((items) =>
                <>
                  <CartItem items={items} key={items.id} id={items.id} nombre={items.nombre} tipo={items.tipo} cantidad={items.cantidad} precio={(items.precioU * items.cantidad).toLocaleString('de-DE')} categoria={items.categoria} precioU={items.precioU.toLocaleString('de-DE')} img={items.img} talle={items.talle} />

                </>)}
              <div className='vaciarcarrito' onClick={vaciarCarrito}>
                VACIAR CARRITO
              </div>
            </div>

            <div className='resumendelpedidocont'>
              <p className='micarritotitulo'> Resumen del pedido</p>
              {cartList.map((items) =>

                <div className='detallecartrow' >
                  <p className='detallecartrownombre'>{items.nombre} <span className='catDetalle'>{items.categoria.toUpperCase()}</span> <span className='catDetalle'>{items.talle.toUpperCase()}</span> </p>
                  <p className='detallecartrowcant'>{items.cantidad} u.</p>
                  <p className='detallecartrowprecio'>${(items.precioU * items.cantidad).toLocaleString('de-DE')}</p>

                </div >

              )}

              <div className='carritoTotalCont'>
                <p className=''> <span className='carritopreciototaltit'>TOTAL</span> <span className='carritoprecio2'>${precioFinal()}</span> </p>
              </div>
              <Link className='vaciarcarrito' to={"/finalizar-compra"} >
                FINALIZAR COMPRA</Link>
            </div>
          </div>
        </>
      } </>
  )
} 
