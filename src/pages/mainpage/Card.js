import React from 'react'
import "./Card.css"

function Card() {
  return (
      <div className='mb-5'>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require('./image1.jpg')} class="d-block w-100 image" alt="..."/>
      <div class="carousel-caption d-none d-md-block descriere">
        <h1>VISEAZĂ, CREEAZĂ, INOVEAZĂ!</h1>
        <p className='short'>Facultatea de Automatică şi Calculatoare are ca misiune realizarea unui mediu de excelență pentru educație, cercetare şi inovare, factori cheie în dezvoltarea economiei bazate pe cunoaştere.</p>
      </div>
    </div>
    </div>
</div>
</div>
  )
}

export default Card