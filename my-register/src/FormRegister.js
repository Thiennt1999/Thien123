
import React from "react";

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email: "",
      password: "",
      confirmpassword:"",
      telephone:"",
      address:""
    };
  }

  render() {
    const { name,email, password,confirmpassword,telephone,address } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
       <label htmlFor="email">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
         <label htmlFor="email">Confirmpasswort</label>
        <input
          name="confirmpassword"
          type="password"
          placeholder="Enter your confirmpassword"
          value={confirmpassword}
          onChange={this.handleChange}
        />
         <label htmlFor="email">Telephone</label>
        <input
          name="telephone"
          type="text"
          placeholder="Enter your telephone"
          value={telephone}
          onChange={this.handleChange}
        />
         <label htmlFor="email">Address</label>
        <input
          name="address"
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={this.handleChange}
        />
        <button type="submit">Register</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    console.log("Submitting");
    console.log(this.state);
  };
}
