import { Icon } from '@iconify/react';
import React from 'react';
import image from '../Assets/faq-blob1.png'

const Faq = () => {
    return (
        <div id='faq' className='flex justify-center'>
            <div className='pt-20'>
                <div className=''>
                    <h1 className='text-6xl text-center font-semibold' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">FAQ</h1>
                    <p className='mx-auto mt-3 text-2xl font-semibold text-gray-400 max-w-2xl text-center' data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200" data-aos-easing="ease-in-sine">Some frequently asked questions.</p>
                </div>
                <div className='md:container flex flex-col-reverse md:flex-row gap-y-20 gap-10 items-center my-32 md:my-40'>{/* grid grid-cols-2 items-start justify-between */}
                    <div className='flex flex-col gap-3 md:w-6/12'>
                        <div tabIndex='0' className="collapse collapse-plus" data-aos="fade-right" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Is the watch water proof?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>The watch is 100% water resistant with ISO 22810 certification and can handle upto 2mm water glitch. It can handle extream weather conditions and the air tight technology make it more durable and long lasting.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus" data-aos="fade-right" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Is the watch compatible for all aged people?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>The watch is designed and made for all aged people so that everyone can use it and take benefits from it. We have evolved some new functionalities that is benefited for both young and aged people. So without any hesitation all aged people can buy this product and use it comfortably.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus" data-aos="fade-right" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Can I claim warrenty if there is an issue?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>You can claim warrenty within 1 year after purchasing the product. To claim warrenty you have to bring the product with warrenty certificate to our nearest showroom. We will observe the problem and repair it. If it's unrepairable then we will replce the product and provide a new one.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus" data-aos="fade-right" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                How to order from offline?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>You can also order our products from offline if you are facing any issue with online. Just simply call our 24 hours agent service at +9125484484 and provide your information. Our agent will place the order for you and you will get the delivery within 24 hours after placing order.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus" data-aos="fade-right" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Can I get express delivery?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>Our express delivery is available only for california. If you are living in California you can get express delivery within 8 hours.</p>
                                <p>To get express delivery you have to call our agent at +9125484484. Additional 50$ will be applicable for express delivery.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine" className='md:w-6/12'>
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