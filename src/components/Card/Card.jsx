import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='card'>
      <div className='card_img'>
        <img src="/img/svg/service1.png" alt="" />
      </div>
      <div className='card_txt'>
        <h3>Terapias</h3>
        <p>Enfocada en identificar y cambiar patrones de pensamiento y comportamiento negativos.</p>
      </div>
    </div>
  )
}

export default Card