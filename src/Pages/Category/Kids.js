import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./Common_Category.css"

import jb1 from "./assets/Kids/Jumping Bouncy/kp (1).jpg"
import jb2 from "./assets/Kids/Jumping Bouncy/kp (3).jpg"
import jb3 from "./assets/Kids/Jumping Bouncy/kp (6).jpg"

import tramp1 from "./assets/Kids/Trampoline/tram (1).jpg"
import tramp2 from "./assets/Kids/Trampoline/tram (4).jpg"
import tramp3 from "./assets/Kids/Trampoline/tram (3).jpg"

import tt1 from "./assets/Kids/Toy trains/tt (1).jpg"
import tt2 from "./assets/Kids/Toy trains/tt (2).jpg"
import tt3 from "./assets/Kids/Toy trains/tt (3).jpg"

import isp1 from "./assets/Kids/Inflatable Swimimming pool/isp (3).jpg"
import isp2 from "./assets/Kids/Inflatable Swimimming pool/isp (5).jpg"
import isp3 from "./assets/Kids/Inflatable Swimimming pool/isp (6).jpg"

import ladder1 from "./assets/Kids/ladder slide/ls (1).jpg"
import ladder2 from "./assets/Kids/ladder slide/ls (2).jpg"
import ladder3 from "./assets/Kids/ladder slide/ls (4).jpg"

const Kids = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1000); // timeout ensures it works after render
      }
    }
  }, [location]);


  return (
    <div className='category-common-div'  style={{ padding: "30px" }}>
   
      
      <br/>
      <h1>Kids Play</h1>
      <section id="jumping_bouncy">
        <h2>Jumping Bouncy</h2>
       <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={jb1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={jb2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={jb3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr />
      <section id="trampoline">
        <h2>Trampoline</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={tramp1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={tramp2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            {/* <div className='img-div'>
                <img src={tramp3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div> */}
        </div>
      </section>
      <hr />
      <section id="toy_mini">
        <h2>Toy Mini Train</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={tt1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={tt2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={tt3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="inflatable_swimming">
        <h2>Inflatabale Swimming Pool</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={isp1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={isp2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={isp3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="ladder_slide">
        <h2>Ladder Slide</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={ladder1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ladder2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ladder3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="play_items">
        <h2>Play Items</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={tramp1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={tramp2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            {/* <div className='img-div'>
                <img src={tramp3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div> */}
        </div>
      </section>
      <hr/>
      
    </div>
)
}



export default Kids