// src/components/LoginModal.js
import React from 'react';
import '../styles/LoginPage.css';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="login-form">
          <h2>Rentify</h2>
          <div className="form-group">
            <label>User Name</label>
            <input type="text" placeholder="" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="" />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button className="login-button">Login</button>
          <div className="form-footer">
            <a href="/forgot-password">Forgot password?</a>
            <div className="signup-link">
              New User? <a href="/signup">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;