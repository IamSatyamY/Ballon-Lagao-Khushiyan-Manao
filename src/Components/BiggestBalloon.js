import React from 'react';
import biggestballoon from "../assets/biggest_balloon/biggestskyballoon.mp4";
import './BiggestBalloon.css'; // Make sure this file exists

const BiggestBalloon = () => {
  return (
    <div className='biggest-video container' style={{marginTop:"50px",marginBottom:"50px"}}>
      <video className='biggest-video' autoPlay muted loop playsInline >
        <source src={biggestballoon} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='typewriter'>
        <h1>We Made India's Biggest Sky Balloon...</h1>
      </div>
    </div>
  );
};

export default BiggestBalloon;
