import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-[#a7f0ba] flex justify-center'>
            <div class="navbar text-white container px-0">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li tabindex="0">
                                <a class="justify-between">
                                    About
                                </a>
                            </li>
                            <li><a>Reviews</a></li>
                            <li><a>Order Now</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl p-0">BOGO</a>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li tabindex="0">
                            <a>
                                About

                            </a>
                        </li>
                        <li><a>Reviews</a></li>
                        <li><a>Order Now</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;