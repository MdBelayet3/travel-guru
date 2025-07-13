import React from 'react';
import imgUrl from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const navbar = <>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/destination">Destination</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className="navbar text-white shadow-sm">
            
        </div>
    );
};

export default Navbar;