import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore"
import LoaderDetail from './LoaderDetail';

function ItemListContainer({ }) {

  const [listadoPro, setListadoPro] = useState([]);
  const [existe, setExiste] = useState("existe");
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { detalleID } = useParams()


  // ESTA FUNCIÓN GUARDA EN EL ESTADO LISTADOPRO EL ARRAY DE PRODUCTOS DE FIREBASE
  useEffect(() => {
    const db = getFirestore()
    const QueryCollection = collection(db, "productos")
    getDocs(QueryCollection)
      .then(resp => setListadoPro(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    const db = getFirestore()
    const dbQuery = doc(db, "productos", detalleID)
    getDoc(dbQuery)
      .then(resp => setProductos({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  //VALIDACION DEL ID DEL PRODUCTO

  useEffect(() => {
    let listadomap = listadoPro.map((item) => item.id)
    if (listadomap.includes(detalleID) === false) {

      return setExiste("no existe")
    } else {
      setExiste("existe")
    }
  }, [productos])
  return (< >
    {existe === "no existe" ?
      <LoaderDetail /> :
      <ItemDetail productos={productos} id={productos.id} imgpro={productos.imgpro} img={productos.img} nombre={productos.nombre} categoria={productos.categoria} precio={productos.precio} descripcion={productos.descripcion} cantidad={productos.stock} loading={loading} />
    }  </>
  );
}


export default ItemListContainer;

