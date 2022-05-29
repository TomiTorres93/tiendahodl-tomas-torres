import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { Link } from 'react-router-dom';
import { getFetch } from '../../data';



function Item({id, nombre, imgpro, img, descripcion}) {

  const [productos, setProductos]=useState([]);
  const [itemimg, setItemimg] = useState(imgpro)

 /// FETCH DE LOS PRODUCTOS///
 useEffect(() => {
  getFetch()
  .then(respuesta =>   setProductos(respuesta))
},  []);
  


    return (

  <Link className='link' to={`/detalle/${id}`}>
  <div className="cardcont" id={id} >
        <img   src={itemimg}  className="cardimg" alt={nombre} onMouseOver={() => setItemimg(img)} onMouseOut={() => setItemimg(imgpro)} />
        <p className="cardTitulo">{nombre}</p>
        <p className="cardDescripcion">{descripcion}</p>
  </div>
  </Link>
    ); }
export default Item;


  // const [itemdetail, setitemdetail] = useState(false)
  // const toggleitemdetail = () => {
  //   itemdetail ? setitemdetail(false) : setitemdetail(true); }
      // onClick={ToggleSwitch2} className={switchToggle2 ? "cardcont2" : "cardcont"}    

// FUNCION PARA DETERMINAR LA CLASE DEPENDIENDO DE SI ESTÁ O NO ACTIVA LA ROUTE
// ClassName={ ({isActive}) => isActive ? 'Activo' : 'Inactivo' }