import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      nameError: '',
      emailError: '',
      phoneError: '',
      formError: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  validate = () => {
    let nameError = '';
    let emailError = '';
    let phoneError = '';
    let formError = '';

    if (!this.state.name) {
      nameError = 'This field is required';
    }

    if (!this.state.email) {
      emailError = 'This field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      emailError = 'Email is not valid';
    }

    if (!this.state.phone) {
      phoneError = 'This field is required';
    }

    if (nameError || emailError || phoneError) {
      this.setState({ nameError, emailError, phoneError });
      return false;
    }

    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({
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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <div style={{ color: 'red' }}>{this.state.nameError}</div>
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          <div style={{ color: 'red' }}>{this.state.emailError}</div>
        </label>
        <br />
        <label>
          Phone:
          <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
          <div style={{ color: 'red' }}>{this.state.phoneError}</div>
        </label>
        <br />
        <button type="submit">Submit</button>
        <div style={{ color: 'green' }}>{this.state.formError}</div>
      </form>
    );
  }
}

export default Form
