import React, { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    nameError: '',
    emailError: '',
    phoneError: '',
    formError: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  const validate = () => {
    let nameError = '';
    let emailError = '';
    let phoneError = '';
    let formError = '';

    if (!state.name) {
      nameError = 'This field is required';
    }

    if (!state.email) {
      emailError = 'This field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email)) {
      emailError = 'Email is not valid';
    }

    if (!state.phone) {
      phoneError = 'This field is required';
    }

    if (nameError || emailError || phoneError) {
      setState({ ...state, nameError, emailError, phoneError });
      return false;
    }

    return true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      setState({
        name: '',
        email: '',
        phone: '',
        nameError: '',
        emailError: '',
        phoneError: '',
        formError: 'Welcome!'
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={state.name} onChange={handleChange} />
        <div style={{ color: 'red' }}>{state.nameError}</div>
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" value={state.email} onChange={handleChange} />
        <div style={{ color: 'red' }}>{state.emailError}</div>
      </label>
      <br />
      <label>
        Phone:
        <input type="text" name="phone" value={state.phone} onChange={handleChange} />
        <div style={{ color: 'red' }}>{state.phoneError}</div>
      </label>
      <br />
      <button type="submit">Submit</button>
      <div style={{ color: 'green' }}>{state.formError}</div>
    </form>
  );
}

export default Form;
