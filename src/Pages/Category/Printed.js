import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./Common_Category.css"


const Printed = () => {
  
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
        <p>High-quality latex balloons available in multiple colors and sizes.</p>
        <p>loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        {/* Render 9 inch print balloon */}
      </section>
      <hr />
      <section id="12_inch_print">
        <h2>12 inch print balloon</h2>
       
      </section>
      <hr />
      <section id="crom_print">
        <h2>Crom print Balloon</h2>
       
      </section>
      <section id="metalic_print">
        <h2>Metallic print Balloon</h2>
        
      </section>
    </div>
  );
};

export default Printed