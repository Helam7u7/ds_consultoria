import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div id='index' className='navbar'>
      <ul className='navbar_links'>
        <li className='link'><img src="/img/svg/logo.png" alt="" /></li>
        <li className='link txt'><a href="#about">Nosotros</a></li>
        <li className='link txt'><a href="#services">Servicios</a></li>
        <li className='link txt'><a href="#contact">Contáctanos</a></li>
        <li className='link cuadro'><a href="#horario">Horarios</a></li>
      </ul>
    </div>
  )
}

export default Navbar