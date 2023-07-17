import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import "./RegisterForm.css";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("ROLE_STUDENT"); // Default role

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          username,
          password,
          role,
        }
      );

      toast.success("Registered Succesfully!");
      console.log(response);

      if (response.status === 200) {
        navigate("/RouteToLogin");
      }

      // Clear the form fields after successful registration
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setRole("ROLE_STUDENT");
    } catch (error) {
      console.log("Handle registration error!");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="ROLE_STUDENT">STUDENT</option>
            <option value="ROLE_REVIEWER">REVIEWER</option>
          </select>
        </div>

        <button type="submit" className="register">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
