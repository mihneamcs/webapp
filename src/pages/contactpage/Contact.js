import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoogleMap from './GoogleMap'
import "./Contact.css"
import Content from './Content'
function Contact() {
  return (
    <div >
        <Navbar/>        
        <h1 className='text-center mt-3'>CONTACT</h1>
        <GoogleMap/>
        <Content/>
        <Footer/>

    </div>
    
  )
}

export default Contact