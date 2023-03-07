import React from 'react';
import watch from '../Assets/smart-watch1.png'
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#00d374] text-white test">
            <div>
                <img src={watch} alt="" />
                <p className='text-xl'>Providing quality products since 1992</p>
            </div>
            <div>
                <span className="text-3xl font-bold">Information</span>
                <a href='#' className="link link-hover">Home</a>
                <a href='#description' className="link link-hover">About</a>
                <a href='#reviews' className="link link-hover">Reviews</a>
            </div>
            <div>
                <span className="text-3xl font-bold">Support</span>
                <a className="link link-hover">contact@watchworld.com</a>
                <a className="link link-hover">+9125484484</a>
            </div>
            <div>
                <span className="text-3xl font-bold">Follow Us</span>
                <div className='flex gap-5'>
                    <a className="link link-hover text-4xl"><Icon icon="ic:baseline-facebook" /></a>
                    <a className="link link-hover text-4xl"><Icon icon="mdi:instagram" /></a>
                    <a className="link link-hover text-4xl"><Icon icon="entypo-social:twitter-with-circle" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;