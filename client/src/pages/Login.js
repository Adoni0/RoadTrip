import React, { Component } from 'react';
import { Section, Container } from "../components/Grid";
import { Input, Select, FormBtn } from "../components/Form";
import { ViewBtn } from "../components/Btn";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmitLogin(event) {
      event.preventDefault();
    }

    function handleSubmitRegister(event){
      event.preventDefault();
    }
  
    return (
      <div classname = "Container">
      <div className="Login">
        <form onSubmit={handleSubmitLogin}>
          <Input
              id="email"
              value={email}
              onChange={this.handleInputChange}
              name="email"
              label="Email"
              onChange={e => setEmail(e.target.value)}
            />

           <Input
              id="password"
              value={password}
              onChange={this.handleInputChange}
              name="password"
              label="Password"
              onChange={e => setPassword(e.target.value)}
            />
          <ViewBtn block bsSize="large" disabled={!validateForm()} type="submit">
            Login
          </ViewBtn>
        </form>
      </div>

  <div className="Register">
  <form onSubmit={handleSubmitRegister}>
  <Input
        id="username"
        value={username}
        onChange={this.handleInputChange}
        name="username"
        label="Username"
        onChange={e => setUsername(e.target.value)}
      />
    <Input
        id="email"
        value={email}
        onChange={this.handleInputChange}
        name="email"
        label="Email"
        onChange={e => setEmail(e.target.value)}
      />

    <Input
        id="password"
        value={password}
        onChange={this.handleInputChange}
        name="password"
        label="Password"
        onChange={e => setPassword(e.target.value)}
      />
    <ViewBtn block bsSize="large" disabled={!validateForm()} type="submit">
      Register
    </ViewBtn>
  </form>
  </div>
</div>
    );
  }

