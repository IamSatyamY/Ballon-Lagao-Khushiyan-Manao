import React from 'react';
import logo from '../assets/logo.jpeg';
import "./Header2.css";
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} style={{ width: "150px", borderRadius: "10px" }} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse header2-nav" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 d-flex justify-content-center justify-content-lg-between" style={{ fontSize: "20px" }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">AboutUs</Link>
              </li>

              {/* Products Dropdown */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" id="mkul" to="/product/latex">Latex Balloon</Link></li>
                  <li><Link className="dropdown-item" to="/product/party-item">Party Item</Link></li>
                  <li><Link className="dropdown-item" to="/product/foil-balloons">Foil Balloons</Link></li>
                </ul>
              </li>

              {/* Printed Balloons Dropdown */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Printed Balloon
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">9 inch Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="#">12 inch Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="#">Crom Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="#">Metallic Print Balloon</Link></li>
                </ul>
              </li>

              {/* Promotional Sky Balloon Dropdown */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Promotional Sky Balloon
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">6 Feet Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="#">7 Feet Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="#">8 Feet Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="#">9 Feet Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="#">10 Feet Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="#">11 Feet Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="#">12 Feet Print Balloon</Link></li>
                </ul>
              </li>
              {/* end of promotional sky balloon dropdown */}

              {/* Air Inflatable Balloon Dropdown */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Air Inflatable Balloon
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Air Dancers</Link></li>
                  <li><Link className="dropdown-item" to="#">Customize Inflatable</Link></li>
                  <li><Link className="dropdown-item" to="#">Characters</Link></li>
                </ul>
              </li>
              {/* end of inflatable sky balloon dropdown */}
              
              {/*  Inflatable  tent  Dropdown */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Inflatable Tent
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Campaingn Tents</Link></li>
                  <li><Link className="dropdown-item" to="#">Disaster Tents</Link></li>
                  <li><Link className="dropdown-item" to="#">Hospitality</Link></li>
                </ul>
              </li>
              {/* end of inflatable tent dropdown */}


              {/* kids play Dropdown */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Kids Play
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Jumping Bouncy</Link></li>
                  <li><Link className="dropdown-item" to="#">Trampoline</Link></li>
                  <li><Link className="dropdown-item" to="#">Toy Mini Train</Link></li>
                  <li><Link className="dropdown-item" to="#">Inflatable Swimming Pool</Link></li>
                  <li><Link className="dropdown-item" to="#">Ladder Slide</Link></li>
                  <li><Link className="dropdown-item" to="#">Play Items</Link></li>
                </ul>
              </li>
              {/* end of kids playdropdown */}

              {/* event setup Dropdown */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Event-Setup
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Balloon Decoration</Link></li>
                  <li><Link className="dropdown-item" to="/helium-balloons">Hellium Balloon</Link></li>
                  <li><Link className="dropdown-item" to="#">Garland Balloon Decoration</Link></li>
                  <li><Link className="dropdown-item" to="#">Backdrop Panels</Link></li>
                  <li><Link className="dropdown-item" to="#">Dashing Entry</Link></li>
                  <li><Link className="dropdown-item" to="#">Shower Flower</Link></li>
                  <li><Link className="dropdown-item" to="#">Dry Smoke</Link></li>
                  <li><Link className="dropdown-item" to="#">Confetti Blasting</Link></li>
                </ul>
              </li>
              {/* end of kids playdropdown */}

              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header2;
