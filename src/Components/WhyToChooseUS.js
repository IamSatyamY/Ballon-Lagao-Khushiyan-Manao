import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaRegCheckCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MdLabelImportantOutline } from "react-icons/md";
import "./WhyToChooseUS.css";

const WhyToChooseUS = () => {
  return (
    <div className='whytochooseus'>
        
        <h1 style={{marginBottom:"-20px"}}>Why To Choose US</h1>
        <div className='whytochooseus-options'>
            <div className='option'>
                <TbTruckDelivery  className='icons'/>
                <p>24 X 7- DELIVERY</p>
            </div>
            <div className='option'>
                <FaRegCheckCircle  className='icons'/>
                <p>PURE- HELIUM</p>
            </div>
            <div className='option'>
                <FaUserPlus  className='icons'/>
                <p>EXPERT TECHNICIANS</p>
            </div>
            <div className='option'>
                <BiWorld  className='icons'/>
                <p>PAN INDIA</p>
            </div>
            <div className='option'>
                <MdLabelImportantOutline className='icons'/>
                <p>HIGH QUALITY PRODUCTS</p>
            </div>
        </div>
    </div>
  )
}

export default WhyToChooseUS