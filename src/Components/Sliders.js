import React from 'react'
import s1   from '../assets/homepagesliders/slidervid (1).mp4';
import s2   from '../assets/homepagesliders/slidervid (2).mp4';
import s3   from '../assets/homepagesliders/slider (3).jpg';
import s4   from '../assets/homepagesliders/slider (4).jpg'
import s5   from '../assets/homepagesliders/slider (5).jpg';
import s6   from '../assets/homepagesliders/slider (6).jpg';
import s7   from '../assets/homepagesliders/slider (7).jpg';
import s8   from '../assets/homepagesliders/slider (5).jpg';

import './Sliders.css';
function Sliders() {
  return (
    <>
        <div id="carouselExampleAutoplaying" className="carousel slide sliders-img-containe"  data-bs-interval="2000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={s3} className="d-block " alt="..."   />
                </div>

                <div className="carousel-item">
                    <img src={s4} className="d-block " alt="..."   />
                </div>
                <div className="carousel-item ">
                    <img src={s5} className="d-block " alt="..."   />
                </div>

                <div className="carousel-item">
                    <img src={s6} className="d-block " alt="..."   />
                </div>

                <div className="carousel-item">
                    <img src={s7} className="d-block " alt="..."   />
                </div>

                

                

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}

export default Sliders