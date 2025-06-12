import React from 'react'
import "./QuickView.css"

import tent from '../assets/Quick View/tent.jpg'
import dangler from '../assets/Quick View/BALLOON-DANGLER.jpeg'
// import dangler2 from '../assets/Quick View/dangler.jpg'
import helium from '../assets/Quick View/helium balloon.jpeg'
import inflatable from '../assets/Quick View/inflatable balloon.png'
import character from '../assets/Quick View/inflatable character balloon.jpeg'
import latex from '../assets/Quick View/latex balloon.jpg'
import micky from '../assets/Quick View/Mickey-Mouse-Jumping-Bouncy..jpg'
import sky from '../assets/Quick View/sky adv balloon.png'
import trampoline from '../assets/Quick View/trampoline.jpg'
import { Link } from 'react-router-dom'

const QuickView = () => {
  return (
    <div className='quickview container' id='quickview-link'>
        <h1>Quick view of our products</h1>
        <Link to="/contactForm" className="btn btn-warning">Enquiry Form</Link>
        <div className='quickview-div'>
          {/*  */}
            <div className='quickview-item'>
                <img className='quickview-item-img' src={helium} alt='helium balloon img'/>
                <div className='quickview-item-name' >
                    <span>Helium Balloon</span>
                </div>
                <div className='quickview-item-description' >
                    <span>Helium Printed Balloon</span>
                </div>
                <div className='quickview-item-button-div'>
                  <a className='btn btn-secondary' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </div>
            </div>
          {/*  */}
          {/*  */}
            <div className='quickview-item'>
                <img className='quickview-item-img' src={tent} alt='inflatable tent img'/>
                <div className='quickview-item-name' >
                    <span>Inflatable Tent</span>
                </div>
                <div className='quickview-item-description' >
                    <span>Inflatable Foldable Tent</span>
                </div>
                <div className='quickview-item-button-div'>
                  <a className='btn btn-secondary' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </div>
            </div>
          {/*  */}
          {/*  */}
            <div className='quickview-item'>
                <img className='quickview-item-img' src={dangler} alt='dangler'/>
                <div className='quickview-item-name' >
                    <span>Dangler</span>
                </div>
                <div className='quickview-item-description' >
                    <span>Printed Dangler</span>
                </div>
                <div className='quickview-item-button-div'>
                  <a className='btn btn-secondary' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </div>
            </div>
          {/*  */}
          {/*  */}
            <div className='quickview-item'>
                <img className='quickview-item-img' src={inflatable} alt='inflatable balloon'/>
                <div className='quickview-item-name' >
                    <span>Inflatable Balloon</span>
                </div>
                <div className='quickview-item-description' >
                    <span>Customize Inflatable Balloon</span>
                </div>
                <div className='quickview-item-button-div'>
                  <a className='btn btn-secondary' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </div>
            </div>
          {/*  */}
          {/*  */}
            <div className='quickview-item'>
                <img className='quickview-item-img' src={character} alt='character balloon img'/>
                <div className='quickview-item-name' >
                    <span>character Balloon</span>
                </div>
                <div className='quickview-item-description' >
                    <span>Inflatable character Balloon</span>
                </div>
                <div className='quickview-item-button-div'>
                  <a className='btn btn-secondary' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </div>
            </div>
          {/*  */}
          {/*  */}
            <div className='quickview-item'>
                <img className='quickview-item-img' src={latex} alt='latex balloon'/>
                <div className='quickview-item-name' >
                    <span>Latex Balloon</span>
                </div>
                <div className='quickview-item-description' >
                    <span>Latex Balloon</span>
                </div>
                <div className='quickview-item-button-div'>
                  <a className='btn btn-secondary' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </div>
            </div>
          {/*  */}
          {/*  */}
            <div className='quickview-item'>
                <img className='quickview-item-img' src={micky} alt='micky mouse bouncy img'/>
                <div className='quickview-item-name' >
                    <span>Mickey Mouse Bouncy</span>
                </div>
                <div className='quickview-item-description' >
                    <span>Micky Mouse Bouncy</span>
                </div>
                <div className='quickview-item-button-div'>
                  <a className='btn btn-secondary' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </div>
            </div>
          {/*  */}
          {/*  */}
            <div className='quickview-item'>
                <img className='quickview-item-img' src={sky} alt='sky advertising balloon'/>
                <div className='quickview-item-name' >
                    <span>Sky Advertising Balloon</span>
                </div>
                <div className='quickview-item-description' >
                    <span>Sky Advertising Balloon</span>
                </div>
                <div className='quickview-item-button-div'>
                  <a className='btn btn-secondary' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </div>
            </div>
          {/*  */}
          {/*  */}
            <div className='quickview-item'>
                <img className='quickview-item-img' src={trampoline} alt='trampoline'/>
                <div className='quickview-item-name' >
                    <span>Trampoline</span>
                </div>
                <div className='quickview-item-description' >
                    <span>Trampoline for kids</span>
                </div>
                <div className='quickview-item-button-div'>
                  <a className='btn btn-secondary' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </div>
            </div>
          {/*  */}
          
         
        </div>
    </div>
  )
}

export default QuickView