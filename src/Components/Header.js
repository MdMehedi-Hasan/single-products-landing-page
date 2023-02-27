import React from 'react';
import watch from '../Assets/angled-watch.png'
import blob from '../Assets/blob (1).svg'
import wave from '../Assets/wave.svg'
import './Header.css'

const Header = () => {
    return (
        <div id='header' className='bg-white flex justify-center relative py-10 h-screen overflow-hidden'>
            <div className='container flex items-center justify-between'>
                <div className='flex flex-col'>
                    <div className='flex-1'></div>
                    <h1 className='text-8xl text-black title flex-1 relative z-20'>Helio G92 <br/> Smart Watch</h1>
                    <div className='flex-1'>
                    <a href="#order"><button type="" className='btn btn-success text-gray-600 relative z-20'>Order Now</button></a>
                    </div>
                </div>
                <div className=''>
                    <img src={watch} alt="" className='relative z-20'/>
                </div>
            </div>
        </div>
    );
};

export default Header;