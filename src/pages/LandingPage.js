import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <div className="overlay">
        <h1>Green Haven</h1>
        <p>Your destination for beautiful, air-purifying houseplants.</p>
        <button onClick={() => navigate('/products')}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;