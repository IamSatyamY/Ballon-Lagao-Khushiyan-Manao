import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <p className='footer'>Copyright &copy; BalloonLagao 2025 | All Right Reserved | <Link to="/tandc">Terms and Conditions Apply</Link></p>
      
    </>
  )
}

export default Footer