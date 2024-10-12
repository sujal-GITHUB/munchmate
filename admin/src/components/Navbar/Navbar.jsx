// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {

  const navigate = useNavigate();

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className='navbar'>
        {/* Conditionally render the logo based on the darkMode state */}
        <img 
          onClick={() => navigate('/')} 
          className='logo' 
          src={darkMode ? assets.logo : assets.logo_light} // Use logo for dark mode, logo_light for light mode
          alt="Logo" 
        />
        <div className='right'>
          <img
              className='dark-mode'
              onClick={() => setDarkMode(!darkMode)}
              src={darkMode === false ? assets.moon : assets.sun}
              alt="Dark mode toggle"
              width={40}
          />
          <img src={assets.profile_icon} alt="Profile" className="profile" />
        </div>
    </div>
  );
}

export default Navbar;
