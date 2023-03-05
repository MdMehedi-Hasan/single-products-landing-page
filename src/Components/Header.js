import React, { useEffect } from 'react';
import watch from '../Assets/angled-watch.png'
import blob from '../Assets/blob-haikei.svg'
import wave from '../Assets/wave.svg'
import 'aos/dist/aos.css';
import './Header.css'
import Aos from 'aos';

const Header = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div id='header' className='bg-white flex justify-center relative py-10 h-screen overflow-hidden'>
            <div className='lg:container flex flex-col-reverse md:flex-row items-center justify-center md:justify-between'>
                <div className='flex flex-col' data-aos="fade-right"  data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="500" data-aos-once="false">
                    <div className='flex-1'></div>
                    <h1 className='text-6xl md:text-8xl text-center md:text-left flex-1 title'>Helio G92 <br/> Smart Watch</h1>
                    <div className='flex-1 mx-auto md:mx-0 pb-20 md:pb-0'>
                    <a href="#order"><button type="" className='btn bg-white text-black border-gray-400 hover:bg-white hover:text-black hover:border-white mt-10'>Order Now</button></a>
                    </div>
                </div>
                <div className='relative' data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="500" data-aos-once="false"  >
                    <img src={watch} alt="" className='w-auto' /> {/* relative z-10 */}
                    {/* <img src={blob} alt="" className='absolute top-10 z-0'/> */}
                </div>
            </div>
        </div>
    );
};

export default Header;