import React from 'react'
import "./Contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact-div container'>
      <div className='non-map'>
          <div className='single-element'>
            <div className='logo'>
              <FaLocationDot/>
            </div>
            <div className='head'>
              <p>Address</p>
            </div>
            <div className='para'>
              <address>Plot No. R-488,<br/>
                Sector 8, MIDC <br/>
                Industrial Area, <br/>
                Rabale,Navi Mumbai - 400701,<br/>
                Maharashtra, India
              </address>
            </div>
          </div>
          {/* ******************************* */}
          
          <div className='single-element'>
            <div className='logo'>
              <a className="nav-link" href="mailto:support@balloonlagao.com">
                <MdEmail />
                {/* <p>Email</p> */}
                {/* <span> */}
                  {/* support@balloonlagao.com */}
                  {/* </span> */}
              </a>
            </div>
            <div className='head'> 
              <p>Email</p>
            </div>
            <div className='para'> 
              <p>support@balloonlagao.com</p>
            </div>
          </div>
          {/* ******************************* */}
          
        
          <div className='single-element' >
            <div className='logo'>
              <a className="nav-link" href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                <FaPhoneAlt />
                {/* <p>Phone</p> */}
                {/* <span> */}
                  {/* +91-7666325325<br/>
                  +91-7666326326<br/> */}
                {/* </span> */}
              </a>
            </div>

            <div className='head'> 
              <p>Phone</p>
            </div>
            <div className='para'> 
              <p>
              +91-7666325325<br/>
              +91-7666326326<br/>
              </p>
            </div>
          </div>
      </div>

      
      <div className='map container'>
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.150462244125!2d73.011211!3d19.14489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfd99352731f%3A0x8b9e650becae290!2sBalloon%20Lagao!5e0!3m2!1sen!2sin!4v1746593584157!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Balloon Lagao"
            >

          </iframe>
        </div>
      </div>

    </div>
  )
}

export default Contact