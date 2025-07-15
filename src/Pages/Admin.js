import React, { useEffect, useState } from 'react'
import "./Admin.css"
import axios from 'axios'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { BiCategory } from 'react-icons/bi'
import { TiPlusOutline } from 'react-icons/ti'
import { FaRegEye } from 'react-icons/fa'
import { IoBagCheckOutline } from 'react-icons/io5'
import { LuUsers } from 'react-icons/lu'
import { RiAdminLine } from 'react-icons/ri'

const Admin = () => {
  const location = useLocation();

  return (
    <div className='admin'>
        <div className="container admin-component">
            <div className='admin-name-buttons'>
                    <h2>Admin</h2>
                    <div className='admin-buttons'>
                        {/* <Link to="category" onClick={() => window.scrollTo(0, 0)}><BiCategory /><p className=' '>Add Category </p></Link> */}
                        <Link to="addproduct" onClick={() => window.scrollTo(0, 0)}><TiPlusOutline /><p className=' '> Add Product</p></Link>
                        <Link to="viewproduct" onClick={() => window.scrollTo(0, 0)}><FaRegEye /><p className=' '>View Product</p></Link>
                        <Link to="orders" onClick={() => window.scrollTo(0, 0)}><IoBagCheckOutline /><p className=' '>Orders</p></Link>
                        <Link to="user" onClick={() => window.scrollTo(0, 0)}><LuUsers /><p className=' '>Users</p></Link>
                        <Link to="addadmin" onClick={() => window.scrollTo(0, 0)}><RiAdminLine /><p className=' '>Add Admin</p></Link>
                    </div>
                </div>
            </div>
            <div className="admin-main-content">
                {location.pathname === '/admin' ? (
                    <h1 className="admin-panel-text">Admin Panel</h1>
                ) : (
                    <Outlet />
                )}
            </div>
    </div>
  )
}

export default Admin