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
      username: '',
      email: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    API.Login(this.state)
      .then((res) => {
        console.log(res.data._id);
        localStorage.setItem('user', res.data._id);
        this.props.updateUser(res.data._id);

        window.location = '/';
      });
  };

  render() {
    return (
      <Container>
        <Section>
          <form>
            <h2>Username</h2>
            <Input
              name='username'
              onChange={this.handleInputChange}
              value={this.state.username}
            />

            <h2>Email</h2>
            <Input
              name='email'
              onChange={this.handleInputChange}
              value={this.state.email}
            />

            <FormBtn
              onClick={this.handleSubmit}
            >Login</FormBtn>
          </form>
        </Section>
      </Container>
    );
  }
}

export default Login;

