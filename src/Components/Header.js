import React from 'react';
import watch from '../Assets/angled-watch.png'
import blob from '../Assets/blob (1).svg'
import './Header.css'

const Header = () => {
    return (
        <div id='header' className='bg-gray-100 flex justify-center relative py-10 h-screen'>
            <div className='container flex items-center justify-between'>
                <div className='flex flex-col'>
                    <div className='flex-1'></div>
                    <h1 className='text-8xl text-black title flex-1'>Helio G92 <br/> Smart Watch</h1>
                    <div className='flex-1'>
                    <a href="#order"><button type="" className='btn btn-success text-gray-600'>Order Now</button></a>
                    </div>
                </div>
                <div className='relative'>
                    <img src={watch} alt="" className='relative z-50 w-10/12'/>
                    <img src={blob} alt="" className='absolute bottom-0 z-10 w-full'/>
                </div>
            </div>
        </div>
    );
};

export default Header;