import React from "react";
import "../styling/Login.css"; 

export default function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      <form className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

