import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./Common_Category.css"
import "./CommonImgContainerForCategoryItemsByContact.css"
import bp1 from "./assets/EventSetup/weding setup/Backdrop Panel/back (1).jpg";
import bp2 from "./assets/EventSetup/weding setup/Backdrop Panel/back (2).jpg";
import bp3 from "./assets/EventSetup/weding setup/Backdrop Panel/back (3).jpg";

import cb1 from "./assets/EventSetup/weding setup/Confetti Blasting/confetti (1).jpeg";
import cb2 from "./assets/EventSetup/weding setup/Confetti Blasting/confetti (2).jpg";
import cb3 from "./assets/EventSetup/weding setup/Confetti Blasting/confetti (3).jpg";

import de1 from "./assets/EventSetup/weding setup/Dashing Entry/de (1).jpg"
import de2 from "./assets/EventSetup/weding setup/Dashing Entry/de (2).jpg"
import de3 from "./assets/EventSetup/weding setup/Dashing Entry/de (3).jpg"

import fs1 from "./assets/EventSetup/weding setup/shower flower/fs (1).jpg"
import fs2 from "./assets/EventSetup/weding setup/shower flower/fs (2).jpg"
import fs3 from "./assets/EventSetup/weding setup/shower flower/fs (3).jpg"

import ds1 from "./assets/EventSetup/weding setup/Dry Smoke/dry (1).jpg"
import ds2 from "./assets/EventSetup/weding setup/Dry Smoke/dry (2).jpg"
import ds3 from "./assets/EventSetup/weding setup/Dry Smoke/dry (3).jpg"


import bd1 from "./assets/EventSetup/Balloon Decoration/bdeco (1).jpg";
import bd2 from "./assets/EventSetup/Balloon Decoration/bdeco (2).jpg";
import bd3 from "./assets/EventSetup/Balloon Decoration/bdeco (3).jpg"


import gl1 from "./assets/EventSetup/Garland setup/garland (1).jpg";
import gl2 from "./assets/EventSetup/Garland setup/garland (2).jpg";
import gl3 from "./assets/EventSetup/Garland setup/garland (3).jpg";


import hl1 from "./assets/EventSetup/Helium Balloons/helium (1).jpg";
import hl2 from "./assets/EventSetup//Helium Balloons/helium (8).jpg";
import hl3 from "./assets/EventSetup//Helium Balloons/helium (10).jpg";

import agm1 from "./assets/EventSetup/corporatesetup/Annual general meeting/agm (1).jpg"
import agm2 from "./assets/EventSetup/corporatesetup/Annual general meeting/agm (2).jpg"
import agm3 from "./assets/EventSetup/corporatesetup/Annual general meeting/agm (3).jpg"

import empevent1 from "./assets/EventSetup/corporatesetup/employee event/empevent (1).jpg"
import empevent2 from "./assets/EventSetup/corporatesetup/employee event/empevent (2).jpg"
import empevent3 from "./assets/EventSetup/corporatesetup/employee event/empevent (3).jpg"

import prodwork1 from "./assets/EventSetup/corporatesetup/productivity workshops/pw (1).jpg"
import prodwork2 from "./assets/EventSetup/corporatesetup/productivity workshops/pw (2).jpg"
import prodwork3 from "./assets/EventSetup/corporatesetup/productivity workshops/pw (3).jpg"

import grand1 from "./assets/EventSetup/corporatesetup/Grand Openings/go (1).jpg"
import grand2 from "./assets/EventSetup/corporatesetup/Grand Openings/go (2).jpg"
import grand3 from "./assets/EventSetup/corporatesetup/Grand Openings/go (3).jpg"

import pl1 from "./assets/EventSetup/corporatesetup/product launch/pl (1).jpg"
import pl2 from "./assets/EventSetup/corporatesetup/product launch/pl (2).jpg"
import pl3 from "./assets/EventSetup/corporatesetup/product launch/pl (3).jpg"

import od1 from "./assets/EventSetup/corporatesetup/office decoration/od (1).jpg"
import od2 from "./assets/EventSetup/corporatesetup/office decoration/od (4).jpg"
import od3 from "./assets/EventSetup/corporatesetup/office decoration/od (3).jpg"

const EventSetup = () => {
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
    <div className='category-common-div'  style={{ padding: "30px"}}>
   
      
      <br/>
      <h1>Event Setup</h1>
      <section id="balloon_decoration">
        <h2>Balloon Decoration</h2>
        <p><b>"Transforming Spaces with Stunning Balloon Artistry."</b></p>
       <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={bd1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={bd2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={bd3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr />
      <section id="helium_balloon">
        <h2>Helium Balloon</h2>
        <p><b>"Up, Up, and Away—Add Airy Magic to Your Event!"</b></p>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={hl1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={hl2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={hl3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
       
      </section>
      <hr />
      <section id="garland_balloon_decoration">
        <h2>Garland Balloon Decoration</h2>
        <p><b>"Colorful Garland Designs That Wow Every Guest!"</b></p>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={gl1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={gl2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={gl3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
       
      </section>
      <hr/>
      <section id="backdrop_panels">
        <h2>Backdrop Panels</h2>
        <p><b>"Create Picture-Perfect Moments with Stunning Backdrop Panels!"</b></p>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={bp1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={bp2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={bp3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="dashing_entry">
        <h2>Dashing Entry</h2>
        <p><b>"Create Unforgettable First Impressions with a Dashing Entry!"</b></p>
       <div className='CommonImgContainerForCategoryItemsByContact'>
            <div className='img-div'>
                <img src={de1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={de2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={de3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            
        </div>
      </section>
      <hr/>
      <section id="shower_flower">
        <h2>Shower Flower</h2>
        <p><b>"Let the Flowers Rain Down — A Shower of Beauty and Joy!"</b></p>
       <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={fs1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={fs2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={fs3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="dry_smoke">
        <h2>Dry Smoke</h2>
        <p><b>"Make your grand moments magical with swirling clouds of dramatic dry smoke effects."</b></p>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={ds1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ds2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ds3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="confetti_blasting">
        <h2>Confetti Blasting</h2>
        <p><b>"Blast the Celebration to Life with Colorful Confetti!"</b></p>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={cb1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={cb2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={cb3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="Annual_General_Meeting">
        <h2>Annual General Meeting</h2>
        <p><b>"Where Strategy Meets Celebration — Annual General Meeting with Impact."</b></p>
         <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={agm1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={agm2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={agm3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="Employee_Events">
        <h2>Employee Events</h2>
        <p><b>"Where Work Meets Play — Employee Events That Inspire."</b></p>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={empevent1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={empevent2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={empevent3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="Productivity_Workshops">
        <h2>Productivity Workshops</h2>
        <p><b>"Boost productivity and celebrate success with expert workshops and vibrant event balloon setups."</b></p>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={prodwork1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={prodwork2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={prodwork3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="Grand_Openings">
        <h2>Grand Openings</h2>
        <p><b>Foil balloons for birthdays, anniversaries, and special events.</b></p>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={grand1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={empevent2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={empevent3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="Product_Launch">
        <h2>Product Launch</h2>
        <p><b>"Make your grand opening unforgettable with dazzling balloon decorations that captivate every guest."</b></p>
       <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={pl1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={pl2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={pl3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="Office_Decoration">
        <h2>Office Decoration</h2>
        <p><b>"Transform your office space into a vibrant and inspiring environment with elegant balloon decorations."</b></p>
       <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={od1} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={od2} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={od3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      
    </div>
)
}

export default EventSetup