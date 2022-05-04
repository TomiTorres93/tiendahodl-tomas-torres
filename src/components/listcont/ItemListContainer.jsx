
import './ItemListContainer.css';
import Card from './Cards'
import Titulo from '../texts/Titulo'
import Btcmoon from './img/btcmoon.png';
import cake from './img/cake.png';
import ethath from './img/ethath.png';
import etheip from './img/etheip.png';
import metamask from './img/metamask.png';



function ItemListContainer() {

 
    return (
  < >
  <Titulo  texto="Elegí el diseño" />
     
  <div className='itemsCont'>

   
    <Card  id="carduno" img={Btcmoon} producto="OLD BUT GOLD" descripcion="Todos empezamos comprando algunos satoshis." precio="$1200" stock="5" itemname="OLD BUT GOLD"/> 
    

    <Card id="carddos"  descripcion="A algunos solo les gusta ver el mundo arder." img={etheip} producto="EIP-1559" precio="$1200" className="backeip" stock="7" itemname="EIP-1559"/>


    <Card id="cardtres" className="cardcont backethath"  img={ethath}  producto="ETH-ATH" descripcion="¿Nuestra criptomoneda y blockchain favorita?" itemname="ETH-ATH" stock="2"/>

    <Card id="cardcuatro" className="cardcont backcake"  img={cake} producto="PANCAKE NEON" descripcion="¿Los Syrup Pools te hicieron pensar en dejar tu laburo?" itemname="PANCAKE NEON" stock="8" />

    <Card id="cardcinco" className="cardcont backmeta"  img={metamask} producto="FOX" descripcion="La wallet del zorrito. No la nombres en Twitter." itemname="FOX" stock="5" />

  </div>
  </>  

    ); }

    
export default ItemListContainer;
