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

const Review = () => {
    return (
        <div className='pt-40 bg-base-200 mb-40'>
            <Swiper
                slidesPerView={1}
                // spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper text-center"
            >
                <SwiperSlide className='pb-10 pt-2'>
                    <div className='w-[620px] mx-auto'>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-success">
                                <img src={review1} alt='client' />
                            </div>
                        </div>
                        <h1 className='pb-5 text-xl font-semibold text-gray-500'>Mrs. Angelina Jolly</h1>
                        <p className='pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-10 pt-2'>
                    <div className='w-[620px] mx-auto'>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-success">
                                <img src={review2} alt='client' />
                            </div>
                        </div>
                        <h1 className='pb-5 text-xl font-semibold text-gray-500'>Mrs. Angelina Jolly</h1>
                        <p className='pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-10 pt-2'>
                    <div className='w-[620px] mx-auto'>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-success">
                                <img src={review3} alt='client' />
                            </div>
                        </div>
                        <h1 className='pb-5 text-xl font-semibold text-gray-500'>Mrs. Angelina Jolly</h1>
                        <p className='pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-10 pt-2'>
                    <div className='w-[620px] mx-auto'>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-success">
                                <img src={review4} alt='client' />
                            </div>
                        </div>
                        <h1 className='pb-5 text-xl font-semibold text-gray-500'>Mrs. Angelina Jolly</h1>
                        <p className='pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-10 pt-2'>
                    <div className='w-[620px] mx-auto'>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-success">
                                <img src={review2} alt='client' />
                            </div>
                        </div>
                        <h1 className='pb-5 text-xl font-semibold text-gray-500'>Mrs. Angelina Jolly</h1>
                        <p className='pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-10 pt-2'>
                    <div className='w-[620px] mx-auto'>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-success">
                                <img src={review3} alt='client' />
                            </div>
                        </div>
                        <h1 className='pb-5 text-xl font-semibold text-gray-500'>Mrs. Angelina Jolly</h1>
                        <p className='pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Review;