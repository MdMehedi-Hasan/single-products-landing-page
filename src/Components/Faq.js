import { Icon } from '@iconify/react';
import React from 'react';
import image from '../Assets/faq.png'
import blob from '../Assets/faq-blob1.svg'

const Faq = () => {
    return (
        <div id='faq' className='flex justify-center'>
            <div className='pt-20'>
                <div className=''>
                    <h1 className='text-6xl text-center font-semibold'>FAQ</h1>
                    <p className='mx-auto mt-3 text-2xl font-semibold text-gray-400 max-w-2xl text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='container grid grid-cols-2 items-start justify-between my-40'>
                    <div className='flex flex-col gap-3'>
                        <div tabIndex='0' className="collapse collapse-plus collapse-open">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Why the product price is too high?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Why the product price is too high?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Why the product price is too high?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex items-center gap-2 bg-green-400 rounded text-white font-bold text-xl">
                                <Icon icon="mdi:question-mark-circle" className='text-2xl' />
                                Why the product price is too high?
                            </div>
                            <div className="collapse-content bg-white">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
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
                    <div>
                        <figure className='flex justify-end relative'>
                            <img src={image} alt="Trulli" className='relative z-10'/>
                            {/* <img src={blob} alt="" className='absolute z-0 right-0 top-0'/> */}
                        </figure>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;