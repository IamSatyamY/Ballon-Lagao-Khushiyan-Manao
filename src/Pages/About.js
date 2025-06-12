import React from 'react'
import "./About.css"
import mdimg from '../assets/md.png'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa6'
const About = () => {
  return (
    <div className='container about' style={{marginTop:"65px"}} id='about-link'>

      <h1 className='about-heading'> Our Story </h1>
      
      {/* md page */}
      <div className='about-allinfo'>
        <div className='about-para'>
          

          <p>    
            At <span className='balloonbold'>Balloon Lagao</span>, we don’t just decorate events — we create unforgettable experiences. As one of India’s fastest-growing balloon decoration brands, we specialize in transforming ordinary spaces into extraordinary celebrations with our stunning and creative balloon setups.
          </p>
          <p>
            Whether it’s a birthday party in Bangalore, a corporate event in Delhi, a baby shower in Mumbai, or a wedding in Jaipur, we deliver our services across PAN India with consistent quality, creativity, and professionalism. Our team of experienced balloon artists and event stylists brings your vision to life — from themed décor and customized backdrops to elegant balloon arches, garlands, photo booths, and more.
          </p>

          <p>
            With over 20,000 events successfully completed, and a reputation for punctuality, precision, and design excellence, <span className='balloonbold'>Balloon Lagao</span> has become the go-to name for celebrities, corporate clients, and families who want to make their events truly special.
          </p>
        </div>
        <div className='mdinfo'>
          <p>
            Mr.Abrar Ahmed
          </p>
          <p className='name'>
            Managing Director
          </p>
          <img src={mdimg} alt=""/>
          <div className='social'>
            <a className="nav-link mx-3 " href="https://in.linkedin.com/in/abrar-ahmed-2397b232a?trk=public_profile_samename-profile" target="_self" rel="noopener noreferrer">
                <FaLinkedin  />
            </a>
            <a className="nav-link " href="https://www.instagram.com/abrar_ahmed_ghosi/" target="_self" rel="noopener noreferrer">
                <FiInstagram />
            </a>

          </div>
          </div>
      </div>
      {/* head operation */}
    
      {/* Management team*/}
      

      {/* Executive Team */}
      

      {/* Web Team */}
      
    </div>
  )
}

export default About