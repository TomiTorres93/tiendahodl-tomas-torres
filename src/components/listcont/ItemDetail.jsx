import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemCount from '../listcont/ItemCount';
import AfterCount from '../listcont/AfterCount';
import { useCartContext } from '../../context/CartContext'
import { doc, getDoc, getFirestore, collection, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
function ItemDetail({ id, img, imgpro, nombre, categoria, descripcion, cantidad, precio }) {

  const [stock, setStock] = useState(0)
  const [talle, setTalle] = useState("")
  const [botonTipo, setBotonTipo] = useState('itemcount')
  const [tipo, setTipo] = useState({})
  const [count, setCount] = useState(1)
  const [itemImg, setItemImg] = useState("imgpro")
  const [supera, setSupera] = useState(false)
  const [checkId, setCheckId] = useState(true);
  const [listPro, setListPro] = useState([]);
  const { detalleID } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const QueryCollection = collection(db, "productos")
    getDocs(QueryCollection)
      .then(resp => setListPro(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
      .catch((err) => console.log(err))
      .finally(() => {
        const checkArray = listPro.map(item => item.id)
        const check = checkArray.includes(detalleID)
        if (check === true) {
          return setCheckId(true)
        } else {
          return setCheckId(false)
        }
      })
  }, [])

  const itemcountChange = () => {
    if (botonTipo === "itemcount") {
      setBotonTipo("seguir o volver")
    } else { setBotonTipo("itemcount") }

  }
  // IMPORTACIÓN DEL CARTCONTEXT Y DESTRUCTURING PARA EXTRAER LA FUNCIÓN.

  const { addToCart, cartList } = useCartContext()

  // FUNCIONES PARA ELEGIR TALLE CUANDO EL PRODUCTO ES UNA REMERA.
  //SI EL PRODUCTO ES UNA GORRA EL STOCK SIEMPRE ESTARÁ GUARDADO EN EL LUGAR 0 DEL ARRAY DE STOCK, DENTRO DEL OBJETO.

  async function stockGorra() {
    if (categoria === "gorra") {
      const db = getFirestore()
      const queryDoc = doc(db, "productos", id)
      const docSnap = await getDoc(queryDoc);
      return setStock(docSnap.data().stock[0], setTalle("único"))

    }
  }

  stockGorra()

  const talleXS = async () => {
    const db = getFirestore()
    const queryDoc = doc(db, "productos", id)
    const docSnap = await getDoc(queryDoc);
    return setStock(docSnap.data().stock[1].xs), setTalle("xs")
  }

  const talleS = async () => {
    const db = getFirestore()
    const queryDoc = doc(db, "productos", id)
    const docSnap = await getDoc(queryDoc);
    return setStock(docSnap.data().stock[2].s), setTalle("s")
  }

  const talleM = async () => {
    const db = getFirestore()
    const queryDoc = doc(db, "productos", id)
    const docSnap = await getDoc(queryDoc);
    return setStock(docSnap.data().stock[3].m), setTalle("m")
  }
  const talleL = async () => {
    const db = getFirestore()
    const queryDoc = doc(db, "productos", id)
    const docSnap = await getDoc(queryDoc);
    return setStock(docSnap.data().stock[4].l), setTalle("l")
  }
  const talleXL = async () => {
    const db = getFirestore()
    const queryDoc = doc(db, "productos", id)
    const docSnap = await getDoc(queryDoc);
    return setStock(docSnap.data().stock[5].xl), setTalle("xl")
  }

  const orden = cartList.length + 1
  // ESTA FUNCIÓN AGREGA EL ITEM AL CARRITO
  const onAdd = () => {
    // ESTA FUNCIÓN FILTER DEVUELVE LA CANTIDAD DE ITEMS IGUALES (mismo id y mismo talle, en el caso de las remeras) YA AGREGADOS EN EL CARRITO
    function checkItemsEnCart() {
      const filtrado = cartList.filter(mismoItem => mismoItem.id === id && mismoItem.talle === talle)
      if (filtrado.length === 0) { return undefined }
      if (cartList.length != 0) { return filtrado[0].cantidad }
    }
    const resFilt = checkItemsEnCart()
    // ESTE IF COMPRUEBA QUE NO SE PUEDAN AGREGAR AL CARRITO MÁS ITEMS QUE EL STOCK DISPONIBLE 
    if (resFilt === undefined || (resFilt + count) <= stock) {
      addToCart({ orden: orden, id: id, talle: talle, img: imgpro, nombre, categoria, tipo, cantidad: count, precioU: precio, precio: (precio * count), stock: stock });
      setSupera(false)

    } else {
      setSupera(true)
    }
  }

  /// ESTA FUNCIÓN SUMA UN ITEM AL CONTADOR Y LIMITA LA CANTIDAD AL STOCK DISPONIBLE
  function Add() {
    setCount(count + 1)
    if (count == stock) { setCount(count) }
  }
  /// ESTA FUNCIÓN RESTA UN ITEM AL CONTADOR, QUE NUNCA PUEDE SER MENOR QUE 0
  function Remove() {
    setCount(count - 1)
    if (count == 0) { setCount(count) }
  }

  /// ESTAS DOS FUNCIONES LAS USA EL SELECTOR DE FOTOS DEL ITEMDETAIL PARA CAMBIAR ENTRE UNA Y OTRA DEPENDIENDO DEL CÍRCULO QUE CLICKEEMOS

  const cambiarImg = () => {
    return setItemImg("img")
  }
  const cambiarImgPro = () => {
    return setItemImg("imgpro")
  }

  return (

   

      <div className='column'>
        <div className='itemdetailcont' id={id} >

          <div className='imgContDetail'>
            <img src={itemImg === "imgpro" ? imgpro : img} className="itemdetailimg" alt={nombre} />

            <div className='cambiarImgBotonCont'>
              <button onClick={cambiarImgPro} className='cambiarImgBoton'>⬤</button>
              <button onClick={cambiarImg} className='cambiarImgBoton'>⬤</button>
            </div>
          </div>
          <div className='itemdetailDerCont'>
            <p className="itemdetailTitulo">{nombre}</p>
            <p className="itemdetailDescripcion">{descripcion}</p>
            <p className="itemdetailPrecio">${precio}</p>

            {botonTipo === 'itemcount' ?
              <ItemCount orden={orden} categoria={categoria} id={id} nombre={nombre} precio={precio} cantidad={cantidad} onAdd={onAdd} itemcount={itemcountChange} add={Add} remove={Remove} count={count} talle={talle} talleL={talleL} talleXL={talleXL} talleM={talleM} talleS={talleS} talleXS={talleXS} stock={stock} /> :
              <AfterCount itemcount={itemcountChange} />
            }
            {supera === true ? <span className='ultimosDispNo margintop1'>Tu selección supera el stock disponible.</span>
              : <span> </span>}
          </div>
        </div>
      </div>
   

  );
}

export default ItemDetail;
