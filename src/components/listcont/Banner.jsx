import React from 'react';
import './ItemListContainer.css';


export default function Banner( {img} ) {

  const scrollDown = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth',
  })}


  return (

    <div className='bannerImgCont'>
        
        <img className='bannerImg' src={img} alt="" />

        <button className='bannerBoton' onClick={scrollDown}> ︾ </button>

    </div>
  )
}
