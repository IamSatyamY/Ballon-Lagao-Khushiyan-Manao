import React from 'react'

import "./HotSelling.css"

import Hotselling1 from "../assets/HotSelling/printed.jpg"
import Hotselling2 from "../assets/HotSelling/kp (1).jpg"
import Hotselling3 from "../assets/HotSelling/helium.jpg"
import Hotselling4 from "../assets/HotSelling/sky.jpg"
import HotSelling5 from "../assets/HotSelling/officedeco.jpg"
import HotSelling6 from "../assets/HotSelling/airinflatables.jpeg"
import { Link } from 'react-router-dom'


const HotSelling = () => {
  return (
    <div className='hotselling container'>
        <h1>Hot Selling Products</h1>
        <div className='products'>

            <div className='product'>
                <Link to="/printed#9_inch_print">
                    <div className='image'>
                        <img src={Hotselling1}/>
                    </div>
                    <p>Printed Balloon</p>
                </Link>
            </div>
            {/*  */}
            
            <div className='product'>
                <Link to="/kids#jumping_bouncy">
                <div className='image'>
                    <img src={Hotselling2}/>
                </div>
                <p>Kids</p>
                </Link>
            </div>
            {/*  */}
            
            <div className='product'>
                <Link to="/eventsetup#helium_balloon">
                    <div className='image'>
                        <img src={Hotselling3}/>
                    </div>
                    <p>Helim Balloon</p>
                </Link>
            </div>
            {/*  */}
            
            <div className='product'>
                <Link to="/airinflatable#customize_inflatable">
                    <div className='image'>
                        <img src={Hotselling4}/>
                    </div>
                    <p>Sky Balloon</p>
                </Link>
            </div>
            
            <div className='product'>
                <Link to="/eventsetup#Office_Decoration">
                <div className='image'>
                    <img src={HotSelling5}/>
                </div>
                <p>Corporate Setup</p>
                </Link>
            </div>
            {/*  */}
            {/*  */}
            
            <div className='product'>
                <Link to="airinflatable#air_dancer">
                <div className='image'>
                    <img src={HotSelling6}/>
                </div>
                <p>Air Inflatables</p>
                </Link>
            </div>
            {/*  */}

        </div>
    </div>
  )
}

export default HotSelling