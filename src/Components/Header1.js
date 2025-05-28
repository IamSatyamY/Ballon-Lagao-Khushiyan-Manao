import React from 'react'
// import { IoIosCall } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiFacebook,FiInstagram  } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header1.css";
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Header1() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark text-white">
            <div className="container-fluid d-flex justify-content-between align-items-center">

                <ul className="navbar-nav mb-0" style={{ fontSize: "15px" }}>
                <li className="nav-item" style={{borderBottom:"none"}}>
                    <a className="nav-link text-white" href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-success fw-bold" style={{ fontSize: "20px" }}/> +917666325325
                    </a>
                </li>
                <li className="nav-item" style={{borderBottom:"none"}}>
                    <a className="nav-link text-white" href="mailto:support@balloonlagao.com">
                    <CiMail style={{ fontSize: "20px" }}/> support@balloonlagao.com
                    </a>
                </li>
                </ul>

                <div className="d-flex social-media" style={{ fontSize: "16px" }}>
                    <Link className="nav-link text-white" to="/admin" target="_self" rel="noopener noreferrer">
                        <RiAdminLine />
                    </Link>&nbsp;&nbsp;&nbsp;
                    <Link className="nav-link text-white" to="/cart" target="_self" rel="noopener noreferrer">
                        <AiOutlineShoppingCart />
                    </Link>
                    <a className="nav-link mx-3 text-white" href="https://www.facebook.com/balloonlagao" target="_blank" rel="noopener noreferrer">
                        <FiFacebook />
                    </a>
                    <a className="nav-link text-white" href="https://www.instagram.com/balloonlagao/" target="_blank" rel="noopener noreferrer">
                        <FiInstagram />
                    </a>
                    {/* https://www.instagram.com/abrar_ahmed_ghosi/ */}
                    {/* https://in.linkedin.com/in/abrar-ahmed-2397b232a?trk=public_profile_samename-profile */}
                </div>
            </div>
        </nav>

        <span className='fixed-whatsapp'>
            <a className="nav-link text-white" href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className=" fw-bold" style={{ fontSize: "50px" }}/>
            </a>
        </span>
    </div>
  )
}

export default Header1
   