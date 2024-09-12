import { useContext, useState, useEffect } from 'react'; // Import useEffect
import { assets } from "../assets/assets";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setShowLogin, darkMode, setDarkMode }) => {
    const [menu, setMenu] = useState("Home");
    const { getTotalCartAmount } = useContext(StoreContext);

    useEffect(() => {
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="logo" className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}>Menu</a>
                <a href='#app-download' onClick={() => setMenu('Mobile App')} className={menu === 'Mobile App' ? 'active' : ''}>Mobile App</a>
                <a href='#footer' onClick={() => setMenu('Contact')} className={menu === 'Contact' ? 'active' : ''}>Contact</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="Search" />
                <div className='navbar-search-icon'>
                    <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
                    <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
                </div>
                <img
                    className='dark-mode'
                    onClick={() => setDarkMode(!darkMode)}
                    src={darkMode === false ? assets.moon : assets.sun}
                    alt="Dark mode toggle"
                    width={40}
                />
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
}

export default Navbar;
