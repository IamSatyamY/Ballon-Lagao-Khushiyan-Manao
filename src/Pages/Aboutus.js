import React from 'react' 
import { FaLinkedin } from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi'
import mdimg from '../assets/md.png'
import headoperation from '../assets/aboutphotos/headmanager.jpg'
import './Aboutus.css'
import manageimg1 from '../assets/aboutphotos/management.jpg'
import manageimg2 from '../assets/aboutphotos/management1.jpg'
import manageimg3 from '../assets/aboutphotos/management3.jpg'
import digitalhead from '../assets/aboutphotos/digitalhead.jpeg'
import digitalhead1 from '../assets/aboutphotos/digital marketing team.jpeg'
import web1 from '../assets/aboutphotos/Web.jpeg'
import { Helmet } from 'react-helmet'
const Aboutus = () => {
  return (<div className='about1'>
    <Helmet>
        <title> About Balloon Lagao Team</title>
        <meta name='description' content='know everything about us ,our team consists of expert technicians 
                                          , our products are delivered on time , most customers are satisfied with products and its delivery 
                                          delivery is available 24 X 7 and all over india  '></meta>
    </Helmet>
         {/* <p className='tophead' >Know Everything... About Us</p> */}
         <h1 className='about-h2'>KNOW EVERYTHING... ABOUT US</h1>
    <div className='aboutus container' >
        <div className='md-info'>
            <img src={mdimg} alt='managing director'></img>
            
                <p className='md-name' style={{fontSize:'20px'}}>
                    Mr.Abrar Ahmed
                </p>
                <p className='md-desgn' style={{color:'white',marginTop:'-5px',letterSpacing:'2px',fontSize:'20px'}}>
                    Managing Director
                </p>
            
             <div className='social'>
                <a className="nav-link mx-3 " href="https://in.linkedin.com/in/abrar-ahmed-2397b232a?trk=public_profile_samename-profile" target="_self" rel="noopener noreferrer">
                    <FaLinkedin  />
                </a>
                <a className="nav-link " href="https://www.instagram.com/abrar_ahmed_ghosi/" target="_self" rel="noopener noreferrer">
                    <FiInstagram />
                </a>
            
             </div>
                     <div className='about-para' style={{textDecoration:'none'}}>
                        <p>    
                            At <span className='balloonbold'>Balloon Lagao</span>, we don’t just decorate events — we create unforgettable experiences. As one of India’s fastest-growing balloon decoration brands, we specialize in transforming ordinary spaces into extraordinary celebrations with our stunning and creative balloon setups.
                        </p>
                        <p>
                            Our team of experienced balloon artists and event stylists brings your vision to life — from themed décor and customized backdrops to elegant balloon arches, garlands, photo booths, and more.
                        </p>

                        <p>
                            With over 20,000 events successfully completed, and a reputation for punctuality, precision, and design excellence, <span className='balloonbold'>Balloon Lagao</span> has become the go-to name for celebrities, corporate clients, and families who want to make their events truly special.
                        </p>
             </div>

        </div>
        <div className='other-emp'>
            <div className='other-emp-info'>
                <img src={headoperation} alt='head operation manager img'></img>
                <p className='other-emp-name' >
                   Mr. Nadim R. Shaikh
                </p>
                <p className='other-emp-desgn' >
                   Head Operation Manager
                </p>

            </div>
            <div className='other-emp-info'>
                <img src={manageimg2}alt='management team img'></img>
                <p className='other-emp-name'>
                 Mr. Usman Mukadam

                </p>
                <p className='other-emp-desgn'>
                    Management Team
                </p>

            </div>
            <div className='other-emp-info'>
                <img src={manageimg1} alt='management team img'></img>
                <p className='other-emp-name'>
                    Mr. Shafi Shaikh

                </p>
                <p className='other-emp-desgn'>
                    Management Team Head
                </p>

            </div>
            <div className='other-emp-info'>
                <img src={manageimg3} alt='management team img'></img>
                <p className='other-emp-name'>
                     Mr. Firoz Khan
                </p>
                <p className='other-emp-desgn'>
                    Operation Manager
                </p>

            </div>
            <div className='other-emp-info'>
                <img src={digitalhead} alt='digital marketing head img'></img>
                <p className='other-emp-name'>
                    Mr. Sandip Shinde
                </p>
                <p className='other-emp-desgn'>
                    Management Team
                </p>

            </div>
            <div className='other-emp-info'>
                <img src={digitalhead1} alt='digital marketing team img'></img>
                <p className='other-emp-name'>
                    Mr. Himanshu Vishwakarma

                </p>
                <p className='other-emp-desgn'>
                    Management Team
                </p>

            </div>
            <div className='other-emp-info'>
                <img src={web1} alt='web development team img'></img>
                <p className='other-emp-name'>
                    Mr. Satyam Yadav
                </p>
                <p className='other-emp-desgn'>
                    Management Team
                </p>

            </div>
        </div>

    </div>
    </div>
  )
}

export default Aboutus