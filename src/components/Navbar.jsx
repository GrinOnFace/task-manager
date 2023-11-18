import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation()
    const navigate = useNavigate()


    const showNavbar = (location.pathname === '/main') || (location.pathname === '/about') || (location.pathname === '/contact') || (location.pathname === '/home') || (location.pathname === '/projects') || (location.pathname === '/services')   

    return showNavbar ? (
      <div className="navbar">
        <div className="nabvar__links_icon">
            <Link to="/main">
                TheManager
            </Link>
        </div>
        <nav className="navbar__links_items">
            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    ) : null;
} 

export default Navbar