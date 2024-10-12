import { useContext, useState, useEffect } from 'react';
import { assets } from "../assets/assets";
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home");
    const { getTotalCartAmount, token, setToken, darkMode, setDarkMode } = useContext(StoreContext);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");  // Clear token from context
        navigate('/');
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);  // Initialize token in context
        }
    }, [setToken]);

    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(storedDarkMode);
    }, [setDarkMode]);

    useEffect(() => {
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <div className='navbar'>
            <Link to='/'>
                <img 
                    src={darkMode ? assets.logo : assets.logo_light} // Use logo_light in light mode and logo in dark mode
                    alt="logo" 
                    className='logo' 
                />
            </Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}>Menu</a>
                <a href='#app-download' onClick={() => setMenu('Mobile App')} className={menu === 'Mobile App' ? 'active' : ''}>Mobile App</a>
                <a href='#footer' onClick={() => setMenu('Contact')} className={menu === 'Contact' ? 'active' : ''}>Contact</a>
            </ul>
            <div className='navbar-right'>
                <div className='navbar-search'
                     onMouseEnter={() => !isSearchVisible && setIsSearchVisible(true)} 
                     onMouseLeave={() => !isSearchVisible && setIsSearchVisible(false)} 
                >
                    <img 
                        src={assets.search_icon} 
                        alt="Search" 
                        onClick={() => setIsSearchVisible(!isSearchVisible)} 
                    />
                    {isSearchVisible && (
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            onBlur={() => !isSearchVisible && setIsSearchVisible(false)} 
                        />
                    )}
                </div>
                <div className='navbar-search-icon'>
                    <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
                    <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
                </div>
                <img
                    className='dark-mode'
                    onClick={() => setDarkMode(!darkMode)}
                    src={darkMode ? assets.sun : assets.moon} // Ensure the icon reflects the current state
                    alt="Dark mode toggle"
                    width={40}
                />
                {!token ? 
                    <button onClick={() => setShowLogin(true)}>Sign In</button> 
                    : 
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="Profile" />  
                        <ul className='nav-profile-dropdown'>
                            <li onClick={() => navigate('/myorders')}>
                                <img src={assets.bag_icon} alt="Orders" />
                                <p>Orders</p>
                            </li>
                            <hr /> 
                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="Logout" />
                                <p>Logout</p>
                            </li>   
                        </ul>  
                    </div>
                }
            </div>
        </div>
    );
}

export default Navbar;
