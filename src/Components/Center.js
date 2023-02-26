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
        </div>
    );
};

export default Center;