import React from 'react'
import './Home.css'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
      <Banner/>  
      <About/> 
      <Services/>
      <Footer/>
    </>
  )
}

export default Home