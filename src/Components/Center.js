import { Icon } from '@iconify/react';
import React from 'react';
import image from '../Assets/straight-watch.png'

const Center = () => {
    return (
        <div>
            <section className='flex gap-10 justify-center'>
                <div class="card w-auto bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-auto bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-auto bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto'>
                <div className='flex'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex justify-start border-r-2 border-b-2 p-5 border-gray-500'><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start border-r-2 border-b-2 p-5 border-gray-500'><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start border-r-2 border-b-2 p-5 border-gray-500'><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'><img src={image} alt="" /></div>
                    <div className='flex flex-col gap-10'>
                        <div className='flex justify-start border-r-2 border-b-2 p-5 border-gray-500'><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start border-r-2 border-b-2 p-5 border-gray-500'><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className='flex justify-start border-r-2 border-b-2 p-5 border-gray-500'><Icon icon="ion:watch" className='text-6xl' />
                            <div>
                                <h1 className='pt-0 mt-0'>Reliable</h1>
                                <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto'>
                <div className='flex justify-between w-full'>
                    <div><img src={image} alt=""/></div>
                    <div>
                        <form>
                            <div className='flex gap-5'>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Email Address</span>
                                </label>
                                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                            </div>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Delivery Address</span>
                                </label>
                                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                            </div>
                            <div className='flex gap-5'>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">City</span>
                                    </label>
                                    <select class="select select-bordered">
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
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Area</span>
                                    </label>
                                    <select class="select select-bordered">
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
                            <div className='flex items-end justify-between'>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Select Qty</span>
                                    </label>
                                    <input type="number" placeholder="1" class="input input-bordered w-3/12" />
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