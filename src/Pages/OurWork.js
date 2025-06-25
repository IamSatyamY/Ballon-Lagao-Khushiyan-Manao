import React from 'react'
import "./OurWork.css"

import skyadvballoon from "../Pages/Category/assets/Sky Balloon/sky (4).jpg"
import ministrycert from "../assets/OurWork/ministry certificate.jpeg"
import trademark from "../assets/OurWork/trademark.jpeg"

// catalogues
import catalogue1 from "../assets/OurWork/catalogue/Bouncy and Trampoline.pdf"
import catalogue2 from "../assets/OurWork/catalogue/Intext Balloon Catalogue (1).pdf"
import catalogue3 from "../assets/OurWork/catalogue/Printed Balloon (3).pdf"
import catalogue4 from "../assets/OurWork/catalogue/Sky Balloon Catalogue (6).pdf"

// images for catalogue
import catalogue1img from "../../src/Pages/Category/assets/Kids/Jumping Bouncy/kp (1).jpg"
import catalogue2img from "../../src/Pages/Category/assets/Kids/Inflatable Swimimming pool/isp (3).jpg"
import catalogue3img from "../../src/Pages/Category/assets/Printed/36 Inch printed balloon/36inch (1).jpeg"
import catalogue4img from "../../src/Pages/Category/assets/Sky Balloon/sky (1).png"

const OurWork = () => {
   
  return (
    <div className="project-section container">
        <div className="project-container">
            <div className="project-image">
                <img src={skyadvballoon} alt="Sky Balloon Advertising in Surat" />
            </div>
            <div className="project-content">
                <h2 className="section-title"  style={{color:"purple"}}>Sky Balloon Advertising – Surat Project</h2>
                <p>
                    We executed a successful sky balloon advertising campaign in Surat,
                    showcasing our expertise in aerial branding. The balloon was designed
                    for <strong>45 days of continuous flight</strong> without any maintenance —
                    proving the durability and quality of our materials.
                </p>
                <p>
                    With <strong>1,000+ sky balloons deployed</strong> across India, this project
                    stands as a testament to our reliable, high-impact advertising solutions
                    that help brands rise above the noise — quite literally.
                </p>
            </div>
        </div>
        <div className="project-container">
            <div className="project-content">
                <h2 className="section-title" style={{color:"brown"}}>Sky Balloon Advertising – Fort, Mumbai</h2>
                <p>
                    We carried out a sky balloon advertising campaign in the historic Fort area of Mumbai, 
                    as part of the nationwide celebration of <strong>"Azadi Ka Amrit Mahotsav"</strong>. 
                    For this initiative, we deployed <strong>two large sky advertising balloons</strong> that soared high, 
                    symbolizing the spirit of freedom and national pride.
                </p>
                <p>
                    This campaign not only attracted public attention but also earned us an official 
                    <strong>certificate of recognition</strong> for our contribution to the event. 
                    Our work once again demonstrated our commitment to impactful, culturally meaningful aerial branding.
                </p>
            </div>
            <div className="project-image youtube-skyballoon">
                <iframe  className='responsive-iframe'
                    src="https://youtube.com/embed/3Er6nUmjuHM?autoplay=1&mute=1&loop=1&playlist=3Er6nUmjuHM" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                    >
                </iframe>
            </div>
        </div>
        <div className='certificate'>
            <div className='ministry-certificate'>
                <img src={ministrycert}/>
            </div>
            <div className='ministry-certificate'>
                <img src={trademark}/>
            </div>
        </div>
        <div className='catalogue-section'>
            <h2>Know more by Our Catolog</h2>
            <div className='catalogue-container'>
                <div className='catalogue' >
                        <img src={catalogue1img} alt="PDF Icon" /><br/><br/>
                        <p><strong>Bouncy and Trampoline</strong></p>
                        <a href={catalogue1} download class="download-btn">Download PDF</a>
                </div>
                <div className='catalogue' >
                        <img src={catalogue2img} alt="PDF Icon" /><br/><br/>
                        <p><strong>Intext Balloon</strong></p>
                        <a href={catalogue2} download class="download-btn">Download PDF</a>
                </div>
                <div className='catalogue' >
                        <img src={catalogue3img} alt="PDF Icon" /><br/><br/>
                        <p><strong>Printed Balloon</strong></p>
                        <a href={catalogue3} download class="download-btn">Download PDF</a>
                </div>
                <div className='catalogue' >
                        <img src={catalogue4img} alt="PDF Icon" /><br/><br/>
                        <p><strong>Sky Balloon</strong></p>
                        <a href={catalogue4} download class="download-btn">Download PDF</a>
                </div>

                
            </div>
            
        </div>
    </div>


  )
}

export default OurWork