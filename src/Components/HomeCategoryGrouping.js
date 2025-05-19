import React from 'react'
import "./HomeCategoryGrouping.css"
import kids from "../assets/homeGrouping/kidsballoon.png";
import babyshower from "../assets/homeGrouping/babyshower.jpg";
import birthday from "../assets/homeGrouping/birthday.jpg";
import wedding from "../assets/homeGrouping/weddingballoons.png"
import skyballoon from "../assets/homeGrouping/skyballoon.jpeg"
import printedballoon from "../assets/homeGrouping/printedballoon.jpg"


const HomeCategoryGrouping = () => {
  return (
    <div className='category'>
        {/* <h1 className='text-center bg-secodary'>Choose From Categories</h1> */}
        {/* <div className='container'> */}
            <div className='container category-items'>
                
                {/* item */}
                <div className='item'>
                    <h2 className='text-center'>Kids</h2>
                    <img src={kids}/>
                </div>
                {/* item */}
                {/* item */}
                <div className='item'>
                    <h2 className='text-center'>Baby Shower</h2>
                    <img src={babyshower}/>
                </div>
                {/* item para*/}
                {/* item */}
                <div className='item'>
                    <h2 className='text-center'>Sky balloon</h2>
                    <img src={skyballoon} style={{width:"100%",backgroundColor:"blue",borderRadius:"50px"}}/>
                </div>
                {/* item para*/}
                <div className='item-para'>
                    <h2 className='text-center'>celebrate your day with our special designed balloons</h2>
                    
                </div>
                {/* item para*/}
                {/* item */}
                <div className='item'>
                    <h2 className='text-center'>Birthday</h2>
                    <img src={birthday}/>
                </div>
                {/* item */}
                {/* item */}
                <div className='item'>
                    <h2 className='text-center'>Wedding</h2>
                    <img src={wedding}/>
                </div>
                {/* item */}
                {/* item */}
                <div className='item' >
                    <h2 className='text-center'>Printed Balloon</h2>
                    <img src={printedballoon}  style={{height:"90%"}}/>
                </div>
                {/* item */}
            </div>
        {/* </div> */}
    </div>
  )
}

export default HomeCategoryGrouping