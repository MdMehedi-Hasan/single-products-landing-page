import { Icon } from '@iconify/react';
import React from 'react';
import image from '../Assets/faq-blob1.png'

const Faq = () => {
    return (
        <div id='faq' className='flex justify-center'>
            <div className='pt-20'>
                <div className=''>
                    <h1 className='text-6xl text-center font-semibold' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">FAQ</h1>
                    <p className='mx-auto mt-3 text-2xl font-semibold text-gray-400 max-w-2xl text-center' data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200" data-aos-easing="ease-in-sine">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='md:container flex flex-col-reverse md:flex-row gap-y-20 gap-10 items-center my-32 md:my-40'>{/* grid grid-cols-2 items-start justify-between */}
                    <div className='flex flex-col gap-3 md:w-6/12'>
                        <div tabIndex='0' className="collapse collapse-plus" data-aos="fade-right" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Why the product price is too high?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus" data-aos="fade-right" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Why the product price is too high?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus" data-aos="fade-right" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Why the product price is too high?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus" data-aos="fade-right" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Why the product price is too high?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus" data-aos="fade-right" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Why the product price is too high?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine" className='md:w-6/12'>
                        <figure className='flex justify-end relative'>
                            <img src={image} alt="Trulli" className='relative z-10'/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;