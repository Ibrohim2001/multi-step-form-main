import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stepone.css';


const StepOne = () => {
  const navigate = useNavigate();
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    nameError: "",
    emailError: "",
    phoneError: "",
    relocate: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
    // console.log(name, value)
  }

  const checkValid = () => {
   let nameError = "";
   let emailError = "";
   let phoneError = "";
   let relocate = false;

      if(!values.name) {
        nameError = "This field is required";
      } else if(/[0-9]/i.test(values.name)) {
        nameError = "Name should not contain any digits";
      }

      if(!values.email) {
        emailError = "This field is required";
      } else if(!regEx.test(values.email)) {
        emailError = "Please provide a valid email";
      }

      if(!values.phone) {
        phoneError = "This field is required";
      } else if(!/^\+[0-9]/i.test(values.phone)) {
        phoneError = "Phone number should start with + and be only digits";
      }

      if(nameError || emailError || phoneError) {
        setValues({...values, nameError, emailError, phoneError});
        return false;
      }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = checkValid();
    if(isValid) {
      setValues({
        name: "",
        email: "",
        phone: "",
        nameError: "",
        emailError: "",
        phoneError: "",
        relocate: true
      });
      navigate('/step-two');
    }
  }
  return (
    <section className='section'>
      <h1 className="title">Personal Info</h1>
      <p className="subtitle">Please provide your name, email address, and phone number.</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form_group">
          <div className='form_group_top'>
            <label className="label">Name</label>
            <span className="error_msg">{values.nameError}</span>
          </div>
          <input 
            type="text"
            name="name"
            placeholder='Vanessa Mint'
            className={values.nameError ? "input error" : "input"} 
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="form_group">
          <div className='form_group_top'>
            <label className="label">Email Address</label>
            <span className="error_msg">{values.emailError}</span>
          </div>
          <input 
            type="text"
            name="email"
            placeholder='vanessamint@gmail.com'
            className={values.emailError ? "input error" : "input"} 
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form_group">
          <div className='form_group_top'>
            <label className="label">Phone Number</label>
            <span className="error_msg">{values.phoneError}</span>
          </div>
          <input 
            type="text"
            name="phone"
            placeholder='e.g. +1 234 567 890'
            className={values.phoneError ? "input error" : "input"} 
            value={values.phone} 
            onChange={handleChange}
          />
        </div>
        <button 
          className="next_btn btn"
          type="submit"
        >
          Next Step
        </button>
      </form>
    </section>
  )
}

export default StepOne