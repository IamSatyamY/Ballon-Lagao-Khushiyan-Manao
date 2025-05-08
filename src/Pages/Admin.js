import React from 'react'
import  "./Admin.css"
const Admin = () => {
  return (
      <div className='admin-login'>
        <h1>Admin Login</h1>
        <input type='email' name='email'placeholder='Enter your email' required/>
        <input type='password' name='password'placeholder='Enter your Password' required/>
        <input type='submit' className='admin-submit-button'/>
      </div>
  )
}

export default Admin