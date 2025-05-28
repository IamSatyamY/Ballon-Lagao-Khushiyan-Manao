import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';
import './Header2.css';
import { Link } from 'react-router-dom';

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <img src={logo} alt="Logo" style={{ borderRadius: '10px' }} />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse header2-nav ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav w-100 d-flex justify-content-center justify-content-lg-between" style={{ fontSize: "20px" }}>

            {/* Home & About */}
            <li className="nav-item">
              <Link className="nav-link active" to="/" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>About Us</Link>
            </li>

            {/* Products */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Products</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/product#latex" onClick={closeNavbar}>Latex Balloon</Link></li>
                <li><Link className="dropdown-item" to="/product#party" onClick={closeNavbar}>Party Item</Link></li>
                <li><Link className="dropdown-item" to="/product#foil" onClick={closeNavbar}>Foil Balloons</Link></li>
              </ul>
            </li>

            {/* Printed Balloon */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Printed Balloon</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/printed#9_inch_print" onClick={closeNavbar}>9 inch Print Balloon</Link></li>
                <li><Link className="dropdown-item" to="/printed#12_inch_print" onClick={closeNavbar}>12 inch Print Balloon</Link></li>
                <li><Link className="dropdown-item" to="/printed#crom_print" onClick={closeNavbar}>Crom Print Balloon</Link></li>
                <li><Link className="dropdown-item" to="/printed#metalic_print" onClick={closeNavbar}>Metallic Print Balloon</Link></li>
              </ul>
            </li>

            {/* Promotional Sky Balloon */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Promotional Sky Balloon</Link>
              <ul className="dropdown-menu">
                {/* {[6, 7, 8, 9, 10, 11, 12].map(size => (
                  <li key={size}>
                    <Link className="dropdown-item" to={`/promotionalsky#${size}_feet_print`} onClick={closeNavbar}>
                      {size} Feet Print Balloon
                    </Link>
                  </li>
                ))} */}

                <li><Link className="dropdown-item" to="/promotionalsky#6to14" onClick={closeNavbar}>6-14 ft Print Balloon</Link></li>
                <li><Link className="dropdown-item" to="/promotionalsky#square_shape" onClick={closeNavbar}>Square Shape</Link></li>
                <li><Link className="dropdown-item" to="/promotionalsky#blimp_shape" onClick={closeNavbar}>Blimp Shape</Link></li>
                

              </ul>
            </li>

            {/* Air Inflatable Balloon */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Air Inflatable Balloon</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/airinflatable#air_dancer" onClick={closeNavbar}>Air Dancers</Link></li>
                <li><Link className="dropdown-item" to="/airinflatable#customize_inflatable" onClick={closeNavbar}>Customize Inflatable</Link></li>
                <li><Link className="dropdown-item" to="/airinflatable#characters" onClick={closeNavbar}>Characters</Link></li>
              </ul>
            </li>

            {/* Inflatable Tent */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Inflatable Tent</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/inflatabletent#campaign_tent" onClick={closeNavbar}>Campaign Tents</Link></li>
                <li><Link className="dropdown-item" to="/inflatabletent#other_tent" onClick={closeNavbar}>Other Tents</Link></li>
              </ul>
            </li>

            {/* Kids Play */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Kids Play</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/kids#jumping_bouncy" onClick={closeNavbar}>Jumping Bouncy</Link></li>
                <li><Link className="dropdown-item" to="/kids#trampoline" onClick={closeNavbar}>Trampoline</Link></li>
                <li><Link className="dropdown-item" to="/kids#toy_mini" onClick={closeNavbar}>Toy Mini Train</Link></li>
                <li><Link className="dropdown-item" to="/kids#inflatable_swimming" onClick={closeNavbar}>Inflatable Swimming Pool</Link></li>
                <li><Link className="dropdown-item" to="/kids#ladder_slide" onClick={closeNavbar}>Ladder Slide</Link></li>
                <li><Link className="dropdown-item" to="/kids#play_items" onClick={closeNavbar}>Play Items</Link></li>
              </ul>
            </li>

            {/* Event Setup */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Event Setup</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/eventsetup#balloon_decoration" onClick={closeNavbar}>Balloon Decoration</Link></li>
                <li><Link className="dropdown-item" to="/eventsetup#helium_balloon" onClick={closeNavbar}>Helium Balloon</Link></li>
                <li><Link className="dropdown-item" to="/eventsetup#garland_balloon_decoration" onClick={closeNavbar}>Garland Balloon Decoration</Link></li>
                <li className="dropdown-item" style={{ backgroundColor: "grey" }}>---Wedding Setup---</li>
                <li><Link className="dropdown-item" to="/eventsetup#backdrop_panels" onClick={closeNavbar}>Backdrop Panels</Link></li>
                <li><Link className="dropdown-item" to="/eventsetup#dashing_entry" onClick={closeNavbar}>Dashing Entry</Link></li>
                <li><Link className="dropdown-item" to="/eventsetup#shower_flower" onClick={closeNavbar}>Shower Flower</Link></li>
                <li><Link className="dropdown-item" to="/eventsetup#dry_smoke" onClick={closeNavbar}>Dry Smoke</Link></li>
                <li><Link className="dropdown-item" to="/eventsetup#confetti_blasting" onClick={closeNavbar}>Confetti Blasting</Link></li>
                <li className="dropdown-item" style={{ backgroundColor: "grey" }}>---Corporate Setup---</li>
                <li><Link className="dropdown-item" to="/eventsetup#Annual_General_Meeting" onClick={closeNavbar}>Annual General Meeting</Link></li>
                <li><Link className="dropdown-item" to="/eventsetup#Employee_Events" onClick={closeNavbar}>Employee Events</Link></li>
                <li><Link className="dropdown-item" to="/eventsetup#Productivity_Workshops" onClick={closeNavbar}>Productivity Workshops</Link></li>
                <li><Link className="dropdown-item" to="/eventsetup#Grand_Openings" onClick={closeNavbar}>Grand Openings</Link></li>
                <li><Link className="dropdown-item" to="/eventsetup#Product_Launch" onClick={closeNavbar}>Product Launch</Link></li>
                <li><Link className="dropdown-item" to="/eventsetup#Office_Decoration" onClick={closeNavbar}>Office Decoration</Link></li>
              </ul>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header2;
