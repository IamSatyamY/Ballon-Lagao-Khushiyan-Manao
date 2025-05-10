import React from 'react'
import s1   from '../assets/homepagesliders/luxory (2).jpg';
import s2   from '../assets/homepagesliders/luxory (52).jpg';
import s3   from '../assets/homepagesliders/luxory (60).jpg';
import s4   from '../assets/homepagesliders/luxory (68).jpg'
import s5   from '../assets/homepagesliders/luxory (69).jpg';
import s6   from '../assets/homepagesliders/luxory (79).jpg';
import s7   from '../assets/homepagesliders/luxory (88).jpg';
import s8   from '../assets/homepagesliders/luxory (91).jpg'

import './Sliders.css';
function Sliders() {
  return (
    <>
        <div id="carouselExampleAutoplaying" className="carousel slide sliders-img-containe" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={s1} className="d-block w-100" alt="..."  style={{ objectFit: 'contain', width:"100%",  margin: '0 auto' }}  />
                </div>

                <div className="carousel-item">
                    <img src={s2} className="d-block w-100" alt="..."  style={{ objectFit: 'contain', width:"100%", margin: '0 auto' }} />
                </div>

                <div className="carousel-item">
                    <img src={s3} className="d-block w-100" alt="..."  style={{ objectFit: 'contain', width:"100%", margin: '0 auto' }} />
                </div>

                <div className="carousel-item">
                    <img src={s4} className="d-block w-100" alt="..."  style={{ objectFit: 'contain', width:"100%", margin: '0 auto' }} />
                </div>
                <div className="carousel-item ">
                    <img src={s5} className="d-block w-100" alt="..."  style={{ objectFit: 'contain', width:"100%", margin: '0 auto' }} />
                </div>

                <div className="carousel-item">
                    <img src={s6} className="d-block w-100" alt="..."  style={{ objectFit: 'contain', width:"100%", margin: '0 auto' }} />
                </div>

                <div className="carousel-item">
                    <img src={s7} className="d-block w-100" alt="..."  style={{ objectFit: 'contain', width:"100%", margin: '0 auto' }} />
                </div>

                <div className="carousel-item">
                    <img src={s8} className="d-block w-100" alt="..."  style={{ objectFit: 'contain', width:"100%", margin: '0 auto' }} />
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