import { useState } from 'react';
import Titulo from '../texts/Titulo';
import './ItemListContainer.css';
import { Link } from "react-router-dom"

function LoaderDetail() {

   ////SIMULACIÓN DE CARGA LAS CARDS - LOADER ///
   const [delay, setDelay] = useState(true)
   const cardload = new Promise((resolve, reject) => {
    setTimeout(() => {resolve([]);}, 2000);
  });

  cardload.then(() => {
    setDelay(false);
  });


    return (
      <>
      {delay === true ? 
      <div className='loaderDetail'>   </div> : 
      <div className="vcenter">
      <Titulo texto="El producto no existe"  />
      <Link className='link ' to={"/"}>
      <p className='regresarButton'>Regresar</p>
      </Link>
      </div> 
   }
  
   </>
    );
  }
  
  export default LoaderDetail;




  // <Pulsar 
  //  size={40}
  //  speed={1.75} 
  //  color="white"/>

