import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const authData = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        authData
      );
      const token = response.headers.authorization;
      console.log("Token:", response.data);
      // Redirect to authenticated page after successful login
      navigate("/Authenticated");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Unauthorized.");
      } else {
        console.error("Login failed:", error.response);
      }
    }
  };

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
