import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div id='contact' className='footer'>
      <div className='footer_contact'>
        <div><img src="/img/svg/logow.png" alt="" /></div>
        <div className='contact_list'>
          <div><img src="/img/svg/Phone.svg" alt="" /></div>
          <ul className='fl footer_list'>
            <li className='list_title'>Teléfono</li>
            <li className='list_info'>+51 999 999 999</li>
          </ul>
        </div>
        <div className='contact_list'>
          <div><img src="/img/svg/Message.svg" alt="" /></div>
          <ul className=' fl footer_list'>
            <li className='list_title'>Email</li>
            <li className='list_info'>email@ejemplo.com</li>
          </ul>
        </div>
        <div className='contact_list'>
          <div><img src="/img/svg/Geo.svg" alt="" /></div>
          <ul className='fl footer_list'>
            <li className='list_title'>Ubicación</li>
            <li className='list_info'>Lima, 1 09-74</li>
          </ul>
        </div>
      </div>
      <div className='footer_inf'>
        <ul className='fl footer_list'>
          <li className='list_title'><div></div>Enlaces</li>
          <li className='list_info'><a href="#index">Inicio</a></li>
          <li className='list_info'><a href="#about">Nosotros</a></li>
          <li className='list_info'><a href="#services">Servicios</a></li>
        </ul>
        <ul className='fl footer_list'>
          <li className='list_title'><div></div>Servicios</li>
          <li className='list_info'>Consultas</li>
          <li className='list_info'>Orientación</li>
          <li className='list_info'>Ayuda</li>
        </ul>
        <ul className='fl footer_list'>
          <li className='list_title'><div></div>Lorem impsun</li>
          <li className='list_info'>Loremimsupn</li>
          <li className='list_info'>Loremimsupn</li>
          <li className='list_info'>Loremimsupn</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer