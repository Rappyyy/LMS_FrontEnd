import React from 'react';
import axios from 'axios';
import './LoginForm.css';

function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const authData = {
      username: username,
      password: password
    };

    axios
      .post('http://localhost:8080/api/auth/login', authData)
      .then(response => {
        const token = response.headers.authorization;
        console.log('Token:', response.data);
      })
      .catch(error => {
        console.error('Login failed:', error.response);
      });
  }

  return (
    <div className="center">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="txt_field">
          <input type="text" name="username" required />
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" name="password" required />
          <label>Password</label>
        </div>
        <input className="login-button" type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginForm;
