import React from 'react';
import Titulo from '../texts/Titulo'
import designer from './img/designer.png';
import dev from './img/dev.png';
import marketing from './img/marketing.png';



function Nosotros() {

      return (
            < >
                  <Titulo texto="Nosotros" />
                  <div className='itemsCont'>
                        <div className="cardcont" >
                              <img src={designer} className="cardimg" alt="Diseñador gráfico" />
                              <p className="cardTitulo">JUAN CARLOS</p>
                              <p className="cardDescripcion">Diseñador gráfico</p>
                        </div>

                        <div className="cardcont" >
                              <img src={dev} className="cardimg" alt="Gerente de marketing" />
                              <p className="cardTitulo">COSITORTO</p>
                              <p className="cardDescripcion">Gerente de marketing</p>
                        </div>

                        <div className="cardcont" >
                              <img src={marketing} className="cardimg" alt="Desarrollador web" />
                              <p className="cardTitulo">CHANTI</p>
                              <p className="cardDescripcion">Desarrollador web</p>
                        </div>
                  </div>
            </>
      );
}

export default Nosotros;
