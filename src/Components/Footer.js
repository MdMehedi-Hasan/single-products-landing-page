import React from 'react';
import watch from '../Assets/smart-watch1.png'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import twitter from '../Assets/twitter.png'

const Footer = () => {
    return (
        <footer class="footer p-10 bg-[#00d374] text-white">
            <div>
                <img src={watch} alt=""/>
                <p className='text-xl'>Providing quality service since 1992</p>
            </div>
            <div>
                <span class="text-3xl font-bold">About</span>
                <a class="link link-hover">About</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Reviews</a>
            </div>
            <div>
                <span class="text-3xl font-bold">Support</span>
                <a class="link link-hover">example@bogo.com</a>
                <a class="link link-hover">+9125484484</a>
            </div>
            <div>
                <span class="text-3xl font-bold">Follow Us</span>
                <div className='flex gap-5'>
                <a class="link link-hover"><img src={facebook} alt=""/></a>
                <a class="link link-hover"><img src={instagram} alt=""/></a>
                <a class="link link-hover"><img src={twitter} alt=""/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;