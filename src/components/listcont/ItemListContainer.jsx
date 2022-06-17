import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Titulo from '../texts/Titulo'
import ItemList from './ItemList';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { getFirestore, where, collection, getDocs, query } from "firebase/firestore"

// // RANDOM BUTTON

// let randomID = Math.floor(Math.random() * 15);

// console.log(randomID)

function ItemListContainer() {


  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);

  const { id } = useParams()


  // LA FUNCIÓN TOMA LOS PRODUCTOS DE FIREBASE Y LOS GUARDA EN LA VARIABLE PRODUCTOS
  useEffect(() => {

    const db = getFirestore()
    const QueryCollection = collection(db, "productos")
    const QueryCollectionFilter = id ? query(QueryCollection, where("categoria", "==", id)) : QueryCollection

    getDocs(QueryCollectionFilter)
      .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
      .catch((err) => console.log(err))
      .finally(() => setCargando(false))

  }, [id])

  ////SIMULACIÓN DE CARGA LAS CARDS - LOADER ///

  const cards = new Promise((resolve, reject) => {
    setTimeout(() => { resolve([]); }, 2000);
  });

  cards.then((cargarItems) => {
    setItems(cargarItems);
    setCargando(false);

  });

  return (
    < >


      <Titulo texto="Elegí el diseño" />

      <div className='filtercont' >
        <p className='filterelementfilt'>FILTRO</p>

        <Link className='link filterelement' to={`/categoria/remera`}>
          REMERAS
        </Link>

        <Link className='link filterelement' to={`/categoria/gorra`}>
          GORRAS
        </Link>

        <Link className='link filterelement' to={`/`}>
          VER TODO
        </Link>

      </div>

      <ItemList items={productos} loading={cargando} />

    </>
  );
}



export default ItemListContainer;
