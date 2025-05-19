import React from 'react'
import "./Slidevideos.css" 

const Slidevideos = () => {
  return (
     <div className='slidevideos container'>
            <div id="carouselExampleAutoplaying2" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner ">
                    <div className="carousel-item active " data-bs-interval="12000">
                            <iframe  
                                src="https://youtube.com/embed/hQsYKmeZ7-M?autoplay=1&mute=1&loop=1&playlist=hQsYKmeZ7-M" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen>
                            </iframe>
                    </div>
    
                    <div className="carousel-item " data-bs-interval="22000">
                            <iframe  
                                src="https://youtube.com/embed/1sh_8oY8aOs?autoplay=1&mute=1&loop=1&playlist=1sh_8oY8aOs" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen>
                            </iframe>
                    </div>
    
                    <div className="carousel-item " data-bs-interval="11000">
                            <iframe  
                                src="https://youtube.com/embed/9CkdoaeYsc8?autoplay=1&mute=1&loop=1&playlist=9CkdoaeYsc8" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen>
                            </iframe>
                    </div>
                </div>
    
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            
          
        </div>
  )
}

export default Slidevideos