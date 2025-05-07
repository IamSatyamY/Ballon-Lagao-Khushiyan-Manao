import React from 'react'
import s1 from '../assets/homepagesliders/s1.jpeg';
import s2 from '../assets/homepagesliders/s2.jpeg';
import s3 from '../assets/homepagesliders/s3.jpeg';
import s4 from '../assets/homepagesliders/s4.jpeg'
import './Sliders.css';
function Sliders() {
  return (
    <>
        <div id="carouselExampleAutoplaying" className="carousel slide sliders-img-containe" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={s1} className="d-block w-100" alt="..."/>
                </div>

                <div className="carousel-item">
                    <img src={s2} className="d-block w-100" alt="..."/>
                </div>

                <div className="carousel-item">
                    <img src={s3} className="d-block w-100" alt="..."/>
                </div>

                <div className="carousel-item">
                    <img src={s4} className="d-block w-100" alt="..."/>
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