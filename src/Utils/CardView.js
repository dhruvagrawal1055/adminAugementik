import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
const CardView = () => {
    const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (e) => {
      setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
      if ((id == "admin") && (password == "12345")) {
          console.log("Login Successful")
          navigate('/dashboard')
      }
  };
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Login</h1>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={handleIdChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
          />
        </div>
        <button onClick={handleLogin} className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default CardView;
