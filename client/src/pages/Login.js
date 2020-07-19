import React, { Component } from 'react';
import { Section, Container } from "../components/Grid";
import { Input, Select, FormBtn } from "../components/Form";
import { SubmitBtn } from "../components/Btn";
import API from '../utils/API';
import APP from "../App.js";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      loginEmail:"",
      loginPassword:"",
      registerUsername: "",
      registerPassword: "",
      registerEmail: ""
    };
  }
    

    loginValidateForm() {
      return this.state.loginEmail.length > 0 && this.state.loginPassword.length > 0;
    }
   registerValidateForm() {
      return this.state.registerUsername.length > 0 && 
      this.state.registerPassword.length > 0 &&
      this.state.registerEmail.length > 0;
    }
 
    handleSubmitLogin = (event) => {
      event.preventDefault();
      API.Login({
        email: this.state.loginEmail,
        password: this.state.loginPassword,
      })
      .then(res => {
        console.log('User logged in!');
        APP.handleSetState(res.data.id);
        // Redirect to the trips page
        window.location.replace(`/`);
    })
  }

    handleInputChange = (e) => {
      const {name, value} = e.target;

      this.setState({
        [name]: value
      });
    };

    handleSubmitRegister = (event) => {
      event.preventDefault();
      API.Register({
        username: this.state.registerUsername,
        email: this.state.registerEmail,
        password: this.state.registerPassword
      })
      .then(res => {
      console.log('User registered!');
      APP.handleSetState(res.data.id);
      // Redirect to the trips page
      window.location.replace(`/`);
    })
    .catch(err => console.log(err));
    }
  render(){
    return (
      <div classname = "Container">
      <div className="Login">
        <form onSubmit={this.handleSubmitLogin}>
          <Input
              id="email"
              value={this.state.loginEmail}
              onChange={this.handleInputChange}
              name="loginEmail"
              label="Email"
            />

           <Input
              id="password"
              value={this.state.loginPassword}
              onChange={this.handleInputChange}
              name="loginPassword"
              label="Password"
            />
          <SubmitBtn block bsSize="large" disabled={!this.loginValidateForm()} type="submit"
          onSubmit={this.handleSubmitLogin}>
            Login
          </SubmitBtn>
        </form>
      </div>

  <div className="Register">
  <form onSubmit={this.handleSubmitRegister}>
  <Input
        id="username"
        value={this.state.registerUsername}
        onChange={this.handleInputChange}
        name="registerUsername"
        label="Username"
      />
    <Input
        id="email"
        value={this.state.registerEmail}
        onChange={this.handleInputChange}
        name="registerEmail"
        label="Email"
      />

    <Input
        id="password"
        value={this.state.registerPassword}
        onChange={this.handleInputChange}
        name="registerPassword"
        label="Password"
      />
    <SubmitBtn block bsSize="large" disabled={!this.registerValidateForm()} type="submit"
    onSubmit={this.handleSubmitRegister}>
      Register
    </SubmitBtn>
  </form>
  </div>
</div>
  
    );
  }
    }

  export default Login;

