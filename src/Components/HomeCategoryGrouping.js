import React from 'react'
import wedding from '../assets/homeGrouping/wedding.jpg'
import babyshower from '../assets/homeGrouping/baby shower.webp'
import kids from '../assets/homeGrouping/kids.jpg'
import sky from '../assets/homeGrouping/sky adv balloon.png'
import birthday from '../assets/homeGrouping/birthday.jpg'
import printed from '../assets/homeGrouping/printed.jpg'

import "./HomeCategoryGrouping.css"
import { BsPrinter } from 'react-icons/bs'

const HomeCategoryGrouping = () => {
  return (
    <div className='homegrouping container' id='group-link'>
       
        {/*  */}
        <div className="sky flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={sky} style={{width:""}} alt="sky Balloon img" />
                </div>
                <div className="flip-card-back">
                    <h5>Sky Balloon</h5>
                    {/* <p>Price: ₹6/- (without gas)</p> */}
                </div>
            </div>
        </div>
        <div className="printed flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={printed} style={{width:"px"}} alt="printed balloon img" />
                </div>
                <div className="flip-card-back">
                    <h5>Printed Balloon</h5>
            
            
            
                    {/* <p>Price: ₹6/- (without gas)</p> */}
                </div>
            </div>
        </div>
        <div className="wedding flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={wedding} style={{width:"px"}} alt="wedding decoration" />
                </div>
                <div className="flip-card-back">
                    <h5>Wedding</h5>
                    {/* <p>Price: ₹6/- (without gas)</p> */}
                </div>
            </div>
        </div>
        <div className="birthday flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={birthday} style={{width:"px"}} alt="birthday decoration" />
                </div>
                <div className="flip-card-back">
                    <h5>Birthday</h5>
                    {/* <p>Price: ₹6/- (without gas)</p> */}
                </div>
            </div>
        </div>
        <div className="dabba flip-card" style={{width:"px"}}>
            <div className="">
                <div className="">
                    {/* <img src={latex} style={{width:"200px"}} alt="dabba" /> */}
                </div>
                <div className="">
                    <h5>Celebrate Your Special Day With Our Special Balloons!!!</h5>
                    {/* <p>Price: ₹6/- (without gas)</p> */}
                </div>
            </div>
        </div>
        <div className="kids flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={kids} style={{width:"px"}} alt="kids decoration" />
                </div>
                <div className="flip-card-back">
                    <h5>kids</h5>
                    {/* <p>Price: ₹6/- (without gas)</p> */}
                </div>
            </div>
        </div>
        <div className="babyshower flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={babyshower} style={{width:"px"}} alt="babyshower decoration" />
                </div>
                <div className="flip-card-back">
                    <h5>Baby Shower</h5>
                    {/* <p>Price: ₹6/- (without gas)</p> */}
                </div>
            </div>
        </div>
        

        {/*  */}
        {/* <div className='wedding'></div>
        <div className='skyballoon'></div>
        <div className='dabba'></div>
        <div className='birthday'></div>
        <div className='printedballoon'></div>
        <div className='kids'></div> */}

    </div>
  )
}

export default HomeCategoryGrouping