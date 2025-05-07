import React from 'react';
import logo from '../assets/logo.jpeg';
import "./Header2.css";
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} style={{ width: "150px", borderRadius: "10px" }} alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse header2-nav" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 d-flex justify-content-between" style={{ fontSize: "20px" }}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>

              {/* Products Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" id="mkul" href="#">Latex Balloon</a></li>
                  <li><a className="dropdown-item" href="#">Party Item</a></li>
                  <li><a className="dropdown-item" href="#">Foil Balloons</a></li>
                </ul>
              </li>

              {/* Printed Balloons Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Printed Balloon
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">9 inch Print Balloon</a></li>
                  <li><a className="dropdown-item" href="#">12 inch Print Balloon</a></li>
                  <li><a className="dropdown-item" href="#">Crom Print Balloon</a></li>
                  <li><a className="dropdown-item" href="#">Metallic Print Balloon</a></li>
                </ul>
              </li>

              {/* Promotional Sky Balloon Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Promotional Sky Balloon
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">6 Feet Print Balloon</a></li>
                  <li><a className="dropdown-item" href="#">7 Feet Print Balloon</a></li>
                  <li><a className="dropdown-item" href="#">8 Feet Print Balloon</a></li>
                  <li><a className="dropdown-item" href="#">9 Feet Print Balloon</a></li>
                  <li><a className="dropdown-item" href="#">10 Feet Print Balloon</a></li>
                  <li><a className="dropdown-item" href="#">11 Feet Print Balloon</a></li>
                  <li><a className="dropdown-item" href="#">12 Feet Print Balloon</a></li>
                </ul>
              </li>
              {/* end of promotional sky balloon dropdown */}

              {/* Air Inflatable Balloon Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Air Inflatable Balloon
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Air Dancers</a></li>
                  <li><a className="dropdown-item" href="#">Customize Inflatable</a></li>
                  <li><a className="dropdown-item" href="#">Characters</a></li>
                </ul>
              </li>
              {/* end of inflatable sky balloon dropdown */}


              {/* kids play Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Kids Play
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Jumping Bouncy</a></li>
                  <li><a className="dropdown-item" href="#">Trampoline</a></li>
                  <li><a className="dropdown-item" href="#">Toy Mini Train</a></li>
                  <li><a className="dropdown-item" href="#">Inflatable Swimming Pool</a></li>
                  <li><a className="dropdown-item" href="#">Ladder Slide</a></li>
                  <li><a className="dropdown-item" href="#">Play Items</a></li>
                </ul>
              </li>
              {/* end of kids playdropdown */}

              {/* event setup Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Event-Setup
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Balloon Decoration</a></li>
                  <li><a className="dropdown-item" href="#">Hellium Balloon</a></li>
                  <li><a className="dropdown-item" href="#">Garland Balloon Decoration</a></li>
                  <li><a className="dropdown-item" href="#">Backdrop Panels</a></li>
                  <li><a className="dropdown-item" href="#">Dashing Entry</a></li>
                  <li><a className="dropdown-item" href="#">Shower Flower</a></li>
                  <li><a className="dropdown-item" href="#">Dry Smoke</a></li>
                  <li><a className="dropdown-item" href="#">Confetti Blasting</a></li>
                </ul>
              </li>
              {/* end of kids playdropdown */}

              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header2;
