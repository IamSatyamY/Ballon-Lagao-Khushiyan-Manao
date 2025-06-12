import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./Common_Category.css"
import sky1 from './assets/Sky Balloon/skyballon round/sky (1).jpg'
import sky2 from './assets/Sky Balloon/skyballon round/sky (2).jpg'
import sky3 from './assets/Sky Balloon/skyballon round/sky (3).jpg'
import sky4 from './assets/Sky Balloon/skyballon round/sky (4).jpg'

import square1 from './assets/Sky Balloon/SquareShape/squareshape.jpg'
import square2 from './assets/Sky Balloon/SquareShape/squareshape2.png'
import square3 from './assets/Sky Balloon/SquareShape/squareshape3.png'
import square4 from './assets/Sky Balloon/SquareShape/squareshape5.jpg'

import blimp1 from './assets/Sky Balloon/BlimpShape/blimp.png'
import blimp2 from './assets/Sky Balloon/BlimpShape/blimp2.png'
import blimp3 from './assets/Sky Balloon/BlimpShape/blimp3.png'
import blimp4 from './assets/Sky Balloon/BlimpShape/blimp4.png'

import { Helmet } from 'react-helmet';

const PromotionalSky = () => {
<Helmet>
  <title>Buy Custom Sky Balloons for Advertising in India |  Balloon Lagao </title>
  <meta name='description' content='Order custom sky balloons with your brand’s logo for real estate, 
                                      schools, and event promotions. Fast delivery across India. Get a free quote now!'></meta>
</Helmet>  
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
    <div className='category-common-div' style={{ padding: "30px" }}>
   
      
      <br/>
      <h1>Promotional Sky Balloon</h1>
      <section id="6to14">
        <h2> 6 to 14 feet print balloon</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={sky1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={sky2}  alt='sky balloon'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={sky3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={sky4} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
        
      </section>
      <hr/>
      <section id="square_shape">
        <h2> Square Shape</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={square1}  alt='sky balloon' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={square2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={square3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={square4} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            
        </div>
        
      </section>
      <hr/>
      <section id="blimp_shape">
        <h2> Blimp Shape</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={blimp1}  alt='sky balloon'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={blimp2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={blimp3}  alt='sky balloon'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={blimp4} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
        
      </section>
      <hr/>
    </div>
  );
};



export default PromotionalSky