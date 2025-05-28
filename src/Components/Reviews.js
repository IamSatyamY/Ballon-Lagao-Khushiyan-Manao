import React, { useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import "./Reviews.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Reviews = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const openDropdown = document.querySelector('.dropdown-menu.show');
    if (!openDropdown) {
      const nextBtn = document.querySelector('.cc1');
      if (nextBtn) {
        nextBtn.click();
      }
    }
    }, 3000); // Slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className='reviews mt-4'>
      <h1 className='text-center'>Our Happy Customers</h1>

      <div
        id="carouselExampleAutoplaying1"
        className="carousel slide"
        data-bs-ride="false" // Turn off Bootstrap's auto-play
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='name'>Sushila Vishwakarma</div>
            <div className='rating'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <div className='text'>Balloon Lagao made our child's birthday magical! The theme was perfectly executed with vibrant balloons and fun pops. Amazing work.</div>
          </div>
          <div className="carousel-item">
            <div className='name'>Himanshu Vishwakarma</div>
            <div className='rating'><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <div className='text'>We hired Balloon Lagao for a small office celebration, and they brought great energy with their professional and classy balloon decorations. The branding and color coordination were spot-on.</div>
          </div>
          <div className="carousel-item">
            <div className='name'>Satish Yadav</div>
            <div className='rating'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <div className='text'>Very satisfied with the birthday decor. Creative designs and quality balloons. Everything was hassle-free.</div>
          </div>
          <div className="carousel-item">
            <div className='name'>Rina Salve</div>
            <div className='rating'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <div className='text'>Satisfied with product.</div>
          </div>
          <div className="carousel-item">
            <div className='name'>Shravan Mhatre</div>
            <div className='rating'><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <div className='text'>Product delivery on time.</div>
          </div>
          <div className="carousel-item">
            <div className='name'>Rishabh Sharma</div>
            <div className='rating'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <div className='text'>Nice service with on-time delivery.</div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next cc1" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="next">
          <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
