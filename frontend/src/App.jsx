import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/PlaceOrder/Order'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Routes>
        <Route path='/' element={<Home setDarkMode={setDarkMode} darkMode={darkMode}/>}/>
        <Route path='/cart' element={<Cart darkMode={darkMode}/>}/>
        <Route path='/Order' element={<Order darkMode={darkMode}/>}/>
      </Routes> 
    </div>
    <Footer/>
    </>
  )
}

export default App