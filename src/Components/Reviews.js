import React from 'react'
import { FaStar } from "react-icons/fa";
import "./Reviews.css"
import s1 from "../assets/logo.jpeg"
import s2 from "../assets/giphy.gif"
import 'bootstrap/dist/css/bootstrap.min.css';


const Reviews = () => {
  return (
    <div className='reviews'>
        <h1 className='text-center'>Our Happy Customers</h1>
        {/*  */}
        <div id="carouselExampleAutoplaying1" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-item active ">
                        <div className='name'>Sushila Vishwakarma</div>
                        <div className='rating'>
                            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>
                        <div className='text'>Balloon Lagao made our child's birthday magical! The theme was perfectly executed with vibrant balloons and fun pops. Amazing work.</div>
                </div>

                <div className="carousel-item ">
                        <div className='name'>Himanshu Vishwakarma</div>
                        <div className='rating'>
                            <FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>
                        <div className='text'>We hired Balloon Lagao for a smalll office celebration , and they bought great energy with their professional and  clasy balloon decorations.the branding and color coordibnation were spot-on</div>
                </div>

                <div className="carousel-item ">
                        <div className='name'>Satish Yadav</div>
                        <div className='rating'>
                            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>
                        <div className='text'>Very Satisfied with the birthday decor.Creative designs and quality  balloons. Everything was hassle-free</div>
                </div>

                <div className="carousel-item active ">
                        <div className='name'>Rina Salve</div>
                            <div className='rating'>
                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                            </div>
                        <div className='text'>satisfied with product</div>
                </div>

                <div className="carousel-item ">
                        <div className='name'>Shravan Mhatre</div>
                        <div className='rating'>
                            <FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>
                        <div className='text'> product delivery on time</div>
                </div>

                <div className="carousel-item ">
                        <div className='name'>Rishabh Sharma</div>
                        <div className='rating'>
                            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>
                        <div className='text'>nice service with ontime delivery</div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
      
    </div>
        

    
  )
}

export default Reviews