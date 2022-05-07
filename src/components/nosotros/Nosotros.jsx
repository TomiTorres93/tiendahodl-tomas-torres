import React, { useState } from 'react';
import Titulo from '../texts/Titulo'
import Card from '../listcont/Item'
import designer from './img/designer.png';
import dev from './img/dev.png';
import marketing from './img/marketing.png';



function Nosotros() {
  
    return (
        < >
        <Titulo  texto="Nosotros" />
        
  <div className='itemsCont'>

      <Card  id="carduno"   img={designer} producto="JUAN CARLOS" descripcion="Diseñador gráfico"/>

      <Card  id="carduno"   img={dev} producto="COSITORTO" descripcion="Gerente de marketing" />
      <Card  id="carduno"   img={marketing} producto="CHANTI" descripcion="Desarrollador web" />


  </div>
  </>  
    ); }

export default Nosotros;
