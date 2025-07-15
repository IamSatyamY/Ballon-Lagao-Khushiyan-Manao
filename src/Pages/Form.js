
import React, { useState } from 'react';
import "./Form.css";
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    enquiryabout:''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for the field as user types
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validate = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Mobile number must be 10 digits.';
      isValid = false;
    }

    if (!formData.enquiryabout.trim()) {
      newErrors.enquiryabout = 'Enquiry About is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const subject = encodeURIComponent("Enquiry Form");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEnquiry About: ${formData.enquiryabout}`
      );

      window.location.href = `mailto:support@balloonlagao.com?subject=${subject}&body=${body}`;
    }
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

        <div className='name'>
          <input
            type='text'
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter Name'
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className='phone'>
          <div className="phone-input-wrapper">
            <span className="country-code">+91</span>
            <input
              type='number'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Mobile number'
            />
          </div>
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>

        <div className='enquiryabout'>
          <input
            type='text'
            name='enquiryabout'
            value={formData.enquiryabout}
            onChange={handleChange}
            placeholder='Enquiry About'
          />
          {errors.enquiryabout && <p className="error-message">{errors.enquiryabout}</p>}
        </div>

        <div className='submit'>
          <input type='submit' value={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default Form;