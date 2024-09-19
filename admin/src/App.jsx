import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  
  const [darkMode,setDarkMode] = useState(false);

  return (
    <div>
      <ToastContainer/>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <hr />
      <div className="app-content">
        <Sidebar darkMode={darkMode}/>
        <Routes>
          <Route path='/add' element={<Add darkMode={darkMode}/>}/>
          <Route path='/list' element={<List darkMode={darkMode}/>}/>
          <Route path='/orders' element={<Orders darkMode={darkMode}/>}/>
        </Routes>
      </div>
    </div>
  );
};