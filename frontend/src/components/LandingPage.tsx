import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="landing-page">
      <div className="content">
        <h1>Welcome to ALEA Esports Betting Platform</h1>
        <button onClick={handleLoginClick}>Login</button>
      </div>
      <img src="./assets/landing-gradient.svg" className="background-gradient" alt="background gradient" />
    </div>
  );
};

export default LandingPage;
