import React, { useEffect, useState } from 'react'
import "./Admin.css"
import axios from 'axios'
import { Link, Outlet } from 'react-router'

const Admin = () => {

//     const [data, setData] = useState("");

//     useEffect(() => {
//     axios.get("http://localhost:8080/admin/index")
//       .then(response => setData(response.data))
//       .catch(error => console.error("Error:", error));
//   }, []);

  return (
    <div>
        {/* {data} */}
        <div className="container admin-component">
            <div className="row text-center border border-2 rounded-3 mt-5">
                <div >
                    <h2>Admin</h2>
                    <div className='text-center dflex justify-content-center align-items-center'>
                        <Link to="addproduct"><p className='btn btn-primary mx-2'>Add Product</p></Link>
                        <Link to="category"><p className='btn btn-primary mx-2'>Add Category</p></Link>
                        <Link to="viewproduct"><p className='btn btn-primary mx-2'>View Product</p></Link>
                        <Link to="orders"><p className='btn btn-primary mx-2'>Orders</p></Link>
                        <Link to="user"><p className='btn btn-primary mx-2'>Users</p></Link>
                        <Link to="addadmin"><p className='btn btn-primary mx-2'>Add Admin</p></Link>
                    </div>
                </div>
            </div>
        </div>
                        <Outlet/>
    </div>
  )
}

export default Admin