import React from 'react';
import './OurGallery.css';
import { Link } from 'react-router-dom';

const Ourgallery = () => {
  return (
    <div className='gallery container' id='gallery-link'>
      <h1 className='text-center'>Some videos of our Products</h1>
      <Link to="/contactForm" className="btn btn-warning">Enquiry Form</Link>
      <div className='video'>
        {[
          "NlqYSmPunH0",
          "3Er6nUmjuHM",
          "hQsYKmeZ7-M",
          "XulEPEImnr8",
          "1sh_8oY8aOs",
          "01R90FkfvNY",
          "pjbWprimm5Q",
          "YstznBn5xGg",
          "o5gk78i7yG4",
          "hFx8zKEgzXE",
          "zG4l7GyAQfQ",
          "9CkdoaeYsc8"
        ].map((id, index) => (
          <iframe
            key={index}
            src={`https://youtube.com/embed/${id}?autoplay=0&mute=1&loop=1&playlist=${id}`}
            title={`YouTube video ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Ourgallery;
