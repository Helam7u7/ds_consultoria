import React from 'react'
import './Services.css'
import Card from '../Card/Card'

const Services = () => {
  return (
    <div id='services' className='services'>
      <h2>Services</h2>
      <div className='services_container'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className='services_container'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className='services_banner'>
        <img src="/img/svg/banner3.png" alt="" />
      </div>
    </div>
  )
}

export default Services