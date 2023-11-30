import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about_img'>
        <img src="/img/svg/img1.png" alt="about" />
      </div>
      <div className='about_txt'>
        <h2>¿Quíenes somos?</h2>
        <p>
        Somos un grupo de profesionales de la psicología orientados hacia el abordaje, contención e intervención en conflictos emocionales a nivel psicoterapéutico para adultos, parejas, padres y niños en las variadas necesidades según la condición del niño y la familia.
        </p>
      </div>
      <div className='banner2'><img src="/img/svg/banner2.png" alt="banner2" /></div>
    </div>
  )
}

export default About