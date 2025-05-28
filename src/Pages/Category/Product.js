import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./Common_Category.css"


const Product = () => {

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
        
      </section>
      <hr />
      <section id="party">
        <h2>🎉 Party Items</h2>
        
      </section>
      <hr />
      <section id="foil">
        <h2>⭐ Foil Balloons</h2>
       
      </section>
    </div>
  );
};

export default Product;
