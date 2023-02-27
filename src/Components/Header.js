import React from 'react';
import watch from '../Assets/angled-watch.png'
import blob from '../Assets/blob-haikei.svg'
import wave from '../Assets/wave.svg'
import './Header.css'

const Header = () => {
    return (
        <div id='header' className='bg-white flex justify-center relative py-10 h-screen overflow-hidden'>
            <div className='container flex items-center justify-between'>
                <div className='flex flex-col'>
                    <div className='flex-1'></div>
                    <h1 className='text-8xl title flex-1'>Helio G92 <br/> Smart Watch</h1>
                    <div className='flex-1'>
                    <a href="#order"><button type="" className='btn bg-white text-black border-white hover:bg-white hover:text-black hover:border-white mt-10'>Order Now</button></a>
                    </div>
                </div>
                <div className='relative'>
                    <img src={watch} alt="" className=''/> {/* relative z-10 */}
                    {/* <img src={blob} alt="" className='absolute top-10 z-0'/> */}
                </div>
            </div>
        </div>
    );
};

export default Header;