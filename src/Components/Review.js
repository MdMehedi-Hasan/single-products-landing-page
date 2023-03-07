import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import review1 from '../Assets/review/11.png'
import review2 from '../Assets/review/22.png'
import review3 from '../Assets/review/33.png'
import review4 from '../Assets/review/44.png'
import { Icon } from '@iconify/react';

const Review = () => {
    return (
        <div className='pt-20 bg-base-200 mb-20'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                // freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper text-center"
            >
                <SwiperSlide className='pb-10 pt-2'>
                    <div className='max-w-[620px] mx-auto'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-success">
                                <img src={review1} alt='client' />
                            </div>
                        </div>
                        <h1 className='pb-5 text-xl font-semibold text-gray-500'>Andrew Duke</h1>
                        <p className='pb-10'><Icon icon="bxs:quote-alt-left" className='inline-block -mt-3 mr-1 text-gray-500'/>I love the watch. It is extreamly beautiful and matches my personality. As a content creator I have to maintain time and track daily activitis. This watch helps me to do my works on time and become myself more productive.<Icon icon="bxs:quote-alt-right" className='inline-block -mb-1 ml-1 text-gray-500'/></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-10 pt-2'>
                    <div className='max-w-[620px] mx-auto'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-success">
                                <img src={review2} alt='client' />
                            </div>
                        </div>
                        <h1 className='pb-5 text-xl font-semibold text-gray-500'>Helena Jolly</h1>
                        <p className='pb-10'><Icon icon="bxs:quote-alt-left" className='inline-block -mt-3 mr-1 text-gray-500'/>Got the product as expected. I ordered the product at morning and got it by evening. They have very strong cutomer service. Would love to buy from them again.<Icon icon="bxs:quote-alt-right" className='inline-block -mb-1 ml-1 text-gray-500'/></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-10 pt-2'>
                    <div className='max-w-[620px] mx-auto'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-success">
                                <img src={review3} alt='client' />
                            </div>
                        </div>
                        <h1 className='pb-5 text-xl font-semibold text-gray-500'>Ameli Jeorge</h1>
                        <p className='pb-10'><Icon icon="bxs:quote-alt-left" className='inline-block -mt-3 mr-1 text-gray-500'/>I recently got my hands on a the watch and I have to say, I am thoroughly impressed! The watch is sleek and stylish, and it has all the features I could possibly need. The interface is easy to navigate and I love the fact that I can customize the watch face to my liking<Icon icon="bxs:quote-alt-right" className='inline-block -mb-1 ml-1 text-gray-500'/></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-10 pt-2'>
                    <div className='max-w-[620px] mx-auto'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-success">
                                <img src={review4} alt='client' />
                            </div>
                        </div>
                        <h1 className='pb-5 text-xl font-semibold text-gray-500'>Mr. Fragement</h1>
                        <p className='pb-10'><Icon icon="bxs:quote-alt-left" className='inline-block -mt-3 mr-1 text-gray-500'/>The fitness tracking features is a huge plus for me, as I can easily track my daily steps, heart rate, and even my sleep patterns. The watch also seamlessly connects to my phone, allowing me to receive notifications and even take calls from my wrist.<Icon icon="bxs:quote-alt-right" className='inline-block -mb-1 ml-1 text-gray-500'/></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-10 pt-2'>
                    <div className='max-w-[620px] mx-auto'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-success">
                                <img src={review2} alt='client' />
                            </div>
                        </div>
                        <h1 className='pb-5 text-xl font-semibold text-gray-500'>Mrs. Angelina Jolly</h1>
                        <p className='pb-10'><Icon icon="bxs:quote-alt-left" className='inline-block -mt-3 mr-1 text-gray-500'/>I love that I can customize the watch face to my liking. The fitness tracking features are spot-on, accurately tracking my steps, heart rate, and even my sleep patterns.<Icon icon="bxs:quote-alt-right" className='inline-block -mb-1 ml-1 text-gray-500'/></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-10 pt-2'>
                    <div className='max-w-[620px] mx-auto'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-success">
                                <img src={review3} alt='client' />
                            </div>
                        </div>
                        <h1 className='pb-5 text-xl font-semibold text-gray-500'>Oliver</h1>
                        <p className='pb-10'><Icon icon="bxs:quote-alt-left" className='inline-block -mt-3 mr-1 text-gray-500'/>The watch seamlessly connects to my phone, allowing me to receive notifications and even take calls directly from my wrist. Overall, I would highly recommend this smartwatch to anyone looking for a convenient and stylish way to stay on top of their busy lives while also staying healthy and active.<Icon icon="bxs:quote-alt-right" className='inline-block -mb-1 ml-1 text-gray-500'/></p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Review;