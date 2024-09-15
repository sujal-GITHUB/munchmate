import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

export const Sidebar = ({darkMode}) => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={darkMode===false ? assets.add_icon : assets.white_add} alt="" width={30} />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img src={darkMode===false ? assets.order_icon : assets.white_list} alt="" width={30} />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <img src={darkMode===false ? assets.order_icon : assets.white_list} alt="" width={30}/>
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}
