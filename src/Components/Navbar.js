import React, { useEffect, useState } from 'react';
import watch from '../Assets/smart-watch1.png'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }
      useEffect(() => {
        window.addEventListener("scroll", changeBackground)
      })
    return (
        <div className={`${!navbar? 'bg-transparent' : 'bg-[#00d374]'} flex justify-center text-xl font-semibold fixed top-0 z-50 w-full`}>{/* bg-[#a7f0ba] */}
            <div className="navbar text-white container px-0">
                <div className="navbar-start w-full justify-between flex-row-reverse">{/*  */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><a href='#'>Home</a></li>
                            <li tabIndex="0">
                                <a className="justify-between" href='#description'>
                                    About
                                </a>
                            </li>
                            <li><a href='#reviews'>Reviews</a></li>
                            <li><a href='#faq'>FAQ</a></li>
                            <li><a href='#order'>Contact</a></li>
                            <li><a href='#order'>Order Now</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl p-0" href='#'><img src={watch} alt=""/></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#'>Home</a></li>
                        <li tabIndex="0">
                            <a href='#description'>
                                About

                            </a>
                        </li>
                        <li><a href='#reviews'>Reviews</a></li>
                        <li><a href='#faq'>FAQ</a></li>
                        <li><a href='#order'>Contact</a></li>
                        <li className='border border-gray-400 rounded-xl bg-white text-black font-normal'><a href='#order'>Order Now</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;