import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='main-footer'>
        <div class="row">
            <div class="col">
                <img src="https://balloonlagao.com/static/media/logo.def0279e25a0dde3f061.jpeg"  class="balloon lagao logo" alt="ballloon lagao logo"/>
                <p class="about-ballonlagao">From room surprises to grand event setups, we bring creativity, elegance, and joy to every occasion.
                Whether you are planning a dreamy birthday, a corporate event, or a festive launch, our team transforms your vision into reality with meticulous attention to detail.​</p>
            </div>
            <div class="col">
                <h3>Office  
                  <div class="underline">
                    <span></span>
                  </div>
                </h3>
                      <p className='address'>Plot No. R-488,
                                            Sector 8, MIDC
                                            Industrial Area,
                                            Rabale,Navi Mumbai - 400701,
                                            Maharashtra, India</p>            
                <p class="email">support@balloonlagao.com</p>
                <h4 class="phonno">+91-7666325325</h4>
            </div>
            <div class="col">
                <h3>Links 
                  <div class="underline">
                    <span></span>
                  </div>
                </h3>
                <ul>
                    <li><Link  to="/">Home</Link></li>
                    <li> <Link  to="/about">About Us</Link></li>                  
                    <li><Link  to="/product">Products</Link></li>
                    <li><Link  to="/printed">Printed Balloon</Link></li>
                    <li><Link  to="/promotionalsky">Promotional Sky Balloon</Link></li>
                    <li><Link  to="/airinflatable">Air Inflatable Balloon</Link></li>
                    
                </ul>
            </div>
            <div class="col">
                <h3>Other Links 
                  <div class="underline">
                    <span></span> 
                  </div>
                </h3>
                <ul>
                    <li><Link  to="/inflatabletent">Inflatable Tent</Link></li>
                    <li><Link  to="/kids">Kids</Link></li>
                    <li><Link  to="/eventsetup">Event Setup</Link></li>


                  
                </ul>
                <h3>Follow Us On :
                  <div class="underline">
                    <span></span>
                  </div>
                </h3>
                <div class=" social-media" style={{marginTop:"-20px"}}>
                    <a href='https://www.instagram.com/balloonlagao/'><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://www.facebook.com/balloonlagao" target="_blank" rel="noopener noreferrer'><i class="fa-brands fa-facebook"></i></a>
                    <a href='http://www.youtube.com/@balloonlagao4996'><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-whatsapp"></i> </a>
                </div>
            </div>
        </div>
        
         {/* <div class="all-contact">
            <img src="https://balloonlagao.com/static/media/logo.def0279e25a0dde3f061.jpeg" alt=""/>
           
                <i class="fa-solid fa-phone"> +91-7666325325</i>
                <i class="fa-solid fa-envelope"> support@balloonlagao.com</i>
          
           <div class="social-media">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-whatsapp"></i>
           </div>
        </div>  */}
        <hr/>
        {/* <p class="copyright">Lorem ipsum dolor sit amet consectetur adipisicing elit</p> */}
      <p className='copyright'>Copyright &copy; BalloonLagao 2025 | All Right Reserved | <Link style={{color:'white'}} to="/tandc">Terms and Conditions Apply</Link></p>
    </footer>
      
    </>
  )
}

export default Footer