import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./Common_Category.css"

import jb1 from "./assets/Kids/Jumping Bouncy/kp (1).jpg"
import jb2 from "./assets/Kids/Jumping Bouncy/kp (3).jpg"
import jb3 from "./assets/Kids/Jumping Bouncy/kp (6).jpg"
import jb4 from "./assets/Kids/Jumping Bouncy/kp (2).jpg"

import tramp1 from "./assets/Kids/Trampoline/tram (1).jpg"
import tramp2 from "./assets/Kids/Trampoline/tram (4).jpg"
import tramp3 from "./assets/Kids/Trampoline/tram (3).jpg"
import tramp4 from "./assets/Kids/Trampoline/tram (2).jpeg"

import tt1 from "./assets/Kids/Toy trains/tt (1).jpg"
import tt2 from "./assets/Kids/Toy trains/tt (2).jpg"
import tt3 from "./assets/Kids/Toy trains/tt (3).jpg"
import tt4 from "./assets/Kids/Toy trains/tt (4).jpg"

import isp1 from "./assets/Kids/Inflatable Swimimming pool/isp (3).jpg"
import isp2 from "./assets/Kids/Inflatable Swimimming pool/isp (5).jpg"
import isp3 from "./assets/Kids/Inflatable Swimimming pool/isp (6).jpg"
import isp4 from "./assets/Kids/Inflatable Swimimming pool/isp (8).jpg"

import ladder1 from "./assets/Kids/ladder slide/ls (1).jpg"
import ladder2 from "./assets/Kids/ladder slide/ls (2).jpg"
import ladder3 from "./assets/Kids/ladder slide/ls (4).jpg"
import ladder4 from "./assets/Kids/ladder slide/ls (3).jpeg"
import { Helmet } from 'react-helmet';

const Kids = () => {
  <Helmet>
    <title></title>
    <meta name='description'content='Bring joy to your event with safe, colorful kids jumping bouncy castles! Perfect for birthdays, outdoor parties, family functions, school events & fun-filled celebrations.
                                     Add excitement to your event with safe and sturdy trampolines for kids. Ideal for birthdays, parties,school events & backyard fun!,outdoor fun activities.
                                     Delight kids with our Toy Mini Train rides—safe, colorful, and perfect for birthday parties, malls, and fun events.
                                     Enjoy summer fun with our durable inflatable swimming pools—easy to set up, safe for kids, and perfect for backyards or events.
                                     Add excitement to any event with our safe and colorful ladder slides—perfect for kids parties, schools, and play zones.
                                     Explore top-quality play equipment including slides, trampolines, bouncies, and more—ideal for kids entertainment. AVailable for Delivery across india 
                                    '></meta>
  </Helmet>
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
                <img src={jb1}  alt='kids jumping bouncy' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={jb2} alt='kids jumping bouncy' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={jb3} alt='kids jumping bouncy' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={jb4} alt='kids jumping bouncy' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr />
      <section id="trampoline">
        <h2>Trampoline</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={tramp1} alt='kids trampoline'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div' >
                <img src={tramp2} alt='kids trampoline' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={tramp3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={tramp4} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr />
      <section id="toy_mini">
        <h2>Toy Mini Train</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={tt1} alt='toy mini train' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={tt2} alt='toy mini train' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={tt3}  alt='toy mini train'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={tt4}  alt='toy mini train'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="inflatable_swimming">
        <h2>Inflatabale Swimming Pool</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={isp1} alt='inflatable swimming pool' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={isp2} alt='inflatable swimming pool'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={isp3} alt='imflatable swimming pool'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={isp4} alt='imflatable swimming pool'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="ladder_slide">
        <h2>Ladder Slide</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={ladder1} alt='inflatable ladder slide' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ladder2}  alt='inflatable ladder slide'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ladder3}  alt='inflatable ladder slide'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={ladder4}  alt='inflatable ladder slide'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      <section id="play_items">
        <h2>Play Items</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={tramp1} alt='kids play item'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={tramp2} alt='kids play item'/>
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={tramp3} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={tramp4} />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
      <hr/>
      
    </div>
)
}



export default Kids