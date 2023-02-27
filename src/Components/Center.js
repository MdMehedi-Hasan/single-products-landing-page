import { Icon } from '@iconify/react';
import React from 'react';
import image from '../Assets/straight-watch.png'
import connect from '../Assets/analytics.png'
import confiqure from '../Assets/management.png'
import trophy from '../Assets/trophy.png'
import map from '../Assets/map.jpg'
import Review from './Review';
import watches from '../Assets/multiple-watches2.png'
const Center = () => {
    return (
        <div className='mt-[-40px] border'>
            <section className='flex justify-center pb-40'>
                <div className='container flex justify-center gap-5'>
                    <div class="card w-auto bg-white shadow-xl text-center py-5">
                        <figure><img src={connect} alt="Connect" className='w-24' /></figure>
                        <div class="card-body">
                            <h2 class="text-2xl font-semibold">Connect Device</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                        </div>
                    </div>
                    <div class="card w-auto bg-white shadow-xl text-center py-5">
                        <figure><img src={confiqure} alt="confiqure" className='w-24' /></figure>
                        <div class="card-body">
                            <h2 class="text-2xl font-semibold">Configure it</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                        </div>
                    </div>
                    <div class="card w-auto bg-base-200 shadow-xl text-center py-5">
                        <figure><img src={trophy} alt="trophy" className='w-24' /></figure>
                        <div class="card-body">
                            <h2 class="text-2xl font-semibold">Yay! Done</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center bg-base-200 py-20'>
                <div className='container'>
                    <h1 className='text-center text-6xl font-semibold'>The Benefits</h1>
                    <p className='text-center text-2xl text-gray-500 w-6/12 mx-auto py-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className='grid grid-cols-3 pt-20 pb-24'>
                        <div className='flex justify-start '><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start '><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start '><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start '><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start '><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start '><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center'>
                <div className='container grid grid-cols-2 items-center pb-40'>
                    <div>
                        <img src={watches} alt="watches" />
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold'>Product Description</h1>
                        <p className='py-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <a href="#order"><button type="" className='btn btn-success mt-5'>Order Now</button></a>
                    </div>
                </div>
            </section>
            <section className='flex justify-center bg-base-200 py-40'>
                <div className='flex container'>
                    <div className='flex flex-col gap-20'>
                        <div className='flex justify-start '><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start '><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start '><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'><img src={image} alt="" /></div>
                    <div className='flex flex-col gap-20'>
                        <div className='flex justify-start border-l-2 border-b-2 p-5 border-gray-200'><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start border-l-2 border-b-2 p-5 border-gray-200'><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start border-l-2 border-b-2 p-5 border-gray-200'><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center bg-white py-20'>
                <div className='container'>
                    <h1 className='text-center text-6xl font-semibold'>TECH SPECS</h1>
                    <p className='text-center text-2xl text-gray-500 w-6/12 mx-auto py-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className='grid grid-cols-3 pt-20 pb-24'>
                        <div>
                            <h1 className='pt-0 mt-0'>Reliable</h1>
                            <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                        <div>
                            <h1 className='pt-0 mt-0'>Reliable</h1>
                            <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                        <div>
                            <h1 className='pt-0 mt-0'>Reliable</h1>
                            <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                        <div>
                            <h1 className='pt-0 mt-0'>Reliable</h1>
                            <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                        <div>
                            <h1 className='pt-0 mt-0'>Reliable</h1>
                            <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                        <div>
                            <h1 className='pt-0 mt-0'>Reliable</h1>
                            <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                        <div>
                            <h1 className='pt-0 mt-0'>Reliable</h1>
                            <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                        <div>
                            <h1 className='pt-0 mt-0'>Reliable</h1>
                            <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                        <div>
                            <h1 className='pt-0 mt-0'>Reliable</h1>
                            <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Review />
            </section>
            <section id="order" className='flex justify-center py-40'>
                <div className='container flex justify-center gap-40'>
                    {/* <div class="card image-full">
                        <figure><img src={map} alt="map" /></figure>
                        <div class="flex items-center justify-center">
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
                    <div className='w-6/12'>
                        <form>
                            <div className='flex gap-5'>
                                <div class="form-control w-full ">
                                    <label class="label">
                                        <span class="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input w-full bg-gray-100" />
                                </div>
                                <div class="form-control w-full ">
                                    <label class="label">
                                        <span class="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input w-full bg-gray-100" />
                                </div>
                            </div>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Email Address</span>
                                </label>
                                <input type="text" placeholder="Type here" class="input w-full bg-gray-100" />
                            </div>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Delivery Address</span>
                                </label>
                                <input type="text" placeholder="Type here" class="input w-full bg-gray-100" />
                            </div>
                            <div className='flex gap-5'>
                                <div class="form-control w-full">
                                    <label class="label">
                                        <span class="label-text">City</span>
                                    </label>
                                    <select class="select bg-gray-100">
                                        <option disabled selected>Pick one</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                    {/* <label class="label">
                                        <span class="label-text-alt">Alt label</span>
                                        <span class="label-text-alt">Alt label</span>
                                    </label> */}
                                </div>
                                <div class="form-control w-full">
                                    <label class="label">
                                        <span class="label-text">Area</span>
                                    </label>
                                    <select class="select bg-gray-100">
                                        <option disabled selected>Pick one</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                    {/* <label class="label">
                                        <span class="label-text-alt">Alt label</span>
                                        <span class="label-text-alt">Alt label</span>
                                    </label> */}
                                </div>
                            </div>
                            <div id='test' className='flex items-end justify-between'>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Select Qty</span>
                                    </label>
                                    <input type="number" placeholder="1" class="input input-bordered w-3/12 bg-gray-100" />
                                </div>
                                <button type="" className='btn btn-success'>Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Center;