import React, { useState } from 'react';
import image from '../Assets/straight-watch1.png'
import connect from '../Assets/analytics.png'
import confiqure from '../Assets/management.png'
import trophy from '../Assets/trophy.png'
import Review from './Review';
import watches from '../Assets/multiple-watches2.png'

import gps from '../Assets/location.png'
import security from '../Assets/insurance.png'
import idea from '../Assets/light-bulb.png'
import bills from '../Assets/invoice.png'
import tech from '../Assets/technology.png'
import heart from '../Assets/love.png'

import key from '../Assets/key.png'
import voice from '../Assets/voice-record.png'
import apps from '../Assets/copy.png'
import like from '../Assets/like.png'
import person from '../Assets/user.png'
import watch from '../Assets/smart-watch.png'

import swal from 'sweetalert';
import Faq from './Faq';
import './Center.css'
const Center = () => {
    const [amount, setAmount] = useState(0)
    const placeOrder = (event) => {
        event.preventDefault()

        const data = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            address: event.target.address.value,
            city: event.target.city.value,
            area: event.target.area.value,
            qty: parseInt(event.target.qty.value),
        }
        if (data.name && data.phone && data.email && data.address && data.city && data.area && data.qty) {
            const error = document.getElementById('nameError')
            if (error) {
                error.remove()
            }
            const error1 = document.getElementById('phoneError')
            if (error1) {
                error1.remove()
            }
            const error2 = document.getElementById('emailError')
            if (error2) {
                error2.remove()
            }
            const error3 = document.getElementById('addressError')
            if (error3) {
                error3.remove()
            }
            const error4 = document.getElementById('cityError')
            if (error4) {
                error4.remove()
            }
            const error5 = document.getElementById('areaError')
            if (error5) {
                error5.remove()
            }
            const error6 = document.getElementById('qtyError')
            if (error6) {
                error6.remove()
            }
            /* const error = document.getElementById('nameError')
                if(error){
                    error.remove()
                } */
            fetch("http://localhost:5000/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    // console.log("Success:", data);
                    if (data.acknowledged) {
                        swal({
                            title: "Order Placed Successfully!",
                            text: "Your order has been placed. Our agent will call you regarding the order. If you have any query please contact us at : +880132***785",
                            icon: "success",
                            button: "OK",
                        });
                        event.target.reset()
                    }
                })
                .catch((error) => {
                    // console.error("Error:", error);
                    if (error) {
                        swal({
                            title: "Something went wrong!",
                            text: "Please try again later or if this happen multiple times then please contact us at : +880132***785",
                            icon: "error",
                            button: "OK",
                        });
                    }
                });
        }
        else {
            if (!data.name) {
                const input = event.target.name
                const error = document.getElementById('nameError')
                if (error) {
                    error.remove()
                    input.insertAdjacentHTML("afterend", "<span id='nameError' class='text-red-500 ml-2 font-semibold text-sm'>Full Name is Required!<span/>");
                }
                else {
                    input.insertAdjacentHTML("afterend", "<span id='nameError' class='text-red-500 ml-2 font-semibold text-sm'>Full Name is Required!<span/>");
                }
            }
            else {
                const error = document.getElementById('nameError')
                if (error) {
                    error.remove()
                }
            }
            // Name validation end
            if (!data.phone) {
                const input = event.target.phone
                const error = document.getElementById('phoneError')
                if (error) {
                    error.remove()
                    input.insertAdjacentHTML("afterend", "<span id='phoneError' class='text-red-500 ml-2 font-semibold text-sm'>Phone Number is Required!<span/>");
                }
                else {
                    input.insertAdjacentHTML("afterend", "<span id='phoneError' class='text-red-500 ml-2 font-semibold text-sm'>Phone Number is Required!<span/>");
                }
            }
            else {
                const error = document.getElementById('phoneError')
                if (error) {
                    error.remove()
                }
            }
            // Phone validation end
            if (!data.email) {
                const input = event.target.email
                const error = document.getElementById('emailError')
                if (error) {
                    error.remove()
                    input.insertAdjacentHTML("afterend", "<span id='emailError' class='text-red-500 ml-2 font-semibold text-sm'>Email is Required!<span/>");
                }
                else {
                    input.insertAdjacentHTML("afterend", "<span id='emailError' class='text-red-500 ml-2 font-semibold text-sm'>Email is Required!<span/>");
                }
            }
            else {
                const error = document.getElementById('emailError')
                if (error) {
                    error.remove()
                }
            }
            // Email validation end
            if (!data.address) {
                const input = event.target.address
                const error = document.getElementById('addressError')
                if (error) {
                    error.remove()
                    input.insertAdjacentHTML("afterend", "<span id='addressError' class='text-red-500 ml-2 font-semibold text-sm'>Address is Required!<span/>");
                }
                else {
                    input.insertAdjacentHTML("afterend", "<span id='addressError' class='text-red-500 ml-2 font-semibold text-sm'>Address is Required!<span/>");
                }
            }
            else {
                const error = document.getElementById('addressError')
                if (error) {
                    error.remove()
                }
            }
            // Address validation end
            if (!data.city) {
                const input = event.target.city
                const error = document.getElementById('cityError')
                if (error) {
                    error.remove()
                    input.insertAdjacentHTML("afterend", "<span id='cityError' class='text-red-500 ml-2 font-semibold text-sm'>City is Required!<span/>");
                }
                else {
                    input.insertAdjacentHTML("afterend", "<span id='cityError' class='text-red-500 ml-2 font-semibold text-sm'>City is Required!<span/>");
                }
            }
            else {
                const error = document.getElementById('cityError')
                if (error) {
                    error.remove()
                }
            }
            // City validation end
            if (!data.area) {
                const input = event.target.area
                const error = document.getElementById('areaError')
                if (error) {
                    error.remove()
                    input.insertAdjacentHTML("afterend", "<span id='areaError' class='text-red-500 ml-2 font-semibold text-sm'>Area is Required!<span/>");
                }
                else {
                    input.insertAdjacentHTML("afterend", "<span id='areaError' class='text-red-500 ml-2 font-semibold text-sm'>Area is Required!<span/>");
                }
            }
            else {
                const error = document.getElementById('areaError')
                if (error) {
                    error.remove()
                }
            }
            // Area validation end
            if (data.qty === 0 || !data.qty) {
                const input = event.target.qty
                const error = document.getElementById('qtyError')
                if (error) {
                    error.remove()
                    input.insertAdjacentHTML("afterend", "<span id='qtyError' class='text-red-500 ml-1 font-semibold text-sm'>Minimum order quantity is 1<span/>");
                }
                else {
                    input.insertAdjacentHTML("afterend", "<span id='qtyError' class='text-red-500 ml-1 font-semibold text-sm'>Minimum order quantity is 1<span/>");
                }
            }
            else {
                const error = document.getElementById('qtyError')
                if (error) {
                    error.remove()
                }
            }
            // Qty validation end
        }
    }
    return (
        <div className='mt-[-40px]'>
            <section className='flex justify-center pb-40 bg-base-200'>
                <div className='container flex flex-col md:grid md:grid-cols-3 gap-y-10 md:gap-y-0 justify-center gap-5'>
                    <div className="card w-auto bg-white shadow-xl text-center py-5" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="700" data-aos-easing="ease-in-out">
                        <figure><img src={connect} alt="Connect" className='w-12 md:w-16 lg:w-24' /></figure>
                        <div className="card-body md:p-2 lg:p-5 xl:p-8">
                            <h2 className="text-2xl font-semibold">Connect Device</h2>
                            <p>Connect the device with our app to track all activities and get notified of messages, calls etc.</p>
                        </div>
                    </div>
                    <div className="card w-auto bg-white shadow-xl text-center py-5" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="700" data-aos-easing="ease-in-out">
                        <figure><img src={confiqure} alt="confiqure" className='w-12 md:w-16 lg:w-24' /></figure>
                        <div className="card-body md:p-2 lg:p-5 xl:p-8">
                            <h2 className="text-2xl font-semibold">Configure it</h2>
                            <p>Install our app from appstore and configure it with your watch model. Once it is configured you will get all desired notifications.</p>
                        </div>
                    </div>
                    <div className="card w-auto bg-white shadow-xl text-center py-5" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="700" data-aos-easing="ease-in-out">
                        <figure><img src={trophy} alt="trophy" className='w-12 md:w-16 lg:w-24' /></figure>
                        <div className="card-body md:p-2 lg:p-5 xl:p-8">
                            <h2 className="text-2xl font-semibold">Yay! Done</h2>
                            <p>After configuring the watch you are all set to track your daily activities. You can now get call, message notifications.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center bg-base-200 py-20'>
                <div className='container'>
                    <h1 className='text-center text-6xl font-semibold' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out">The Benefits</h1>
                    <p className='text-center text-2xl text-gray-500 lg:w-6/12 mx-auto py-4' data-aos="zoom-in-up" data-aos-delay="1000" data-aos-duration="1000" data-aos-easing="ease-in-out">Smart watch make your daily life easy and productive. With this watch you can do simply anything & everything.</p>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 pt-20 pb-24 gap-10'>
                        <div className='flex justify-start gap-3' data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                            <img src={gps} alt="" className='w-12 h-12' />
                            <div>
                                <h1 className='pt-0 mt-0 text-xl font-semibold'>GPS Tracking</h1>
                                <p className='font-sans'>In build GPS Tracking with 99.99% acquracy.</p>
                            </div>
                        </div>
                        <div className='flex justify-start gap-3' data-aos="zoom-in-up" data-aos-delay="700" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                            <img src={security} alt="" className='w-12 h-12' />
                            <div>
                                <h1 className='pt-0 mt-0 text-xl font-semibold'>Security first</h1>
                                <p className='font-sans'>In G92 we have ensured client security & privacy so that no one can steal your data.</p>
                            </div>
                        </div>
                        <div className='flex justify-start gap-3' data-aos="zoom-in-up" data-aos-delay="900" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                            <img src={idea} alt="" className='w-12 h-12' />
                            <div>
                                <h1 className='pt-0 mt-0 text-xl font-semibold'>Innovative idea</h1>
                                <p className='font-sans'>With our innovative team we have approached some new functionaliites.</p>
                            </div>
                        </div>
                        <div className='flex justify-start gap-3' data-aos="zoom-in-up" data-aos-delay="1100" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                            <img src={bills} alt="" className='w-12 h-12' />
                            <div>
                                <h1 className='pt-0 mt-0 text-xl font-semibold'>Save your bills</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start gap-3' data-aos="zoom-in-up" data-aos-delay="1300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                            <img src={tech} alt="" className='w-12 h-12' />
                            <div>
                                <h1 className='pt-0 mt-0 text-xl font-semibold'>Proven technology</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start gap-3' data-aos="zoom-in-up" data-aos-delay="1500" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                            <img src={heart} alt="" className='w-12 h-12' />
                            <div>
                                <h1 className='pt-0 mt-0 text-xl font-semibold'>Heartbeat Analysis</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='description' className='flex justify-center'>
                <div className='container grid md:grid-cols-2 items-center justify-items-center md:justify-items-start gap-y-32 md:gap-y-0 py-40'>
                    <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <img src={watches} alt="watches" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <h1 className='text-4xl font-semibold'>Product Description</h1>
                        <p className='py-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <a href="#order"><button type="" className='btn btn-success mt-5 text-white'>Order Now</button></a>
                    </div>
                </div>
            </section>
            <section className='flex justify-center bg-base-200 py-40'>
                <div className='grid lg:grid-cols-3 items-center container'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex gap-3 justify-start border-r-2 border-b-2 p-5 border-gray-200' data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <img src={key} alt="" className='h-12' />
                            <div>
                                <h1 className='pt-0 mt-0 text-xl font-bold'>Fast and secure</h1>
                                <p className='font-sans text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex gap-3 justify-start border-r-2 border-b-2 p-5 border-gray-200' data-aos="zoom-in" data-aos-delay="700" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <img src={voice} alt="" className='h-12' />
                            <div>
                                <h1 className='pt-0 mt-0 text-xl font-bold'>Voice Assistant</h1>
                                <p className='font-sans text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex gap-3 justify-start border-r-2 border-b-2 p-5 border-gray-200' data-aos="zoom-in" data-aos-delay="1100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <img src={apps} alt="" className='h-12' />
                            <div>
                                <h1 className='pt-0 mt-0 text-xl font-bold'>Apps you love</h1>
                                <p className='font-sans text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center order-3 lg:order-none mt-32 lg:mt-0' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine"><img src={image} alt="" /></div>
                    <div className='flex flex-col gap-10'>
                        <div className='flex gap-3 justify-start border-l-2 border-b-2 p-5 border-gray-200' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <img src={like} alt="" className='h-12' />
                            <div>
                                <h1 className='pt-0 mt-0 text-xl font-bold'>Stay in touch</h1>
                                <p className='font-sans text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex gap-3 justify-start border-l-2 border-b-2 p-5 border-gray-200' data-aos="zoom-in" data-aos-delay="900" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <img src={person} alt="" className='h-12' />
                            <div>
                                <h1 className='pt-0 mt-0 text-xl font-bold'>Designed for you</h1>
                                <p className='font-sans text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex gap-3 justify-start border-l-2 border-b-2 p-5 border-gray-200' data-aos="zoom-in" data-aos-delay="1300" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <img src={watch} alt="" className='h-12' />
                            <div>
                                <h1 className='pt-0 mt-0 text-xl font-bold'>Precise timepiece</h1>
                                <p className='font-sans text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center bg-white py-20'>
                <div className='container'>
                    <h1 className='text-center text-6xl font-semibold' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">TECH SPECS</h1>
                    <p className='text-center text-2xl text-gray-500 w-6/12 mx-auto py-4' data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200" data-aos-easing="ease-in-sine">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 pt-20 pb-24 lg:gap-x-20 gap-y-10'>
                        <div className='border-b mx-5 sm:mx-16' data-aos="fade-right" data-aos-delay="1400" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <h1 className='text-2xl font-semibold'>Compatibility</h1>
                            <p className='font-sans text-gray-500'>iPhone iOS 7 & up
                                Android 4.3 & uptexts
                                Bluetooth 4.0
                                Notification for calls / texts</p>
                        </div>
                        <div className='border-b mx-5 sm:mx-16' data-aos="fade-up-right" data-aos-delay="1500" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <h1 className='text-2xl font-semibold'>App</h1>
                            <p className='font-sans text-gray-500'>Set daily goals
                                Analyze history
                                Sync to phone & cloud
                                Connect to Apple health kit
                                Connect to Google fit
                                Watch firmware upgrade</p>
                        </div>
                        <div className='border-b mx-5 sm:mx-16' data-aos="fade-up-right" data-aos-delay="1600" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <h1 className='text-2xl font-semibold'>Vibration silent alarms</h1>
                            <p className='font-sans text-gray-500'>Phone notifications
                                Daily goal reached
                                Daily wake-up alarm
                                Location assistance
                                Accessiblity features</p>
                        </div>
                        <div className='border-b mx-5 sm:mx-16' data-aos="fade-up-right" data-aos-delay="1700" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <h1 className='text-2xl font-semibold'>Watch</h1>
                            <p className='font-sans text-gray-500'>12.6mm thickness
                                3.16L stainless steel case
                                40mm diameter
                                5 ATM water resistant
                                Sapphire glass crystal</p>
                        </div>
                        <div className='border-b mx-5 sm:mx-16' data-aos="fade-up-right" data-aos-delay="1800" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <h1 className='text-2xl font-semibold'>Straps</h1>
                            <p className='font-sans text-gray-500'>Italian leather with natural lining
                                Comfort sport fabric
                                Quick-release pins</p>
                        </div>
                        <div className='border-b mx-5 sm:mx-16' data-aos="fade-up-right" data-aos-delay="1900" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <h1 className='text-2xl font-semibold'>Activity tracking</h1>
                            <p className='font-sans text-gray-500'>Step counting
                                Distance
                                Calories burned
                                Swimming (strokes)</p>
                        </div>
                        <div className='border-b mx-5 sm:mx-16' data-aos="fade-up-right" data-aos-delay="2000" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <h1 className='text-2xl font-semibold'>Timekeeping</h1>
                            <p className='font-sans text-gray-500'>Swiss ETA movement
                                Accurate, reliable</p>
                        </div>
                        <div className='border-b mx-5 sm:mx-16' data-aos="fade-up-right" data-aos-delay="2100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <h1 className='text-2xl font-semibold'>Battery power</h1>
                            <p className='font-sans text-gray-500'>Standard CR2025 6+ months
                                Standard 364 for timekeeping 5+ years
                                Solar Power available as aupgrade</p>
                        </div>
                        <div className='border-b mx-5 sm:mx-16' data-aos="fade-up-right" data-aos-delay="2200" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <h1 className='text-2xl font-semibold'>Sensors</h1>
                            <p className='font-sans text-gray-500'>MEMS 3-axis accelerometer
                                Highly accurate
                                Low power consumption</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='reviews'>
                <Review />
            </section>
            <section>
                <Faq />
            </section>
            <section id="order" className='flex justify-center py-40 bg-base-200'>
                <div className='lg:container flex flex-col md:flex-row justify-center gap-40'>
                    {/* <div className="card image-full">
                        <figure><img src={map} alt="map" /></figure>
                        <div className="flex items-center justify-center">
                            <p className='w-96 text-black'>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                        </div>
                    </div> */}
                    <div className='flex flex-col gap-10 w-96'>
                        <div>
                            <h1 className='text-2xl font-semibold'>Address</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Phone</h1>
                            <p>+98574455745</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Email</h1>
                            <p>example@plutoproducts.com</p>
                        </div>
                    </div>
                    <div className='lg:w-6/12'>
                        <form onSubmit={(e) => placeOrder(e)}>
                            <div className='sm:flex sm:gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Full Name <span className='text-red-600'>&#42;</span></span>
                                    </label>
                                    <input type="text" placeholder="John Doe" className="input input-bordered sm:w-full bg-white" name="name" />
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Phone Number <span className='text-red-600'>&#42;</span></span>
                                    </label>
                                    <input type="number" placeholder="017********" className="input input-bordered w-full bg-white" name="phone" onKeyDown={(evt) => ["e", "E", "-"].includes(evt.key) && evt.preventDefault()} min="0" />
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email Address <span className='text-red-600'>&#42;</span></span>
                                </label>
                                <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full bg-white" name="email" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Delivery Address <span className='text-red-600'>&#42;</span></span>
                                </label>
                                <input type="text" placeholder="House-02, Road-12, Bonosree, Dhaka-1230" className="input input-bordered w-full bg-white" name="address" />
                            </div>
                            <div className='sm:flex sm:gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">City <span className='text-red-600'>&#42;</span></span>
                                    </label>
                                    <input type="text" placeholder="Dhaka" className="input input-bordered w-full bg-white" name="city" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Area <span className='text-red-600'>&#42;</span></span>
                                    </label>
                                    <input type="text" placeholder="Bonosree" className="input input-bordered w-full bg-white" name="area" />
                                    {/* <label className="label"></label> */}
                                    <label className="label">
                                        <span className="label-text-alt"></span>
                                        <span className="label-text-alt text-gray-400">ex: Dhanmondi</span>
                                    </label>
                                </div>
                            </div>
                            <div className='flex items-end justify-between'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Select Qty <span className='text-red-600'>&#42;</span></span>
                                    </label>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col w-full'>
                                        <input type="number" placeholder="0" className="input input-bordered w-3/12 bg-white" name="qty" min="0" onChange={(e) => setAmount(e.target.value * 500)} />
                                        </div>
                                        <p className='font-semibold w-full'>Amount: {amount}</p>
                                    </div>
                                </div>
                                {/* <input type="button" name="" className='border' value="button"/> */}
                                <input type="submit" className='btn btn-success text-white' value="Place Order" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Center;