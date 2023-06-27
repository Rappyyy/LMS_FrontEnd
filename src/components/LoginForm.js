import React from 'react';
import axios from 'axios';

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ position: 'relative', top: '-200px' }}>
        <h1 style={{ textAlign: 'center' }}>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
          <br /><br />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
          <br /><br />
          <div style={{ textAlign: 'center' }}>
            <input type="submit" value="LOGIN" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
