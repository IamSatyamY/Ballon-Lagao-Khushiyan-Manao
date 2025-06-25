import React, { useEffect } from 'react'
import s1   from '../assets/homepagesliders/slider (1).png';
import s2   from '../assets/homepagesliders/slider (2).png';
import s3   from '../assets/homepagesliders/slider (3).png';
// import s2   from '../assets/homepagesliders/slider (6).png'
// import s6   from '../assets/homepagesliders/slider (8).png'
// import s3   from '../assets/homepagesliders/slider (3).jpg';
// import s4   from '../assets/homepagesliders/slider (4).jpg';
// import s5   from '../assets/homepagesliders/slider (5).jpg';


import './Sliders.css';
function Sliders() {
    
   useEffect(() => {
  const interval = setInterval(() => {
    const openDropdown = document.querySelector('.dropdown-menu.show');
    if (!openDropdown) {
      const nextBtn = document.querySelector('.carousel-control-next');
      if (nextBtn) {
        nextBtn.click();
      }
    }
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className='homeslider'>
        <div id="carouselExampleAutoplaying" className="carousel slide sliders-img-containe" data-bs-ride="carousel" >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={s1} className="d-block " alt="slider image"   />
                </div>

                {/* <div className="carousel-item">
                    <img src={s2} className="d-block " alt="slider image"   />
                </div> */}
                <div className="carousel-item ">
                    <img src={s2} className="d-block " alt="slider image"   />
                </div>
                <div className="carousel-item ">
                    <img src={s3} className="d-block " alt="slider image"   />
                </div>

                

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Sliders