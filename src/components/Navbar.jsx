import React from 'react'
import logo from "../assets/react.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-300  flex items-center">
      <div className="flex mr-10 items-center ml-10">
        {/* Logo */}
        <img src="./Image/logorodd.png" alt="Logo" className="h-16 w-16 mr-3" />

        {/* Brand Text */}
        <span className="text-white font-semibold text-lg"> <li><NavLink to="/" className="text-white hover:text-amber-400">RodD</NavLink></li></span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><NavLink to="/" className="text-white hover:text-amber-400">หน้าหลัก</NavLink></li>
        <li><NavLink to="/About" className="text-white hover:text-amber-400">เกี่ยวกับเรา</NavLink></li>
        <li><NavLink to="/Contact" className="text-white hover:text-amber-400">ติดต่อ</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbar