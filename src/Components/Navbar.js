import React, { useEffect, useState } from 'react';

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
            <div class="navbar text-white container px-0">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/'>Home</a></li>
                            <li tabindex="0">
                                <a class="justify-between">
                                    About
                                </a>
                            </li>
                            <li><a>Reviews</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Order Now</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl p-0">BOGO</a>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li><a href='#' >Home</a></li>
                        <li tabindex="0">
                            <a>
                                About

                            </a>
                        </li>
                        <li><a>Reviews</a></li>
                        <li><a>Contact</a></li>
                        <li><a href='#order'>Order Now</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;