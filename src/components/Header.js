import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img 
          src="https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_REV_SQ.8c88ac215fe4e441dc42865dd6962ed4f444a90d.png" 
          alt="Amazon Connect Logo" 
          className="connect-logo"
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
      <h1>Amazon Connect Troubleshooting Guide</h1>
      <p className="subtitle">
        Your comprehensive guide to diagnosing and resolving Amazon Connect issues
      </p>
    </header>
  );
};

export default Header;
