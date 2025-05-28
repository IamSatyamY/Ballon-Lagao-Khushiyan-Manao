import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./Common_Category.css"

import ad1 from "./assets/air inflatable balloon/air dancer (1).jpeg"
import ad2 from "./assets/air inflatable balloon/air dancer (2).jpeg"
import ad3 from "./assets/air inflatable balloon/air dancer (3).jpeg"

import ci1 from "./assets/air inflatable balloon/customized inflatabale(1).jpg"
import ci2 from "./assets/air inflatable balloon/customized inflatabale(2).png"

import ch1 from "./assets/air inflatable balloon/inflatabale character (1).jpeg"
import ch2 from "./assets/air inflatable balloon/inflatabale character (3).jpeg"
import ch3 from "./assets/air inflatable balloon/inflatabale character (4).jpeg"

const AirInfllatable = () => {
 const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 500); // timeout ensures it works after render
      }
    }
  }, [location]);

  return (
    <div className='category-common-div'  style={{ padding: "30px" }}>
   
      
      <br/>
      <h1>Air Inflatable Balloon</h1>
      <section id="air_dancer">
        <h2>Air Dancer</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={ad1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ad2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ad3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr />
      <section id="customize_inflatable">
        <h2>Customize Inflatable</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={ci1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ci2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr />
      <section id="characters">
        <h2>Characters</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={ch1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ch2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ch3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      
    </div>
  );
};



export default AirInfllatable