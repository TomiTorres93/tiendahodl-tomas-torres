import React from 'react';
import './ItemListContainer.css';
import Banner from './Banner';



export default function BannerList( {imagenes} ) {


  return (


      <div className='bannerCarouselCont'>

          {imagenes.map((img) => <Banner key={img.id} {...img} />)}    

      </div>

  )
}
