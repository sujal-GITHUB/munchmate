// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({darkMode, setDarkMode}) => {

  const navigate = useNavigate();

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
}, [darkMode]);

  return (
    <div className='navbar'>
        <img onClick={()=>navigate('/')} className='logo' src={assets.logo} alt="" />
        <div className='right'>
          <img
              className='dark-mode'
                onClick={() => setDarkMode(!darkMode)}
                src={darkMode === false ? assets.moon : assets.sun}
                alt="Dark mode toggle"
                width={40}
              />
          <img src={assets.profile_icon} alt="" className="profile" />
        </div>
    </div>
  )
}

export default Navbar