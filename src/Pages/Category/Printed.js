import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./Common_Category.css"
import { Helmet } from 'react-helmet';

import inch9_1 from './assets/Printed/9 inch print balloon/9inchPrint (1).jpg'
import inch9_2 from './assets/Printed/9 inch print balloon/9inchPrint (2).jpg'
import inch9_3 from './assets/Printed/9 inch print balloon/9inchPrint (3).jpg'
import inch9_4 from './assets/Printed/9 inch print balloon/9inchPrint (4).jpg'

import inch12_1 from './assets/Printed/12 inch print balloon/12inchPrint (1).jpg'
import inch12_2 from './assets/Printed/12 inch print balloon/12inchPrint (2).jpg'
import inch12_3 from './assets/Printed/12 inch print balloon/12inchPrint (3).jpg'
import inch12_4 from './assets/Printed/12 inch print balloon/12inchPrint (4).jpg'

import crom1 from './assets/Printed/Crom Printed Balloons/cromPrint (1).jpg'
import crom2 from './assets/Printed/Crom Printed Balloons/cromPrint (2).jpg'
import crom3 from './assets/Printed/Crom Printed Balloons/cromPrint (3).jpg'
import crom4 from './assets/Printed/Crom Printed Balloons/cromPrint (4).jpg'

import metalic1 from './assets/Printed/Metalic Printed Balloon/metallicPrint (1).png'
import metalic2 from './assets/Printed/Metalic Printed Balloon/metallicPrint (2).png'
import metalic3 from './assets/Printed/Metalic Printed Balloon/metallicPrint (3).png'
import metalic4 from './assets/Printed/Metalic Printed Balloon/metallicPrint (4).png'

import inch36_1 from './assets/Printed/36 Inch printed balloon/36inch (1).jpeg'
import inch36_2 from './assets/Printed/36 Inch printed balloon/36inch (1).jpg'
import inch36_3 from './assets/Printed/36 Inch printed balloon/36inch (1).png'
import inch36_4 from './assets/Printed/36 Inch printed balloon/36inch (2).png'

const Printed = () => {
<Helmet>
  <title>printed Balloons|Balloon Lagao</title>
  <meta name='description' content='Personalize your party with vibrant printed balloons featuring names, logos, or custom messages for birthdays, promotions,branding or any occasion.
                                    Add shine to your décor with elegant chrome printed balloons — perfect for luxury events, weddings, and corporate branding.
                                    Get a premium look with custom metallic printed balloons — reflective, colorful, and perfect for high-impact displays.pan india available'></meta>
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
    <div className='category-common-div'  style={{ padding: "30px" }}>
   
      
      <br/>
      <h1>Printed Balloon</h1>
      <section id="9_inch_print">
        <h2>9 inch print balloon</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={ inch9_1}  alt='9 inch print balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={inch9_2} alt='9 inch print balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={inch9_3} alt='9 inch print balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={inch9_4} alt='9 inch print balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
        {/* Render 9 inch print balloon */}
      </section>
      <hr />
      <section id="12_inch_print">
        <h2>12 inch print balloon</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={inch12_1}  alt='12 inch print balloon' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={inch12_2} alt='12 inch print balloon' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={inch12_3} alt='12 inch print balloon' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={inch12_4} alt='12 inch print balloon' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
       
      </section>
      <hr />
      <section id="crom_print">
        <h2>Crom print Balloon</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={crom1}  alt='crom printed balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={crom2} alt='kids jumping bouncy' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={crom3} alt='kids jumping bouncy' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={crom4} alt='kids jumping bouncy' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
       
      </section>
    <hr/>
      <section id="metalic_print">
        <h2>Metallic print Balloon</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={metalic1}  alt='metalic balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={metalic2} alt='metalic balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={metalic3} alt='metalic balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={metalic4} alt='metalic balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
    <hr/>
      <section id="36_inch_print">
        <h2>36 inch Print Balloon</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={inch36_1}  alt='metalic balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={inch36_2} alt='metalic balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={inch36_3} alt='metalic balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={inch36_4} alt='metalic balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
      </section>
    <hr/>
    </div>
  );
};

export default Printed