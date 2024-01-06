// LoadingSpinner.js
import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner bg-gradient-to-r from-yellow-200 to-purple-200">
      <div className="spinner ">&lt; / &gt;</div>
    </div>
  );
};

export default LoadingSpinner;
