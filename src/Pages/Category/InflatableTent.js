import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./Common_Category.css"
import ct1 from './assets/InflatableTents/camping tent (1).jpeg'
import ct2 from './assets/InflatableTents/camping tent (2).jpeg'
import ct3 from './assets/InflatableTents/camping tent (3).jpeg'


import ot1 from './assets/InflatableTents/disaster.jpg'
import ot2 from './assets/InflatableTents/hospitality.jpg'
import ot3 from './assets/InflatableTents/other (1).jpeg'
import ot4 from './assets/InflatableTents/other (2).jpeg'

const InflatableTent = () => {
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
      <h1>Inflatable Tent</h1>
      <section id="campaign_tent">
        <h2>Campaingn Tents</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={ct1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ct2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ct3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>


      </section>
      <hr />
      <section id="other_tent">
        <h2>Other Tents</h2>
       <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={ot1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ot2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ot3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>

      
      
    </div>
)
}

export default InflatableTent