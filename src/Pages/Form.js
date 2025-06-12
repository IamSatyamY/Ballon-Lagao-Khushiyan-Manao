
import React, { useState } from 'react';
import "./Form.css";
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    enquiryabout:'',
    // location: '',
    // projectType: '' // New field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Enquiry Form");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}
      \nEnquiry About: ${formData.enquiryabout}
      `
    );

    window.location.href = `mailto:support@balloonlagao.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className='Form'>
      <form onSubmit={handleSubmit}>
        <div style={{textAlign:"right"}}>
          <Link to="/">
            <RxCross2 style={{fontSize:"25px", color:"black"}}/>
          </Link>

        </div>
        <h1>Get Details</h1>

        {/* <div className="form-group">
          <label>Project Type :</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="projectType" value="Residential" id="radioResidential" onChange={handleChange} required />
            <label className="form-check-label" htmlFor="radioResidential">
              Residential
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="projectType" value="Commercial" id="radioCommercial" onChange={handleChange} required/>
            <label className="form-check-label" htmlFor="radioCommercial">
              Commercial
            </label>
          </div>
        </div> */}

        {/* <select className="form-select form-select-sm" name="location" onChange={handleChange} required >
          <option value="">Property Location</option>
          <option value="Banglore">Banglore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Navi Mumbai">Navi Mumbai</option>
          <option value="Thane">Thane</option>
          <option value="Mysore">Mysore</option>
          <option value="Pune">Pune</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Vizag">Vizag</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Gandhinagar">Gandhinagar</option>
          <option value="Anand Nagar">Anand Nagar</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Gurugram">Gurugram</option>
          <option value="Noida">Noida</option>
          <option value="Others">Others</option>
        </select> */}

        <div className='name'>
          <input
            type='text'
            name="name"
            onChange={handleChange}
            required
            placeholder='Enter Name'
          />
        </div>

        <div className='phone'>
          <input
            type='number'
            name='phone'
            onChange={handleChange}
            required
            placeholder='Mobile number'
          />
        </div>

        <div className='enquiryabout'>
          <input
            type='text'
            name='enquiryabout'
            onChange={handleChange}
            required
            placeholder='Enquiry About'
          />
        </div>

        <div className='submit'>
          <input type='submit' value={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default Form;