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
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navbar}
                    </ul>
                </div>
                <img className='bg-white p-2 lg:w-32 w-14' src={imgUrl} alt="" />
            </div>
            <div className=''>
                <input type="text" placeholder="Search your destination" className="input bg-[#FFFFFF33] focus:outline-none text-white gap-20 w-24 md:w-auto" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-orange-400 text-black"><Link to="/login">Login</Link></a>
            </div>
        </div>
    );
};

export default Navbar;
