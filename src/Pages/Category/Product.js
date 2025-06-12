import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./Common_Category.css"
import { Helmet } from 'react-helmet';

import foil1 from './assets/Products/Foil Balloon/foil (3).jpg'
import foil2 from './assets/Products/Foil Balloon/foil (2).jpg'
import foil3 from './assets/Products/Foil Balloon/foil (4).jpg'
import foil4 from './assets/Products/Foil Balloon/foil (1).jpg'

import latex1 from './assets/Products/latex Balloon/latex (2).jpg'
import latex2 from './assets/Products/latex Balloon/latex (3).jpg'
import latex3 from './assets/Products/latex Balloon/latex (4).jpg'
import latex4 from './assets/Products/latex Balloon/latex (5).jpg'

import party1 from './assets/Products/Party Item/party item (1).jpeg'
import party2 from './assets/Products/Party Item/party item (10).jpg'
import party3 from './assets/Products/Party Item/party item (16).jpg'
import party4 from './assets/Products/Party Item/party item (18).jpg'

const Product = () => {
<Helmet>
  <title>Products, latex ,party ,foil balloons  | Balloon Lagao</title>
  <meta name='description' content='Discover high-quality latex balloons perfect for birthdays, parties, and events. Available in vibrant colors, custom prints, and eco-friendly options. Shop now for bulk discounts and fast delivery! 
  Shop the best party items for birthdays, weddings, baby showers, and more! Find decorations, balloons, lights, banners, props, themed decor & fun accessories for kids, adults and return gifts—all at great prices Order online today. 
  Discover premium foil balloons in stunning shapes, colors & themes. Perfect for birthdays, anniversaries & corporate event decorations. Shop now!'></meta>
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
      <h1>Our Products</h1>
      <section id="latex">
        <h2>🎈 Latex Balloons</h2>
         <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={latex1}  alt='latex balloon' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={latex2} alt='latex balloon' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={latex3} alt='latex balloon' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={latex4} alt='latex balloon' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
        
      </section>
      <hr />
      <section id="party">
        <h2>🎉 Party Items</h2>
        <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={party1}  alt='party items img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={party2} alt='party items img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={party3} alt='party items img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={party4} alt='party items img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
        
        
      </section>
      <hr />
      <section id="foil">
        <h2>⭐ Foil Balloons</h2>
         <div className='CommonImgContainerForCategoryItemsByContact' >
            <div className='img-div'>
                <img src={foil1}  alt='foil balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={foil2} alt='foil balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={foil3} alt='foil balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
            <div className='img-div'>
                <img src={foil4} alt='foil balloon img' />
                <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
            </div>
        </div>
       
      </section>
    </div>
  );
};

export default Product;
