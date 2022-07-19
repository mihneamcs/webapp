import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from './Content'
import Card from './Card'
import Carousel from './Carousel'
import "./Mainpage.css"
function Mainpage() {
  return (
    <div>
      <Navbar/>
      <Card/>
      <Content/>
      <Carousel/>

      <Footer/>

    </div>
  )
}

export default Mainpage