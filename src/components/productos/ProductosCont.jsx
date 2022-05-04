import './Productos.css';
import Producto from './Producto'
import Titulo from '../texts/Titulo'
import hoodie from './img/hoodie.png';
import remera from './img/remera.png';
import short from './img/short.png';


function ProductosCont() {


    

    return (

        
  < >
  <Titulo  texto="Elegí el producto" />
     
  <div className='itemsCont'>
    
    <Producto img={hoodie} className="cardprocont" producto="HOODIE" imgid="hoodieid" precio="6500" />
    <Producto img={remera} className="cardprocont" producto="REMERA" precio="3500"/>
    <Producto img={short} className="cardprocont"  producto="SHORT" precio="2500"/>

  </div>
  </>  

    ); 
  
}

    
export default ProductosCont;

