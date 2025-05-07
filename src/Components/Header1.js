import React from 'react'
// import { IoIosCall } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiFacebook,FiInstagram  } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import "./Header1.css";

function Header1() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark text-white">
            <div className="container-fluid d-flex justify-content-between align-items-center">

                <ul className="navbar-nav mb-0" style={{ fontSize: "15px" }}>
                <li className="nav-item">
                    <a className="nav-link text-white" href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-success fw-bold" style={{ fontSize: "20px" }}/> +917666325325
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="mailto:support@balloonlagao.com">
                    <CiMail style={{ fontSize: "20px" }}/> support@balloonlagao.com
                    </a>
                </li>
                </ul>

                <div className="d-flex social-media" style={{ fontSize: "20px" }}>
                <a className="nav-link mx-3 text-white" href="https://www.facebook.com/balloonlagao" target="_blank" rel="noopener noreferrer">
                    <FiFacebook />
                </a>
                <a className="nav-link text-white" href="https://www.instagram.com/balloonlagao/" target="_blank" rel="noopener noreferrer">
                    <FiInstagram />
                </a>
                </div>
            </div>
        </nav>

        <span className='fixed-whatsapp'>
            <a className="nav-link text-white" href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-success fw-bold" style={{ fontSize: "50px" }}/>
            </a>
        </span>
    </div>
  )
}

export default Header1
   