import './ItemListContainer.css';



function ItemListContainer({greeting="Hola, soy Tomás Torres"}, {clase="greeting"}) {
    return (
<>
  <h1 className={clase}> {greeting} </h1>
</>

    ); }


export default ItemListContainer;
