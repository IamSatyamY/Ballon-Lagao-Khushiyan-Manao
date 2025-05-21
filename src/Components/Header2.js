import React from 'react';
import logo from '../assets/logo.jpeg';
import "./Header2.css";
import { Link } from 'react-router-dom';

const Header2 = () => {
  const closeNavbar = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse.show');
    if (navbarCollapse) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: true });
      bsCollapse.hide();
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} style={{ borderRadius: "10px" }} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse header2-nav" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 d-flex justify-content-center justify-content-lg-between" style={{ fontSize: "20px" }}>
              <li className="nav-item">
                <Link className="nav-link active" to="/" onClick={closeNavbar}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeNavbar}>AboutUs</Link>
              </li>

              {/* Products */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/product" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/product#latex" onClick={closeNavbar}>Latex Balloon</Link></li>
                  <li><Link className="dropdown-item" to="/product#party" onClick={closeNavbar}>Party Item</Link></li>
                  <li><Link className="dropdown-item" to="/product#foil" onClick={closeNavbar}>Foil Balloons</Link></li>
                </ul>
              </li>

              {/* Printed Balloons */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/printed" role="button" data-bs-toggle="dropdown" aria-expanded="false">Printed Balloon</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/printed#9_inch_print" onClick={closeNavbar}>9 inch Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="/printed#12_inch_print" onClick={closeNavbar}>12 inch Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="/printed#crom_print" onClick={closeNavbar}>Crom Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="/printed#metalic_print" onClick={closeNavbar}>Metallic Print Balloon</Link></li>
                </ul>
              </li>

              {/* Promotional Sky Balloon */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/promotionalsky" role="button" data-bs-toggle="dropdown" aria-expanded="false">Promotional Sky Balloon</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/promotionalsky#6_feet_print" onClick={closeNavbar}>6 Feet Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="/promotionalsky#7_feet_print" onClick={closeNavbar}>7 Feet Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="/promotionalsky#8_feet_print" onClick={closeNavbar}>8 Feet Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="/promotionalsky#9_feet_print" onClick={closeNavbar}>9 Feet Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="/promotionalsky#10_feet_print" onClick={closeNavbar}>10 Feet Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="/promotionalsky#11_feet_print" onClick={closeNavbar}>11 Feet Print Balloon</Link></li>
                  <li><Link className="dropdown-item" to="/promotionalsky#12_feet_print" onClick={closeNavbar}>12 Feet Print Balloon</Link></li>
                </ul>
              </li>

              {/* Air Inflatable Balloon */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/airinflatable" role="button" data-bs-toggle="dropdown" aria-expanded="false">Air Inflatable Balloon</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/airinflatable#air_dancer" onClick={closeNavbar}>Air Dancers</Link></li>
                  <li><Link className="dropdown-item" to="/airinflatable#customize_inflatable" onClick={closeNavbar}>Customize Inflatable</Link></li>
                  <li><Link className="dropdown-item" to="/airinflatable#characters" onClick={closeNavbar}>Characters</Link></li>
                </ul>
              </li>

              {/* Inflatable Tent */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/inflatabletent" role="button" data-bs-toggle="dropdown" aria-expanded="false">Inflatable Tent</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/inflatabletent#campaign_tent" onClick={closeNavbar}>Campaingn Tents</Link></li>
                  <li><Link className="dropdown-item" to="/inflatabletent#disaster_tent" onClick={closeNavbar}>Disaster Tents</Link></li>
                  <li><Link className="dropdown-item" to="/inflatabletent#hospitality" onClick={closeNavbar}>Hospitality</Link></li>
                </ul>
              </li>

              {/* Kids Play */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/kids" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kids Play</Link>
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
                <Link className="nav-link dropdown-toggle" to="/eventsetup" role="button" data-bs-toggle="dropdown" aria-expanded="false">Event-Setup</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/eventsetup#balloon_decoration" onClick={closeNavbar}>Balloon Decoration</Link></li>
                  <li><Link className="dropdown-item" to="/eventsetup#helium_balloon" onClick={closeNavbar}>Helium Balloon</Link></li>
                  <li><Link className="dropdown-item" to="/eventsetup#garland_balloon_decoration" onClick={closeNavbar}>Garland Balloon Decoration</Link></li>
                  <li className="dropdown-item" style={{ backgroundColor: "grey" }}>---Wedding Setup--</li>
                  <li><Link className="dropdown-item" to="/eventsetup#backdrop_panels" onClick={closeNavbar}>Backdrop Panels</Link></li>
                  <li><Link className="dropdown-item" to="/eventsetup#dashing_entry" onClick={closeNavbar}>Dashing Entry</Link></li>
                  <li><Link className="dropdown-item" to="/eventsetup#shower_flower" onClick={closeNavbar}>Shower Flower</Link></li>
                  <li><Link className="dropdown-item" to="/eventsetup#dry_smoke" onClick={closeNavbar}>Dry Smoke</Link></li>
                  <li><Link className="dropdown-item" to="/eventsetup#confetti_blasting" onClick={closeNavbar}>Confetti Blasting</Link></li>
                  <li className="dropdown-item" style={{ backgroundColor: "grey" }}>---Corporate Setup--</li>
                  <li><Link className="dropdown-item" to="/eventsetup#backdrop_panels" onClick={closeNavbar}>Annual General Meeting</Link></li>
                  <li><Link className="dropdown-item" to="/eventsetup#dashing_entry" onClick={closeNavbar}>Employee Events</Link></li>
                  <li><Link className="dropdown-item" to="/eventsetup#shower_flower" onClick={closeNavbar}>Productivity Workshops</Link></li>
                  <li><Link className="dropdown-item" to="/eventsetup#dry_smoke" onClick={closeNavbar}>Grand Openings</Link></li>
                  <li><Link className="dropdown-item" to="/eventsetup#confetti_blasting" onClick={closeNavbar}>Product Launch</Link></li>
                  <li><Link className="dropdown-item" to="/eventsetup#confetti_blasting" onClick={closeNavbar}>Office Decoration</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header2;
