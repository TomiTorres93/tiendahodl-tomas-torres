import './ItemListContainer.css';
import { Link } from "react-router-dom"


export default function ItemCount({ itemcount }) {


  
  return (
    <>
      <div  className='aftercontador-cont'>
        <Link className='aftercountboton' to={"/cart"}>
        Finalizar compra</Link>
        
        <p className='aftercountboton' onClick={itemcount}>Seguir comprando</p>

        <Link className='filterelementimg'  to={"/"}>
        <img className='backhomeimg' src="https://img.icons8.com/ios/50/000000/home--v1.png"/>
        </Link>
      </div>

    </>
  )
}


