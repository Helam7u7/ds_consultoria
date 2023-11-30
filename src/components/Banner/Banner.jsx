import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <img src="/img/navbar/banner.png" alt="" />
      <div className='banner_title'>
        <h1>CUIDA TU MENTE, CUIDA TU VIDA</h1>
      </div>
      <span className='btn_wsp'>WhatsApp</span>
    </div>
  )
}

export default Banner