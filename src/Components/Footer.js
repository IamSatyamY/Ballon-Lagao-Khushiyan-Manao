import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <p className='footer'>Copyright &copy; BalloonLagao 2025 | All Right Reserved | <Link to="/tandc">T and C Apply</Link></p>
      
    </>
  )
}

export default Footer